"use client";

import React, { useState } from 'react';

interface FormProps {
  setDate: React.Dispatch<React.SetStateAction<string | null>>;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
}

const Form: React.FC<FormProps> = ({ setDate, setName}) => {
  const [nameValue, setNameValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>('');

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(e.target.value);
    setName(e.target.value);
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDateValue(e.target.value);
    setDate(e.target.value);
  }

  return (
    <footer>
      <input
        type="name"
        value={nameValue}
        onChange={handleNameChange}
        style={{}}
      />
      <input
        type="date"
        value={dateValue}
        onChange={handleDateChange}
        style={{}}
      />
    </footer>
  );
};

export default Form;

