import React from "react";
export const CameraIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="dropdown" fill="#FFFFFF">
  <path d="M14 20 24 30 34 20z"></path>
  <path fill="none" d="M0 0h48v48H0z"></path>
</svg>
  );
};
