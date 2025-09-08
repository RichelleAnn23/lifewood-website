const nodemailer = require("nodemailer");

let transporter;

// ✅ Setup transporter only if env variables exist
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
} else {
  console.warn("⚠️ EMAIL_USER or EMAIL_PASS not set. Email sending will not work.");
}

// Send acceptance email
const sendAcceptanceEmail = async (toEmail, fullName, projectAppliedFor) => {
  if (!transporter) throw new Error("Email transporter not configured");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: `Application Accepted for ${projectAppliedFor}`,
    text: `Hi ${fullName},\n\nCongratulations! Your application for "${projectAppliedFor}" has been accepted.\n\nBest regards,\nYour Company`,
  };

  return transporter.sendMail(mailOptions);
};

// Send decline email
const sendDeclineEmail = async (toEmail, fullName, projectAppliedFor) => {
  if (!transporter) throw new Error("Email transporter not configured");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: `Application Declined for ${projectAppliedFor}`,
    text: `Hi ${fullName},\n\nWe regret to inform you that your application for "${projectAppliedFor}" has been declined.\n\nBest regards,\nYour Company`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendAcceptanceEmail, sendDeclineEmail };
