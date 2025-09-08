import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Edit"; // ✅ import Edit popup

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState([]);
  const [history, setHistory] = useState([]);
  const [toast, setToast] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [historyFilter, setHistoryFilter] = useState("All"); 
  const historyEndRef = useRef(null);
  const navigate = useNavigate();

  const styles = {
    page: {
      margin: 0,
      padding: 0,
      minHeight: "100vh", // full height
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "#f5eedb",
      color: "#133020",
      boxSizing: "border-box",
      overflowX: "hidden",
      paddingTop: "120px", // space for fixed navbar
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
      height: "42px" 
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
    logoutLink: {
      position: "absolute",
      right: "100px",
      color: "#046241",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    pageLabel: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      color: "#133020",
      marginBottom: "40px",
      textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    },
    tableWrapper: {
      width: "90%",
      maxWidth: "1200px",
      margin: "0 auto 40px",
      overflowX: "auto",
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      padding: "20px",
    },
    tableTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#133020",
      marginBottom: "20px",
      paddingLeft: "5px",
      borderLeft: "5px solid #046241",
      marginLeft: "10px",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0 8px",
      minWidth: "700px",
    },
    th: {
      backgroundColor: "#046241",
      color: "#f5eedb",
      padding: "15px 12px",
      textAlign: "left",
      borderBottom: "none",
    },
    td: {
      padding: "15px 12px",
      border: "none",
      color: "#133020",
      backgroundColor: "#f9f9f9",
      transition: "0.3s",
      borderLeft: "1px solid #eee",
      borderRight: "1px solid #eee",
    },
    trHover: {
      cursor: "pointer",
    },
    acceptBtn: {
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
      marginRight: "8px",
      fontWeight: "bold",
    },
    declineBtn: {
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    deleteBtn: {
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      padding: "8px 14px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      marginLeft: "8px",
    },
    editBtn: {
      backgroundColor: "#ffc107",
      color: "#000",
      border: "none",
      padding: "8px 14px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      marginRight: "8px",
    },
    highlight: {
      backgroundColor: "rgba(4, 98, 65, 0.15)",
      transition: "background-color 1s ease",
    },
    toast: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      background: "#046241",
      color: "#fff",
      padding: "15px 25px",
      borderRadius: "10px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
      zIndex: 9999,
      fontSize: "16px",
    },
    controlBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      margin: "0 auto 30px",
      padding: "15px",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    },
    inputField: {
      padding: "10px 15px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      width: "280px",
      backgroundColor: "#ffffff",
      color: "#133020",
    },
    actionButton: {
      padding: "10px 20px",
      backgroundColor: "#046241",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    secondaryButton: {
      padding: "10px 20px",
      backgroundColor: "#133020",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      marginLeft: "15px",
    },
    countsContainer: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
      fontSize: "17px",
      fontWeight: "600",
      color: "#133020",
    },
    countItem: {
      padding: "8px 15px",
      borderRadius: "20px",
      backgroundColor: "#e0f2f1",
    },
    filterDropdown: {
      padding: "10px 15px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      backgroundColor: "#ffffff",
      color: "#133020",
      marginLeft: "15px",
      minWidth: "150px",
    },
  };

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/applications");
        const data = await response.json();
        setAdminInfo(data.filter((a) => a.status === "Pending"));
        setHistory(
          data
            .filter((a) => a.status !== "Pending")
            .map((a) => ({
              ...a,
              action: a.status,
              time: new Date(a.submittedAt).toLocaleString(),
              highlight: false,
            }))
        );
      } catch (err) {
        console.error("Failed to fetch applicants:", err);
      }
    };
    fetchApplicants();
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const moveToHistory = (id, action) => {
    const applicant = adminInfo.find((a) => a._id === id);
    if (!applicant) return;
    setAdminInfo((prev) => prev.filter((a) => a._id !== id));
    setHistory((prev) => [
      ...prev,
      { ...applicant, action, time: new Date().toLocaleString(), highlight: true },
    ]);
  };

  const handleAccept = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/applications/accept/${id}`, {
        method: "POST",
      });
      moveToHistory(id, "Accepted");
      showToast("✅ Acceptance email sent!");
    } catch {
      showToast("❌ Failed to send acceptance email.");
    }
  };

  const handleDecline = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/applications/decline/${id}`, {
        method: "POST",
      });
      moveToHistory(id, "Declined");
      showToast("✅ Application declined.");
    } catch {
      showToast("❌ Failed to decline application.");
    }
  };

  const handleDeleteHistory = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/applications/${id}`, {
        method: "DELETE",
      });
      setHistory((prev) => prev.filter((record) => record._id !== id));
      showToast("🗑️ Record deleted successfully.");
    } catch {
      showToast("❌ Failed to delete record.");
    }
  };

  const handleUpdateApplicant = (updatedApplicant) => {
    setHistory((prev) =>
      prev.map((app) =>
        app._id === updatedApplicant._id ? { ...app, ...updatedApplicant, highlight: true } : app
      )
    );
    showToast("✏️ Applicant updated successfully.");
    setShowEditModal(false);
  };

  useEffect(() => {
    if (history.length === 0) return;
    const timer = setTimeout(() => {
      setHistory((prev) =>
        prev.map((h, idx) =>
          idx === prev.length - 1 ? { ...h, highlight: false } : h
        )
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [history]);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const filteredApplicants = adminInfo.filter((app) =>
    app.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredHistory = history.filter((app) =>
    historyFilter === "All" ? true : app.action === historyFilter
  );

  const exportData = () => {
    const data = [...adminInfo, ...history];
    const csvHeader = ["Full Name", "Project", "Age", "Email", "Degree", "Status", "Date and Time"].join(",");
    const csvRows = data.map((row) =>
      [
        `"${row.fullName}"`,
        `"${row.projectAppliedFor}"`,
        row.age,
        `"${row.email}"`,
        `"${row.degree}"`,
        `"${row.action || row.status}"`,
        `"${row.time || new Date(row.submittedAt).toLocaleString()}"`,
      ].join(",")
    );
    const csv = [csvHeader, ...csvRows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "applicants_data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("⬇️ Data exported to CSV!");
  };

  const acceptedCount = history.filter((h) => h.action === "Accepted").length;
  const declinedCount = history.filter((h) => h.action === "Declined").length;
  const pendingCount = adminInfo.length;

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <img src="/images/lifewoodlogo.png" alt="Lifewood Logo" style={styles.logo} />
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About Us</Link></li>
          <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        </ul>
        <Link to="/" style={styles.logoutLink}>Log Out</Link>
      </nav>

      <div style={styles.pageLabel}>Admin Dashboard</div>

      {/* 🔹 Search, Export & Counts */}
      <div style={styles.controlBar}>
        <input
          type="text"
          placeholder="Search pending applicants by name..."
          style={styles.inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div style={styles.countsContainer}>
          <span style={styles.countItem}>Pending: {pendingCount}</span>
          <span style={styles.countItem}>Accepted: {acceptedCount}</span>
          <span style={styles.countItem}>Declined: {declinedCount}</span>
        </div>
        <div>
          <button style={styles.actionButton} onClick={exportData}>Export Data</button>
          <button style={styles.secondaryButton} onClick={() => navigate("/form")}>Add Applicant</button>
        </div>
      </div>

      {/* Pending Applicants Table */}
      <div style={styles.tableWrapper}>
        <h3 style={styles.tableTitle}>Pending Applications</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Full Name</th>
              <th style={styles.th}>Project</th>
              <th style={styles.th}>Age</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Degree</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.length === 0 ? (
              <tr>
                <td style={{ ...styles.td, textAlign: "center" }} colSpan={6}>No pending applications.</td>
              </tr>
            ) : (
              filteredApplicants.map((app) => (
                <tr key={app._id}>
                  <td style={styles.td}>{app.fullName}</td>
                  <td style={styles.td}>{app.projectAppliedFor}</td>
                  <td style={styles.td}>{app.age}</td>
                  <td style={styles.td}>{app.email}</td>
                  <td style={styles.td}>{app.degree}</td>
                  <td style={styles.td}>
                    <button style={styles.acceptBtn} onClick={() => handleAccept(app._id)}>Accept</button>
                    <button style={styles.declineBtn} onClick={() => handleDecline(app._id)}>Decline</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* History Table */}
      <div style={styles.tableWrapper}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h3 style={styles.tableTitle}>Application History</h3>
          <select style={styles.filterDropdown} value={historyFilter} onChange={(e) => setHistoryFilter(e.target.value)}>
            <option value="All">Show All</option>
            <option value="Accepted">Accepted</option>
            <option value="Declined">Declined</option>
          </select>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Full Name</th>
              <th style={styles.th}>Project</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Degree</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Date and Time</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.length === 0 ? (
              <tr>
                <td style={{ ...styles.td, textAlign: "center" }} colSpan={7}>No history records matching your filter.</td>
              </tr>
            ) : (
              filteredHistory.map((record) => (
                <tr key={record._id} style={record.highlight ? styles.highlight : {}}>
                  <td style={styles.td}>{record.fullName}</td>
                  <td style={styles.td}>{record.projectAppliedFor}</td>
                  <td style={styles.td}>{record.email}</td>
                  <td style={styles.td}>{record.degree}</td>
                  <td style={styles.td}>{record.action}</td>
                  <td style={styles.td}>{record.time}</td>
                  <td style={styles.td}>
                    <button style={styles.editBtn} onClick={() => { setSelectedApplicant(record); setShowEditModal(true); }}>Edit</button>
                    <button style={styles.deleteBtn} onClick={() => handleDeleteHistory(record._id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
            <tr ref={historyEndRef} />
          </tbody>
        </table>
      </div>

      {toast && <div style={styles.toast}>{toast}</div>}

      {showEditModal && selectedApplicant && (
        <Edit applicant={selectedApplicant} onClose={() => setShowEditModal(false)} onUpdate={handleUpdateApplicant} />
      )}
    </div>
  );
};

export default AdminDashboard;
