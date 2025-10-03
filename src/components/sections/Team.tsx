"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Card from "../ui/Card";
import "./Sections.css";

const Team = () => {
  return (
    <SectionWrapper
      id="team"
      bgColor="bg-gray-800"
      title="Meet Our Team"
      subtitle="The professionals behind Executive Security Services."
    >
      <div className="team-grid">
        <Card
          image="/images/member1.jpg"
          title="John Doe"
          role="Lead Security Specialist"
          description="10+ years of experience in corporate and event security."
          bio="John has been with Executive Security Services for over a decade, leading teams in high-profile events and corporate environments. His expertise in risk assessment and crisis management ensures our clients receive top-tier protection."
          variant="team"
        />
        <Card
          image="/images/member2.jpg"
          title="Jane Smith"
          role="Operations Manager"
          description="Expert in logistics and client relations."
          bio="Jane oversees all operational aspects of our security services, ensuring seamless coordination between our teams and clients. Her background in logistics and client relations makes her an invaluable asset to our organization."
          variant="team"
        />
        <Card
          image="/images/member3.jpg"
          title="Mike Johnson"
          role="Surveillance Expert"
          description="Skilled in CCTV monitoring and risk detection."
          bio="Mike brings a wealth of knowledge in surveillance technology and techniques. His keen eye for detail and ability to detect potential threats before they escalate is crucial to maintaining the safety and security of our clients."
          variant="team"
        />
        <Card
          image="/images/member4.jpg"
          role="Emergency Response Coordinator"
          title="Emily Davis"
          description="Dedicated to rapid action in crisis situations."
          bio="Emily is trained in emergency response and crisis management, ensuring that our team is prepared to handle any situation swiftly and effectively. Her calm demeanor and quick thinking are essential during high-pressure scenarios."
          variant="team"
        />
      </div>
    </SectionWrapper>
  );
};

export default Team;
