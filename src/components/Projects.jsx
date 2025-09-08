import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const styles = {
    page: {
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      width: "100vw",
      overflowX: "hidden",
      backgroundColor: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
    },
    navbar: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
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
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
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
    content: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "48px",
      fontWeight: "bold",
      color: "#133020",
      backgroundColor: "#f5eedb",
      paddingTop: "120px", 
    },
    footerText: {
      color: "#ffffff",
      fontSize: "16px",
      textAlign: "center",
      padding: "20px 0",
      width: "100%",
      background: "linear-gradient(90deg, #133020, #046241)",
    },
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <img
          src="/images/lifewoodlogo.png"
          alt="Lifewood Logo"
          style={styles.logo}
        />
        <ul style={styles.navLinks}>
          <li>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={styles.link}>About Us</Link>
          </li>
          <li>
            <Link to="/projects" style={styles.link}>Projects</Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div style={styles.content}>
        <p>Soon 🚀</p>
      </div>

      {/* Footer */}
      <div style={styles.footerText}>
        © 2025 Lifewood Training Program. All rights reserved.
      </div>
    </div>
  );
};

export default Projects;
