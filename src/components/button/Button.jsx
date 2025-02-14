import React from "react";
import "./Button.css";

export const Button = ({ title, onClick, className }) => { // Додаємо onClick та className
  return (
    <button className={`button ${className}`} onClick={onClick}> {/* Додаємо onClick та className */}
      {title}
    </button>
  );
};