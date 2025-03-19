import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaHandshake, FaServicestack, FaCertificate, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';

function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(true); // Default open on large screens
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to toggle sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle sidebar toggle
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle click events on sidebar items
  const handleClick = (item) => {
    console.log(`${item} clicked`);
    alert(`${item} Clicked!`);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#000", color: "white" }}>
      
      {/* Sidebar Toggle Button (Only for Mobile) */}
      {isMobile && (
        <button 
          onClick={toggleSidebar} 
          style={{
            position: "fixed", 
            left: isOpen ? "280px" : "10px",
            top: "20px",
            background: "#111",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            fontSize: "24px",
            zIndex: 1000
          }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Sidebar */}
      <div style={{ 
        width: isOpen ? "280px" : "0", 
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "#111",
        padding: isOpen ? "20px" : "0",
        overflowY: "auto",
        transition: "0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        alignItems: isOpen ? "center" : "flex-start"
      }}>
        {/* Logo (Only visible when sidebar is open) */}
        {isOpen && (
          <>
            <img 
              src="/assest/logo.jpeg"  
              alt="Logo" 
              style={{ width: "140px", height: "140px", borderRadius: "50%", marginBottom: "20px" }} 
            />
            <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "26px" }}>Haroon Aziz</h2>
          </>
        )}

        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          {[
            { icon: <FaHome />, label: "Home" },
            { icon: <FaHandshake />, label: "Partners" },
            { icon: <FaServicestack />, label: "Services" },
            { icon: <FaCertificate />, label: "Certifications" },
            { icon: <FaBriefcase />, label: "Experience" },
            { icon: <FaBlog />, label: "Blogs" },
            { icon: <FaEnvelope />, label: "Contact Me" },
          ].map((item, index) => (
            <li 
              key={index} 
              style={{ 
                padding: "15px", 
                display: "flex", 
                alignItems: "center", 
                cursor: "pointer",
                fontSize: "18px",
                transition: "0.3s",
              }}
              onClick={() => handleClick(item.label)}
            >
              {item.icon} 
              {isOpen && <span style={{ marginLeft: "15px", color: "white", flex: 1 }}>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div style={{ 
        marginLeft: isOpen ? "300px" : "0", 
        padding: "50px", 
        flex: 1, 
        transition: "0.3s ease-in-out",
        textAlign: "left" // Align text properly
      }}>
        <h1 style={{ color: "white", fontSize: "40px", marginLeft: "30px" }}>Welcome to My Website</h1>
        <p style={{ color: "white", fontSize: "22px", lineHeight: "1.8", marginLeft: "30px" }}>
          This is the main content area. This is the main content area. This is the main content area.
          This is the main content area.
        </p>
        <p style={{ fontSize: "22px", color: "white", lineHeight: "1.8", marginLeft: "30px" }}>  
          This is the main content area. This is the main content area.
          This is the main content area. This is the main content area.
          This is the main content area. This is the main content area. 
          This is the main content area. This is the main content area.
        </p>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="width: 280px"] {
              width: 100vw !important;
            }
            div[style*="marginLeft: 300px"] {
              margin-left: 0 !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default SidebarLayout;
