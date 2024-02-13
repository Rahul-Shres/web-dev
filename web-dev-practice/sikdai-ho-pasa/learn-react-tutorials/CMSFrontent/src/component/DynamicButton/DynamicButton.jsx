import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DynamicButton = ({ title, subtitle, initialColor }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonColor, setButtonColor] = useState(initialColor || 'primary');

  const handleClick = () => {
    setIsClicked(!isClicked);
    setButtonColor(isClicked ? 'primary' : 'secondary');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        color={buttonColor}
        onClick={handleClick}
      >
        {isClicked ? 'Clicked' : 'Click Me'}
      </Button>
    </div>
  );
};

export default DynamicButton;
