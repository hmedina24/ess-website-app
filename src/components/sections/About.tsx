"use client";

import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import "./Sections.css";
import Link from "next/link";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      bgColor="bg-gray-800"
      title="About Us"
      subtitle="Trusted security solutions for peace of mind."
    >
      <div className="about-container">
        
        {/* Left: Image */}
        <motion.img
          src="/images/safeGuard.jpeg" // Replace with real or stock photo
          alt="Executive Security Services Team"
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

        {/* Right: Short Text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="about-heading">Who We Are</h3>
          <p>
            Executive Security Services (ESS) provides trusted, professional security 
            solutions for businesses, events, and individuals. Our mission is simple: 
            to protect what matters most.
          </p>
            <button
              className="btn-primary"
            >
             <Link href="/about">Learn More About Us  </Link> 
            </button>
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Our Services
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
