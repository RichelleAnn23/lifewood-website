import React, { useState, useEffect } from "react";

const Edit = ({ applicant, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(applicant);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      backdropFilter: "blur(3px)",
    },
    card: {
      background: "#f5f5f5",
      padding: "35px clamp(15px, 5%, 40px)",
      borderRadius: "16px",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      width: "500px",
      maxWidth: "95%",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transition: "all 0.3s ease",
    },
    heading: {
      fontSize: "26px",
      fontWeight: "700",
      marginBottom: "25px",
      color: "#046241",
      textAlign: "center",
      letterSpacing: "0.5px",
    },
    formGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: "18px",
      gap: "15px",
    },
    label: {
      fontWeight: "600",
      color: "#133020",
      fontSize: "14.5px",
      minWidth: "120px",
    },
    input: {
      flex: 1,
      padding: "12px 14px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "15px",
      outline: "none",
      transition: "border-color 0.2s, box-shadow 0.2s",
      backgroundColor: "#fff",
    },
    inputFocus: {
      borderColor: "#046241",
      boxShadow: "0 0 5px rgba(4, 98, 65, 0.3)",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end", 
      gap: "15px",
      marginTop: "10px",
      width: "100%",
    },
    saveBtn: {
      backgroundColor: "#046241",
      color: "#fff",
      border: "none",
      padding: "12px 25px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "15px",
      transition: "all 0.2s ease",
    },
    saveBtnHover: {
      backgroundColor: "#035634",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
    cancelBtn: {
      backgroundColor: "#e0e0e0",
      color: "#333",
      border: "none",
      padding: "12px 25px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "15px",
      transition: "all 0.2s ease",
    },
    cancelBtnHover: {
      backgroundColor: "#d5d5d5",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    error: {
      color: "#d9534f",
      fontSize: "14px",
      marginBottom: "12px",
      textAlign: "center",
      fontWeight: "500",
    },
  };

  useEffect(() => {
    setFormData(applicant);
  }, [applicant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://lifewood-website.onrender.com/api/applications/${formData._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to update applicant.");

      let updatedApplicant;
      try {
        updatedApplicant = await response.json();
      } catch {
        updatedApplicant = formData;
      }

      onUpdate(updatedApplicant);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Edit Applicant</h2>

        {error && <div style={styles.error}>{error}</div>}

        {["fullName", "projectAppliedFor", "age", "email", "degree"].map(
          (field) => (
            <div key={field} style={styles.formGroup}>
              <label style={styles.label}>
                {field === "projectAppliedFor"
                  ? "Project"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={
                  field === "age"
                    ? "number"
                    : field === "email"
                    ? "email"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) =>
                  (e.target.style = { ...styles.input, ...styles.inputFocus })
                }
                onBlur={(e) => (e.target.style = styles.input)}
              />
            </div>
          )
        )}

        <div style={styles.buttonWrapper}>
          <button
            style={styles.saveBtn}
            onClick={handleSave}
            disabled={loading}
            onMouseOver={(e) =>
              (e.target.style = { ...styles.saveBtn, ...styles.saveBtnHover })
            }
            onMouseOut={(e) => (e.target.style = styles.saveBtn)}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <button
            style={styles.cancelBtn}
            onClick={onClose}
            onMouseOver={(e) =>
              (e.target.style = { ...styles.cancelBtn, ...styles.cancelBtnHover })
            }
            onMouseOut={(e) => (e.target.style = styles.cancelBtn)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
