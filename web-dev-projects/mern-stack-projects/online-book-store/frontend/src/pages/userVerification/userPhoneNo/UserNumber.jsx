import React from "react";
import { Input } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
const UserNumber = () => {
  return (
    <>
    <div className="p-4 space-y-4">
    <Chip color="primary">Please provide Contact Number</Chip>
      <Input
        color="success"
        type="contact-number"
        label="Contact Number"
        defaultValue=""
        className="w-52"
      />
      </div>

</>
  )
}

export default UserNumber