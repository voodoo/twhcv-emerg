import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Together With Hill Country Veterans</h3>
            <p>Reducing Veteran Suicide Through Awareness, Community & Action</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/988">Get Help - 988</a></li>
              <li><a href="/qpr">QPR Training</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/donate">Donate</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Emergency</h4>
            <p className="emergency-text">Veterans Crisis Line: <strong>988 then press 1</strong></p>
            <p className="emergency-text">Text: <strong>838255</strong></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Together With Hill Country Veterans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;