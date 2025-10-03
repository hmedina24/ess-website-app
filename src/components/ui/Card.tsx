import React from "react";
import "./Ui.css";
import { useState } from "react";

interface CardProps {
  image?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  variant?: "default" | "team";
  role?: string;
  bio?: string;
}

const Card: React.FC<CardProps> = ({ image, icon, title, description, bio, role, variant = "default",}) => {

   const [showBio, setShowBio] = useState(false);

  if (variant === "team") {
    return (
      <div
        className={`card team-card ${showBio ? "expanded" : ""}`}
        onMouseLeave={() => setShowBio(false)}
      >
        {image && <img src={image} alt={title} className="card-image" />}
        <h3 className="card-title">{title}</h3>
        {role && <p className="card-role">{role}</p>}

        {!showBio ? (
          <button
            className="read-bio-btn"
            onClick={() => setShowBio(true)}
          >
            Read Bio
          </button>
        ) : (
          <>
            <p className="card-bio">{bio}</p>
          </>
        )}
      </div>
    );
    console.log(showBio);
  }

  // Default card (services, etc.)
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
