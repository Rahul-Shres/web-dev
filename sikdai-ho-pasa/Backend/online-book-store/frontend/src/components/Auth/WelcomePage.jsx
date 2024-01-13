import React, { useEffect, useState } from 'react';

const WelcomePage = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve token from query parameters
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get('token');
    console.log(tokenParam);

    // Alternatively, if you are sending the token in the response body, use fetch or another method to retrieve it.

    // Set state with the retrieved token
    setToken(tokenParam || '');
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
      <p>Your registration was successful. Token: {token}</p>
    </div>
  );
};

export default WelcomePage;
