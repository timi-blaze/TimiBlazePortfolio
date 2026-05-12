import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (   
    <footer className="footer">
      <h3 className="footer-name">Timi Blaze</h3>

      <p className="footer-role">
        Frontend Engineer  | Software Enthusiast
      </p>

      <p className="footer-copy">
        © {new Date().getFullYear()} Timi Blaze. All rights reserved.
      </p>
    </footer>
  
  );
}

export default Footer