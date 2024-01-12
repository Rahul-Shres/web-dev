// GoogleSignInButton.jsx
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignInButton = ({ onGoogleSignInSuccess, onGoogleSignInFailure }) => {
  const responseGoogle = (response) => {
    if (response && response.profileObj) {
      onGoogleSignInSuccess(response.profileObj);
    } else {
      onGoogleSignInFailure();
    }
  };

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignInButton;
