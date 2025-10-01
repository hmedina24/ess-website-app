import Link from "next/link";
import "./Layouts.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h4 className="footer-title">Executive Security Services</h4>
          <p className="footer-text">
            Providing trusted security solutions with professionalism and care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#team">Our Team</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><Link href="#guarding">Security Guarding</Link></li>
            <li><Link href="#cctv">CCTV Monitoring</Link></li>
            <li><Link href="#risk">Risk Assessment</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><Link href="#terms">Terms & Conditions</Link></li>
            <li><Link href="#privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2025 © {new Date().getFullYear()} All Rights Reserved. Executive Security Services.</p>
      </div>
    </footer>
  );
};

export default Footer;
