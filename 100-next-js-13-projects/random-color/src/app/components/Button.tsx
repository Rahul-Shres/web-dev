"use client";
import React from 'react';

const Button: React.FC = () => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(event.target);
    getRandomColor();
    let body = document.querySelector('body');
    if (body) {
      body.style.background = getRandomColor();
    }
    if (event.currentTarget) {
      event.currentTarget.style.backgroundColor = getRandomColor();
    }
  }

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <button onClick={(event) => handleClick(event)}>
      Randomize Color
    </button>
  );
};

export default Button;
