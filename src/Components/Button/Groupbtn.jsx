import React from 'react';
import './Button.css';

const Groupbtn = ({ label, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button
      className={`group-btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Groupbtn;
