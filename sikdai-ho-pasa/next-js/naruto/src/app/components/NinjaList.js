// components/NinjaList.js
'use client';


import React, { useContext, useEffect, useState } from 'react';
import { NinjaContext } from '../context/NinjaContext';

const NinjaList = () => {
  const { ninjas, handleRemoveNinja } = useContext(NinjaContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(ninjas.length); // Update the count whenever the ninjas array changes
  }, [ninjas]);

  return (
    <div>
      <ul>
        {ninjas.map((ninja) => (
          <li key={ninja.id}>
            {ninja.name}
            <button onClick={() => handleRemoveNinja(ninja.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Count: {count}</p>
    </div>
  );
};

export default NinjaList;
