import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const styles = {
    page: {
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      width: "100vw",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(135deg, #f5eedb, #e2dbc5)",
      overflowX: "hidden",
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
    contentWrapper: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "160px 20px 80px",
      textAlign: "center",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "60px",
      fontWeight: "900",
      marginBottom: "20px",
      marginTop: "5px",
      color: "#133020",
      letterSpacing: "-1px",
      textShadow: "0px 6px 14px rgba(0,0,0,0.15)",
    },
    divider: {
      width: "90px",
      height: "5px",
      background: "linear-gradient(90deg, #FFB347, #046241)",
      margin: "20px auto 35px",
      borderRadius: "6px",
    },
    subHeading: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#046241",
      marginBottom: "40px",
      marginTop: "10px",
      maxWidth: "700px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "1.7",
      animation: "fadeIn 1.2s ease",
      textShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    },
    paragraph: {
      fontSize: "19px",
      lineHeight: "1.9",
      marginBottom: "25px",
      maxWidth: "850px",
      marginLeft: "auto",
      marginRight: "auto",
      color: "#2c2c2c",
      animation: "fadeIn 1.5s ease",
      textAlign: "center",
    },
    newSection: {
      background: "linear-gradient(135deg, #046241, #133020)",
      padding: "100px 20px",
      textAlign: "center",
      borderTop: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "inset 0 10px 30px rgba(0,0,0,0.2)",
    },
    newHeading: {
      fontSize: "42px",
      fontWeight: "800",
      color: "#ffffff",
      marginBottom: "20px",
      textShadow: "0px 4px 12px rgba(0,0,0,0.4)",
    },
    newParagraph: {
      fontSize: "18px",
      lineHeight: "1.8",
      color: "#f1f1f1",
      maxWidth: "900px",
      margin: "0 auto 50px",
    },
    cardsWrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      marginTop: "40px",
      padding: "0 20px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.08)",
      borderRadius: "16px",
      padding: "30px 25px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#FFB347",
    },
    cardText: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#f1f1f1",
    },
    footerText: {
      color: "#ffffff",
      fontSize: "15px",
      textAlign: "center",
      padding: "20px 0",
      width: "100%",
      background: "#133020",
      letterSpacing: "0.5px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <img src="/images/lifewoodlogo.png" alt="Lifewood Logo" style={styles.logo} />
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About Us</Link></li>
          <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        </ul>
      </nav>

      {/* Content */}
      <div style={styles.contentWrapper}>
        <h1 style={styles.heading}>About Us</h1>
        <div style={styles.divider}></div>
        <p style={styles.subHeading}>
          Empowering Businesses Through AI Innovation
        </p>
        <p style={styles.paragraph}>
          At Lifewood, we empower businesses to realise the transformative potential of AI — 
          bringing big data to life, launching new ways of thinking, innovating, and doing.
        </p>
        <p style={styles.paragraph}>
          This is the next level of AI's potential, uncovering new methods and insights to 
          reveal unexpected directions and possibilities. Connecting across time, generations 
          and technologies for everyone; delivering the highest levels of scalability, 
          integration, and security.
        </p>
        <p style={styles.paragraph}>
          Harness the technology of the future: bring your data to life and your business to greater heights!
        </p>
      </div>

      {/* New Green Section */}
      <div style={styles.newSection}>
        <h2 style={styles.newHeading}>Our Core Values</h2>
        <p style={styles.newParagraph}>
          We believe in a future where technology empowers people, drives sustainable growth, 
          and creates meaningful impact across communities. Our core values guide our mission 
          and shape the way we innovate.
        </p>

        <div style={styles.cardsWrapper}>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
            }}
          >
            <h3 style={styles.cardTitle}>Innovation</h3>
            <p style={styles.cardText}>
              We challenge boundaries and push the limits of AI to uncover 
              groundbreaking possibilities for businesses worldwide.
            </p>
          </div>

          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
            }}
          >
            <h3 style={styles.cardTitle}>Integrity</h3>
            <p style={styles.cardText}>
              We prioritize transparency, security, and ethical AI practices 
              to ensure trust in every solution we deliver.
            </p>
          </div>

          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
            }}
          >
            <h3 style={styles.cardTitle}>Collaboration</h3>
            <p style={styles.cardText}>
              Together, we achieve more. We work hand-in-hand with partners and 
              clients to co-create impactful solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footerText}>
        © 2025 Lifewood Training Program. All rights reserved.
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
        `}
      </style>
    </div>
  );
};

export default About;
