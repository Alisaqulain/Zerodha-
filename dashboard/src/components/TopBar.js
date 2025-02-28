import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Menu from "./Menu";

const TopBar = () => {
  // ✅ Detect screen size for responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Container styles
  const topbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
    flexDirection: isMobile ? "column" : "row",
  };

  // ✅ Index section styles
  const indicesStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
    textAlign: "center",
  };

  // ✅ Auth buttons styles
  const authButtonsStyle = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-end",
  };

  const buttonStyle = {
    padding: "8px 16px",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "bold",
  };

  return (
    <div style={topbarStyle}>
      {/* Indices Section */}
      <div style={indicesStyle}>
        <div>
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
        </div>
        <div>
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
        </div>
      </div>

      {/* Login and Signup Buttons */}
      <div style={authButtonsStyle}>
        <Link to="/login" style={{ ...buttonStyle, backgroundColor: "#007bff", color: "white" }}>
          Login
        </Link>
        <Link to="/signup" style={{ ...buttonStyle, backgroundColor: "#28a745", color: "white" }}>
          Signup
        </Link>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;