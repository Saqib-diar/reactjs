

import { useState } from "react";

export default function novbar_01() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <h1 style={styles.logo}>MyLogo</h1>

        <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleButton}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul style={{ ...styles.navLinks, display: isOpen ? "block" : "none" }}>
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={styles.link}
                onClick={() => setIsOpen(false)} 
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Basic CSS styles (JS object)
const styles = {
  navbar: {
    backgroundColor: "#007bff",
    padding: "10px",
    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  toggleButton: {
    fontSize: "24px",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "block",
  },
  navLinks: {
    listStyle: "none",
    padding: "0",
    marginTop: "20px",
    textAlign: "left",
    position: "absolute",
    top: "50px",
    left: "0",
    backgroundColor: "#007bff",
    width: "100%",
  },
  link: {
    display: "block",
    padding: "10px",
    color: "white",
    textDecoration: "none",
  },
};
