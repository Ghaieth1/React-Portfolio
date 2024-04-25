import React from 'react';

const Button = ({ title, type, ariaLabel, onClick, children }) => {
  return (
    <button type={type} aria-label={ariaLabel} onClick={onClick}>
      {children || title}
    </button>
  );
};

export default Button;
