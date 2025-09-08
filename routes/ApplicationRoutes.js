const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Schema
const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  degree: { type: String, required: true },
  experience: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  projectAppliedFor: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Accepted", "Declined"], default: "Pending" },
  hidden: { type: Boolean, default: false }, // ✅ new field
}, { collection: "applications" });

const Application = mongoose.model("Application", applicationSchema);

// Submit new application
router.post("/", async (req, res) => {
  try {
    const { fullName, age, degree, experience, email, projectAppliedFor } = req.body;

    if (!fullName || !age || !degree || !experience || !email || !projectAppliedFor) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newApp = new Application({ fullName, age, degree, experience, email, projectAppliedFor });
    await newApp.save();

    res.status(201).json({ message: "✅ Application submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting application:", error.message);
    if (error.code === 11000) return res.status(400).json({ error: "Email already exists." });
    res.status(500).json({ error: error.message });
  }
});

// Get all applications (excluding hidden if needed)
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find(); // get all including hidden
    res.json(applications);
  } catch (error) {
    console.error("❌ Error fetching applications:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Accept applicant & send email
router.post("/accept/:id", async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) return res.status(404).json({ error: "Application not found" });

    application.status = "Accepted";
    await application.save();

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: application.email,
        subject: "Application Accepted ✅",
        text: `Hi ${application.fullName},\n\nYour application for ${application.projectAppliedFor} has been accepted!\n\nBest regards,\nTeam`,
      });

      res.json({ message: `Acceptance email sent to ${application.email}` });
    } catch (emailError) {
      console.error("❌ Error sending email:", emailError.message);
      res.json({ message: `Status updated to Accepted, but failed to send email.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Decline applicant
router.post("/decline/:id", async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) return res.status(404).json({ error: "Application not found" });

    application.status = "Declined";
    await application.save();

    res.json({ message: `Application ${application.fullName} declined.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update applicant
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedApp = await Application.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedApp) {
      return res.status(404).json({ error: "Applicant not found" });
    }

    res.json(updatedApp);
  } catch (error) {
    console.error("❌ Error updating applicant:", error.message);
    res.status(500).json({ error: "Failed to update applicant." });
  }
});

// Hide from history (does NOT delete from DB)
router.put("/hide/:id", async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { hidden: true },
      { new: true }
    );

    if (!application) return res.status(404).json({ error: "Application not found" });

    res.json({ message: `Application ${application.fullName} hidden from history.` });
  } catch (error) {
    console.error("❌ Error hiding application:", error.message);
    res.status(500).json({ error: "Failed to hide application." });
  }
});

module.exports = router;
