import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/admin");
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <form style={styles.form} onSubmit={handleLogin}>
        <img
          src="/images/LWLogo.png"
          alt="Logo"
          style={styles.logo}
          onClick={() => {
            navigate("/");
            onClose();
          }}
        />

        <h2 style={styles.title}>Admin Login</h2>

        <div style={styles.inputGroup}>
          <FaUser style={styles.icon} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <FaLock style={styles.icon} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <style>
        {`
          .login-btn {
            margin-top: 20px;
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            background: linear-gradient(135deg, #FFB347, #d98c2f);
            color: #133020;
            position: relative;
            overflow: hidden;
            transition: all 0.35s ease;
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.35);
            letter-spacing: 1px;
            z-index: 1;
          }

          .login-btn:hover {
            background: linear-gradient(135deg, #d98c2f, #FFB347);
            color: #fff;
            transform: translateY(-2px) scale(1.03);
            box-shadow: 0 7px 16px rgba(0, 0, 0, 0.5),
                        0 0 12px rgba(30,30,30,0.4);
          }

          .login-btn:active {
            transform: scale(0.96);
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
          }

          .login-btn:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 179, 71, 0.5);
          }

          input:focus {
            border-color: #FFB347 !important;
            box-shadow: 0 0 6px rgba(255, 179, 71, 0.5);
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.6)",
    animation: "fadeIn 0.5s ease",
  },
  form: {
    backgroundColor: "  #133020",
    padding: "50px 35px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    width: "380px",
    maxWidth: "90%",
    textAlign: "center",
    animation: "popup 0.4s ease",
  },
  logo: {
    width: "100px",
    height: "100px",
    margin: "0 auto 20px",
    display: "block",
    objectFit: "contain",
    cursor: "pointer",
  },
  title: {
    marginBottom: "15px",
    color: "#f5eedb",
    fontSize: "26px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "18px",
    border: "1px solid #046241",
    borderRadius: "10px",
    padding: "12px",
    backgroundColor: "#f5eedb",
  },
  icon: {
    marginRight: "12px",
    color: "#133020",
    fontSize: "18px",
  },
  input: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "#133020",
  },
};

export default Login;
