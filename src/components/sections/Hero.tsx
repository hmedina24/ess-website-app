"use client";

import SectionWrapper from "../ui/SectionWrapper";
import "./Sections.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <SectionWrapper id="hero" bgColor="bg-transparent">
      <div className="hero">
        {/* Background video */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/security-footage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Animated Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Executive Security Services
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Professional security solutions tailored for your business and peace of mind.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </motion.div>

          <motion.p
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            Trusted by businesses across New England since 2005
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
