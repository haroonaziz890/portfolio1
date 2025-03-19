import React from "react";

function Header() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      background: "#000", 
      color: "#fff", 
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      {/* Bigger Logo Image */}
      <img 
        src="/assest/84dfecee-c363-41d6-8769-0871e50fc6da%20(1).jpeg"  
        alt="Logo" 
        style={{ width: "180px", height: "180px", borderRadius: "50%", marginBottom: "30px", border: "4px solid #ff6600" }} 
      />
      
      {/* Larger Headings */}
      <h1 style={{ fontSize: "3rem", marginBottom: "15px", fontWeight: "bold" }}>Hi, I’m Haroon Aziz</h1>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#ff6600", marginBottom: "25px" }}>
        Web Developer
      </h2>
      
      {/* Animated Button */}
      <a 
        href="#" 
        style={{ 
          marginTop: "20px", 
          padding: "15px 35px", 
          background: "transparent", 
          color: "#fff", 
          textDecoration: "none", 
          border: "3px solid #ff6600", 
          borderRadius: "8px", 
          fontSize: "1.4rem",
          fontWeight: "bold",
          transition: "all 0.3s ease-in-out",
          letterSpacing: "1px"
        }}
        onMouseOver={(e) => { 
          e.target.style.background = "#ff6600"; 
          e.target.style.color = "#000"; 
        }}
        onMouseOut={(e) => { 
          e.target.style.background = "transparent"; 
          e.target.style.color = "#fff"; 
        }}
      >
        CONTACT ME
      </a>
    </div>
  );
}

export default Header;
