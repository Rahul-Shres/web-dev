import React from 'react';
import Title from './components/Title';
import Button from './components/Button';

const Home: React.FC = () => {
  return (
    <main>
      <Title text="Randomize Color" classes="mb-4" />
      <Button />
      <Button />
      <Button />
    </main>
  );
};

export default Home;
