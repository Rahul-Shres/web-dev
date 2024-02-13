"use client";

import React from 'react';

interface TitleProps {
  classes?: string;
  text?: string;
}

const Title: React.FC<TitleProps> = ({ classes, text }) => {
  return (
    <h1 className={!classes ? 'text-center' : classes}>
      {!text ? 'Title' : text}
    </h1>
  );
};

export default Title;
