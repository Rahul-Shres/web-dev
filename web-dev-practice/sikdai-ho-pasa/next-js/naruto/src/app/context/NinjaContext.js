// context/NinjaContext.js
'use client';
import React, { createContext, useState } from 'react';

export const NinjaContext = createContext();

export const NinjaProvider = ({ children }) => {
  const [ninjas, setNinjas] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddNinja = (newNinja) => {
    setNinjas((prevNinjas) => [...prevNinjas, newNinja]);
  };

  const handleRemoveNinja = (id) => {
    setNinjas((prevNinjas) => prevNinjas.filter((ninja) => ninja.id !== id));
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <NinjaContext.Provider
      value={{
        ninjas,
        count,
        handleAddNinja,
        handleRemoveNinja,
        increment,
        decrement,
      }}
    >
      {children}
    </NinjaContext.Provider>
  );
};
