import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // disable button while submitting

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    degree: "",
    experience: "",
    email: "",
    projectAppliedFor: "",
  });

  const styles = {
    page: {
      margin: 0,
      padding: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #f5eedb, #e8e2cf)",
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "auto",
    },
    navbar: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(12px)",
      color: "#133020",
      padding: "25px 40px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    },
    logo: {
      position: "absolute",
      left: "40px",
      height: "42px",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "30px",
      margin: 0,
      padding: 0,
    },
    link: {
      color: "#000000",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      transition: "0.3s",
    },
    formWrapper: {
      marginTop: "100px",
      padding: "40px",
      width: "100%",
      maxWidth: "750px",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderRadius: "20px",
      boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(12px)",
      animation: "fadeIn 1s ease-in-out",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "25px",
      textAlign: "center",
      color: "#133020",
      borderBottom: "3px solid #133020",
      paddingBottom: "15px",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px 25px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "8px",
      fontWeight: "600",
      color: "#444",
    },
    input: {
      padding: "14px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.3s ease",
    },
    select: {
      padding: "14px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.3s ease",
    },
    button: {
      gridColumn: "1 / span 2",
      marginTop: "20px",
      background: "#133020",
      color: "#ffffff",
      padding: "16px",
      fontSize: "18px",
      fontWeight: "600",
      border: "none",
      borderRadius: "12px",
      cursor: isSubmitting ? "not-allowed" : "pointer",
      opacity: isSubmitting ? 0.6 : 1,
      transition: "transform 0.2s ease, box-shadow 0.3s ease",
    },
    error: {
      gridColumn: "1 / span 2",
      color: "red",
      fontWeight: "500",
      marginTop: "10px",
    },
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2000,
    },
    popupBox: {
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
      width: "400px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
    popupTitle: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#133020",
    },
    popupMessage: {
      fontSize: "16px",
      marginBottom: "25px",
      color: "#444",
    },
    popupButton: {
      background: "#133020",
      color: "#fff",
      padding: "12px 20px",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://lifewood-website.onrender.com/api/applications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Server responded with status ${response.status}`
        );
      }

      // success
      setShowPopup(true);
      setFormData({
        fullName: "",
        age: "",
        degree: "",
        experience: "",
        email: "",
        projectAppliedFor: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "Failed to submit. Please check your internet connection or try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <img src="/images/lifewoodlogo.png" alt="Lifewood Logo" style={styles.logo} />
        <ul style={styles.navLinks}>
          <li>
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={styles.link}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/projects" style={styles.link}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* Form */}
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Application Form</h2>
        <form style={styles.formGrid} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="First name, Last name"
              style={styles.input}
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              style={styles.input}
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Degree</label>
            <input
              type="text"
              name="degree"
              placeholder="Enter your degree"
              style={styles.input}
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Relevant Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="Enter your experience"
              style={styles.input}
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Project Applied For</label>
            <select
              name="projectAppliedFor"
              style={styles.select}
              value={formData.projectAppliedFor}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Project --</option>
              <option value="ai-data-extraction">AI Data Extraction</option>
              <option value="ml-enablement">Machine Learning Enablement</option>
              <option value="nlp">Natural Language Processing</option>
              <option value="cv">Computer Vision</option>
            </select>
          </div>

          {errorMessage && <p style={styles.error}>{errorMessage}</p>}

          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      {/* Popup Confirmation */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupBox}>
            <h3 style={styles.popupTitle}>Application Submitted!</h3>
            <p style={styles.popupMessage}>
              Thank you for filling out the form. We will review your application soon.
            </p>
            <button style={styles.popupButton} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
