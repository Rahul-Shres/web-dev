import React from "react";
import { Button } from "@nextui-org/react";

export default function CustomButton({ buttonText, buttonColor }) {
  return (
    <Button color={buttonColor}>
      {buttonText}
    </Button>
  );
}
