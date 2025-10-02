import React from "react";
import "./Ui.css";

interface CardProps {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, icon, title, description }) => {
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
