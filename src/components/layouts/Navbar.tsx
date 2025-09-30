"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"; // or Heroicons
import "./Layouts.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          ESS
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li className="relative group">
            <button
              onClick={() => toggleDropdown("about")}
              className="navbar-link-btn"
            >
              About
            </button>
            {openDropdown === "about" && (
              <ul className="dropdown">
                <li><Link href="#whyus" className="dropdown-item">Why Us</Link></li>
                <li><Link href="#terms" className="dropdown-item">Terms & Conditions</Link></li>
                <li><Link href="#privacy" className="dropdown-item">Privacy Policy</Link></li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              onClick={() => toggleDropdown("services")}
              className="navbar-link-btn"
            >
              Services
            </button>
            {openDropdown === "services" && (
              <ul className="dropdown">
                <li><Link href="#guarding" className="dropdown-item">Security Guarding</Link></li>
                <li><Link href="#cctv" className="dropdown-item">CCTV Monitoring</Link></li>
                <li><Link href="#risk" className="dropdown-item">Risk Assessment</Link></li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              onClick={() => toggleDropdown("contact")}
              className="navbar-link-btn"
            >
              Contact
            </button>
            {openDropdown === "contact" && (
              <ul className="dropdown">
                <li><Link href="#newclient" className="dropdown-item">New Client</Link></li>
                <li><Link href="#contactus" className="dropdown-item">Contact Us</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {/* About */}
        <div>
          <button
            onClick={() => toggleDropdown("about")}
            className="mobile-dropdown-btn"
          >
            About
          </button>
          {openDropdown === "about" && (
            <ul className="mobile-dropdown">
              <li><Link href="#whyus" className="mobile-dropdown-item">Why Us</Link></li>
              <li><Link href="#terms" className="mobile-dropdown-item">Terms & Conditions</Link></li>
              <li><Link href="#privacy" className="mobile-dropdown-item">Privacy Policy</Link></li>
            </ul>
          )}
        </div>

        {/* Services */}
        <div>
          <button
            onClick={() => toggleDropdown("services")}
            className="mobile-dropdown-btn"
          >
            Services
          </button>
          {openDropdown === "services" && (
            <ul className="mobile-dropdown">
              <li><Link href="#guarding" className="mobile-dropdown-item">Security Guarding</Link></li>
              <li><Link href="#cctv" className="mobile-dropdown-item">CCTV Monitoring</Link></li>
              <li><Link href="#risk" className="mobile-dropdown-item">Risk Assessment</Link></li>
            </ul>
          )}
        </div>

        {/* Contact */}
        <div>
          <button
            onClick={() => toggleDropdown("contact")}
            className="mobile-dropdown-btn"
          >
            Contact
          </button>
          {openDropdown === "contact" && (
            <ul className="mobile-dropdown">
              <li><Link href="#newclient" className="mobile-dropdown-item">New Client</Link></li>
              <li><Link href="#contactus" className="mobile-dropdown-item">Contact Us</Link></li>
            </ul>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
