// components/NinjaForm.js
'use client';
import React, { useContext, useState } from 'react';
import { NinjaContext } from '../context/NinjaContext';

const NinjaForm = () => {
  const [name, setName] = useState('');
  const { handleAddNinja } = useContext(NinjaContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNinja = { id: Date.now(), name };
    handleAddNinja(newNinja);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter ninja name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Ninja</button>
    </form>
  );
};

export default NinjaForm;
