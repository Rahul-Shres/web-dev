import React from 'react';

const WelcomePage = ({ userName }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userName}!</h1>
      <p>Your registration was successful.</p>
    </div>
  );
};

export default WelcomePage;
