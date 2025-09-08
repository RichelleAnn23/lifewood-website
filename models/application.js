// application.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middleware =====
app.use(cors({ origin: "*" })); // allow frontend to connect
app.use(express.json());

// ===== MongoDB Connection =====
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // stop app if DB fails
  });

// ===== Schema & Model =====
const applicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    projectAppliedFor: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
  },
  { collection: "applications" }
);

const Application = mongoose.model("Application", applicationSchema);

// ===== Routes =====

// Health check
app.get("/", (req, res) => {
  res.send("🚀 Application API is running!");
});

// Submit an application
app.post("/api/applications", async (req, res) => {
  try {
    const { fullName, age, degree, experience, email, projectAppliedFor } = req.body;

    if (!fullName || !age || !degree || !experience || !email || !projectAppliedFor) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const existingApp = await Application.findOne({ email });
    if (existingApp) {
      return res.status(400).json({ error: "Application with this email already exists." });
    }

    const newApplication = new Application({
      fullName,
      age,
      degree,
      experience,
      email,
      projectAppliedFor,
    });

    await newApplication.save();
    res.status(201).json({ message: "✅ Application submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting application:", error.message);
    res.status(500).json({ error: "Failed to submit application." });
  }
});

// Get all applications
app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find().sort({ submittedAt: -1 }); // latest first
    res.json(applications);
  } catch (error) {
    console.error("❌ Error fetching applications:", error.message);
    res.status(500).json({ error: "Failed to fetch applications." });
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
