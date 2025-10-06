"use client";
import { Turnstile } from "@marsidev/react-turnstile";
import SectionWrapper from "../ui/SectionWrapper";
import "../sections/Sections.css";
import { useState } from "react";

const Contact = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      alert("Please verify you are human.");
      return;
    }
    console.log("Form submitted with verification token:", token);
    // TODO: send form data + token to backend for verification
  };


  return (
    <SectionWrapper id="contact" bgColor="bg-gray-100">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Reach out to Executive Security Services (ESS) for reliable security solutions tailored to your needs.
          </p>

          <ul className="contact-details">
            <li><strong>Email:</strong> info@ess.com</li>
            <li><strong>Phone:</strong> (555) 123-4567</li>
            <li><strong>Address:</strong> 123 Main Street, City, State</li>
          </ul>

          <button className="contact-btn">
            Request a Quote
          </button>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required />
            </div>

              <script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                async
                defer
              ></script>
              <div className="turnstile-wrapper">
                <Turnstile
                  siteKey="0x4AAAAAAB5JA3ncK0oj2lv_"  
                  onSuccess={(token) => setToken(token)}
                  options={{ theme: "dark", size: "normal" }}
                />
              </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
