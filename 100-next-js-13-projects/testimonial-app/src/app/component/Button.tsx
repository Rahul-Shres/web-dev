import React from 'react';

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {icon} {text}
    </button>
  );
};

export default Button;
