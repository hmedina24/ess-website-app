"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Card from "../ui/Card";
import { Shield, Users, Camera, AlertTriangle } from "lucide-react"; // or Heroicons
import "./Sections.css";

const Services = () => {
  return (
    <SectionWrapper
      id="services"
      bgColor="bg-gray-900"
      title="Our Services"
      subtitle="Comprehensive security solutions tailored for your needs."
    >
      <div className="services-grid">
        <Card
          icon={<Shield />}
          title="Corporate Security"
          description="Protecting offices, employees, and assets with professional security teams."
          variant="default"
        />
        <Card
          icon={<Users />}
          title="Event Security"
          description="Ensuring safe and secure environments for private and public events."
          variant="default"
        />
        <Card
          icon={<Camera />}
          title="CCTV Monitoring"
          description="24/7 surveillance and monitoring with the latest security technology."
          variant="default"
        />
        <Card
          icon={<AlertTriangle />}
          title="Emergency Response"
          description="Quick and effective action during critical situations."
          variant="default"
        />
      </div>
    </SectionWrapper>
  );
};

export default Services;
