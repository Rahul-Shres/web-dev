// Counselor.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { setCounselorData, setUserNumberData, userVerification } from "../../../../store/userVerification";


export default function Counselor() {
  const dispatch = useDispatch();
  const counselorData = useSelector((state) => state.userVerification.counselorData);
  const userNumberData = useSelector((state) => state.userVerification.userNumberdData);

  const [selectedCounselor, setSelectedCounselor] = useState(null);

  const handleCounselorChange = (value) => {
    setSelectedCounselor(value);

    // Assuming you want to update the counselor data when the selection changes
    dispatch(
      setCounselorData({
        email: `${value.split(" ")[0].toLowerCase()}@example.com`,
        status: "CUSTOM_STATUS", // You can replace this with an appropriate status
      })
    );
  };

  const handleContactNumberChange = (event) => {
    const contactNumber = event.target.value;

    // Assuming you want to update the user number data when the input changes
    dispatch(
      setUserNumberData({
        password: contactNumber,
        status: "CUSTOM_STATUS", // You can replace this with an appropriate status
      })
    );
  };
  const handleVerification = () => {
    console.log("clicked")
    // Assuming you want to trigger the user verification process when a button is clicked
    const data = {
      counselor: selectedCounselor,
      contactNumber: userNumberData.password, // Assuming contactNumber is stored in userNumberData
    };
    dispatch(userVerification(data));
  };

  return (
    <div className="flex flex-col gap-1 w-full items-center">
      <div className="flex flex-col gap-1 w-full items-center">
        <RadioGroup
          label="Please Select the Counselor"
          onValueChange={handleCounselorChange}
          value={selectedCounselor}
        >
          <Radio value="Ujjwal Sir - USA">Ujjwal Sir - USA</Radio>
          <Radio value="Prakash Sir - USA">Prakash Sir - USA</Radio>
          <Radio value="Rejina Mam - USA">Rejina Mam - USA</Radio>
          <Radio value="Pujan Sir - USA">Pujan Sir - USA</Radio>
          <Radio value="Kiran Sir - Canada">Kiran Sir - Canada</Radio>
        </RadioGroup>
      </div>
      <p className="mt-4 ml-1 text-default-500">
        Selected Counselor: {selectedCounselor || "None"}
      </p>

      <div className="p-4 space-y-4">
        <Chip color="primary">Please provide Contact Number</Chip>
        <Input
          color="success"
          type="contact-number"
          label="Contact Number"
          defaultValue=""
          className="w-52"
          onChange={handleContactNumberChange}
        />
        <button onClick={handleVerification}>Verify</button>
      </div>
    </div>
  );
}
