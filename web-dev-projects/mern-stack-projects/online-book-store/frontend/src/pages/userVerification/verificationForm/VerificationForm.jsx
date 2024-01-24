import React from 'react';
import Counselor from '../Counselor/Counselor';
import VerifyOtp from '../verifyOtp/VerifyOtp';
import UserNumber from '../userPhoneNo/UserNumber';
import CustomButton from '../../../components/button/Button';
import {Image} from "@nextui-org/react";

const VerificationForm = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div className='mt-2'>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-0">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-top">
          {/* Left Column */}
          <div className='mt-2'>
            <div className='mx-auto flex flex-col items-center justify-center'>
              <Counselor />
            </div>
            {/* Uncomment the following if VerifyOtp component is needed */}
            {/* <div className='mx-auto flex flex-col items-center justify-center'>
              <VerifyOtp />
            </div> */}
          </div>
          
          {/* Right Column */}
          <div className="relative ms-4 flex flex-col items-center justify-top mt-8">
          
            <UserNumber />
            <CustomButton
              buttonText="Next"
              buttonColor="primary" // Replace with your desired color
              // to="/your-destination" // Replace with your desired destination
              onClick={handleButtonClick}
              
            />
            <div className='mt-8'>

<Image
      width={300}
      alt="NextUI hero Image"
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
    </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </div>
  );
};

export default VerificationForm;
