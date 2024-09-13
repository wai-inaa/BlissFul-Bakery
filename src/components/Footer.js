import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <p>&copy; 2024 Blissful Bite Bakery. All rights reserved.| Powered By WAINA GILLANI</p>
        <ul className="footer-links">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
        </ul>
        <div className="scroll-to-top">
          <a href="#top">Scroll to top</a>
        </div>
    </footer>
  );
}

export default Footer;
