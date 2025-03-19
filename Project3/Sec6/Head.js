import React from 'react';

const Head = () => {
  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
      height: "50vh", // Very short page height
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}>FEATURES</p>
      <h1 style={{ fontSize: "36px", margin: "10px 0" }}>My Certifications</h1>
    </div>
  );
};

export default Head;
