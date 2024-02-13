import React from "react";
import { Input } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import CustomButton from '../../../../components/button/Button';
import {Image} from "@nextui-org/react";

export default function VerifyOtp() {
  return (
    <div className="flex flex-col	items-center  h-screen p-4 space-y-4">
       <div className='mt-8'>

<Image
      width={300}
      alt="NextUI hero Image"
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
    </div>
      <Chip color="primary">Please Verify the OTP</Chip>
      <Input
        color="success"
        type="otp"
        label="Verify OTP"
        defaultValue=""
        className="w-52"
      />

<CustomButton
              buttonText="Verify OTP"
              buttonColor="success" // Replace with your desired color
              // to="/your-destination" // Replace with your desired destination
              // onClick={handleButtonClick}
              
            />
      
    </div>
  );
}
