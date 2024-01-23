import React from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function CustomButton({ buttonText, buttonColor, to, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    } else {
      // Default behavior if no "to" or "onClick" prop is provided
      navigate('/'); // Change this to your default behavior
    }
  };

  return (
    <Button color={buttonColor} onClick={handleClick}>
      {buttonText}
    </Button>
  );
}
