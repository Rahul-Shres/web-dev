import React from 'react';
import HeroSection from './Hero/HeroSection';
import Display from './Hero/Display';
import VerificationForm from './userVerification/verificationForm/VerificationForm';
import VerifyOtp from './userVerification/verifyOtp/VerifyOtp';

const Home = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <VerificationForm />
        <VerifyOtp />
        <HeroSection />
        <Display />
      </div>
    </>
  );
};

export default Home;
