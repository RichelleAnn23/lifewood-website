import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Homepage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);
  const [isHoveringImg, setIsHoveringImg] = useState(false);

  const styles = {
    page: {
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      width: "100vw",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(135deg, #0f2027, #133020, #046241)",
      overflow: "hidden",
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
    loginLink: {
      position: "absolute",
      right: "100px",
      color: "#046241",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    content: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      paddingTop: "130px",
      paddingBottom: "80px",
      paddingLeft: "120px",
      paddingRight: "120px",
      gap: "60px",
    },
    textContainer: {
      maxWidth: "700px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      position: "relative",
    },
    heading: {
      fontSize: "80px",
      fontWeight: "bold",
      marginBottom: "25px",
      lineHeight: "1.2",
      letterSpacing: "1.5px",
      background: "linear-gradient(270deg, #FFB347, #ffffff, #046241, #FFB347)",
      backgroundSize: "600% 600%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "gradientMove 8s ease infinite",
    },
    paragraph: {
      fontSize: "20px",
      maxWidth: "520px",
      lineHeight: "1.8",
      marginBottom: "30px",
      background: "linear-gradient(270deg, #d9d9d9, #FFB347, #ffffff, #d9d9d9)",
      backgroundSize: "600% 600%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "gradientMove 10s ease infinite",
    },
    button: {
      background: "linear-gradient(90deg, #0d3b2e, #046241)",
      color: "#ffffff",
      padding: "16px 40px",
      fontSize: "20px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
      boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
      marginTop: "20px",
    },
    buttonHover: {
      background: "linear-gradient(90deg, #046241, #0f2027)",
      transform: "scale(1.08)",
      boxShadow: "0px 12px 28px rgba(0,0,0,0.5)",
    },
    aiImage: {
      height: "500px",
      width: "100%",
      objectFit: "cover",
      borderRadius: "20px",
      boxShadow: "0px 15px 30px rgba(0,0,0,0.5)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      animation: "floatMove 6s ease-in-out infinite",
    },
    aiImageHover: {
      transform: "scale(1.08) rotate(1deg)",
      boxShadow: "0px 20px 40px rgba(0,0,0,0.7)",
    },
    popupContainer: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2000,
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
    extraSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
      padding: "100px 120px",
      borderTop: "2px solid rgba(255,255,255,0.15)",
      transition: "all 0.3s ease",
      textAlign: "center",
    },
    extraText: {
      fontSize: "18px",
      lineHeight: "1.7",
      maxWidth: "800px",
    },
    extraHeading: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "20px",
      backgroundSize: "600% 600%",
      WebkitBackgroundClip: "text",
      animation: "gradientMove 10s ease infinite",
    },
    extraImage: {
      flex: 1,
      width: "100%",
      maxWidth: "500px", 
      borderRadius: "8px", 
      border: "3px solid #ddd", 
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)", 
      objectFit: "cover",
      transition: "transform 0.3s ease",
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
        <span style={styles.loginLink} onClick={() => setIsLoginOpen(true)}>
          Log In
        </span>
      </nav>

      {/* Hero Section */}
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Welcome to Lifewood</h1>
          <p style={styles.paragraph}>
            Step into the AI revolution—learn, evolve, and help shape the future with us.  
            <br />Your journey to mastering tomorrow’s technology starts today.
          </p>
          <Link
            to="/form"
            style={{ ...styles.button, ...(isHoveringBtn ? styles.buttonHover : {}) }}
            onMouseEnter={() => setIsHoveringBtn(true)}
            onMouseLeave={() => setIsHoveringBtn(false)}
          >
            Apply Now
          </Link>
        </div>
        <img
          src="/images/AI.jpg"
          alt="AI Illustration"
          style={{ ...styles.aiImage, ...(isHoveringImg ? styles.aiImageHover : {}) }}
          onMouseEnter={() => setIsHoveringImg(true)}
          onMouseLeave={() => setIsHoveringImg(false)}
        />
      </div>

      {/* Section 1 */}
      <div
        style={{
          ...styles.extraSection,
          background: "#ffffff",
          padding: "60px 90px", 
          gap: "20px", 
        }}
      >
        <h2
          style={{
            ...styles.extraHeading,
            background: "none",
            WebkitTextFillColor: "#046241",
            marginTop: "0",
            fontSize: "34px",
            marginBottom: "10px", 
          }}
        >
          Why Choose Lifewood?
        </h2>
        <p
          style={{
            color: "#046241",
            fontSize: "22px",
            lineHeight: "1.6",
            marginBottom: "12px",
          }}
        >
          At Lifewood, innovation meets opportunity.  
          We empower individuals to embrace artificial intelligence,  
          developing future-ready skills for careers that matter.
        </p>
        <p
          style={{
            color: "#046241",
            fontSize: "18px",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          With hands-on mentorship and industry-driven projects,  
          you don’t just learn AI—you live it, apply it, and lead with it.
        </p>
      </div>

      {/* Section 2 */}
      <div
        style={{
          ...styles.extraSection,
          background: "linear-gradient(135deg, #0d3b2e, #046241)",
          color: "#ffffff",
          padding: "60px 90px",
          gap: "20px",
        }}
      >
        <h2
          style={{
            ...styles.extraHeading,
            background: "none",
            WebkitTextFillColor: "#ffffff",
            marginTop: "0",
            fontSize: "34px",
            marginBottom: "10px",
          }}
        >
          Our Programs & Training
        </h2>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.6",
            marginBottom: "12px",
          }}
        >
          Explore immersive training paths designed for beginners,  
          professionals, and visionaries alike.
        </p>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Our programs cover everything from data science to creative AI applications,  
          giving you real-world skills to shape the future.
        </p>
        <Link
          to="/projects"
          style={{
            ...styles.button,
            ...(isHoveringBtn ? styles.buttonHover : {}),
            fontSize: "18px",
            padding: "14px 32px",
          }}
          onMouseEnter={() => setIsHoveringBtn(true)}
          onMouseLeave={() => setIsHoveringBtn(false)}
        >
          Explore Programs →
        </Link>
      </div>

      {/* Section 3 */}
      <div
        style={{
          ...styles.extraSection,
          background: "#f5eedb",
          flexDirection: "row",
          alignItems: "center",
          textAlign: "left",
          gap: "30px",
          padding: "60px 90px",
        }}
      >
        {/* Text Content */}
        <div style={{ ...styles.extraText, color: "#046241", flex: 1 }}>
          <h2
            style={{
              ...styles.extraHeading,
              background: "none",
              WebkitTextFillColor: "#046241",
              textAlign: "left",
              fontSize: "34px",
              marginBottom: "12px",
            }}
          >
            A Wide Variety of Services
          </h2>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "18px",
              fontWeight: "500",
            }}
          >
            For All Types of AI Training Data
          </p>

          <div style={{ lineHeight: "1.6", fontSize: "18px" }}>
            <strong style={{ fontSize: "19px" }}>01. Data Acquisition</strong>
            <p>
              We provide comprehensive data solutions for acquiring, processing, and managing diverse datasets to fuel the training and evolution of artificial intelligence.
            </p>

            <strong style={{ fontSize: "19px" }}>02. Data Collection</strong>
            <p>
              Our services include text collection, labelling, speech collection, sentiment analysis, audio/video categorisation, classification, tagging, and broadcast subtitles.
            </p>

            <strong style={{ fontSize: "19px" }}>03. Data Annotation</strong>
            <p>
              Data is the fuel for all AI. With our high-quality services, we accelerate your organisation's cognitive systems and digital strategy.
            </p>

            <strong style={{ fontSize: "19px" }}>04. Data Curation</strong>
            <p>
              We sift, select, and index data to ensure reliability, accessibility, and ease of classification for research, business, and decision-making.
            </p>

            <strong style={{ fontSize: "19px" }}>05. Data Validation</strong>
            <p>
              We verify that data conforms to standards and constraints, ensuring accuracy, consistency, and completeness for reliable results.
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          src="/images/AIHOME.jpeg"
          alt="AI Services"
          style={{
            flex: 1,
            width: "100%",
            maxWidth: "460px",
            borderRadius: "8px",
            border: "3px solid #ddd",
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* Popup Login Form */}
      {isLoginOpen && (
        <div style={styles.popupContainer}>
          <Login onClose={() => setIsLoginOpen(false)} />
        </div>
      )}

      {/* Footer */}
      <div style={styles.footerText}>
        © 2025 Lifewood Training Program. All rights reserved.
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes floatMove {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
          a:hover { color: #046241 !important; }
          img:hover { transform: scale(1.03); }
        `}
      </style>
    </div>
  );
};

export default Homepage;
