import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Arrow Icon

const Cards = () => {
  const cardsData = [
    {
      title: "Cybersecurity Solutions",
      description: "I will safeguard your digital assets with tailored cybersecurity strategies and proactive defense measures."
    },
    {
      title: "Cybersecurity Trainings",
      description: "I will equip your team with essential cybersecurity skills through practical, instructor-led training programs."
    },
    {
      title: "Cybersecurity Consulting",
      description: "I will navigate cybersecurity challenges with personalized strategic solutions for your organization."
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {cardsData.map((card, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.textRight}>{card.title}</h2>
            <p style={styles.textRight}>{card.description}</p>
            <button 
              style={styles.button}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#e6b800"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#ffcc00"}
            >
              Learn More <FaArrowRight style={styles.arrowIcon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "black",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-end", // Move to right side
    alignItems: "center",
    padding: "20px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row", // Cards in a row
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap", // Wrap cards on smaller screens
  },
  card: {
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: "20px",
    width: "320px", // Fixed width for row alignment
    minHeight: "400px", 
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
    textAlign: "right",
    transition: "transform 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textRight: {
    textAlign: "right", 
  },
  button: {
    backgroundColor: "#ffcc00",
    color: "black",
    border: "none",
    padding: "12px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: "5px",
    transition: "background-color 0.3s ease-in-out",
    marginLeft: "auto",
  },
  arrowIcon: {
    marginLeft: "8px",
  }
};

export default Cards;
