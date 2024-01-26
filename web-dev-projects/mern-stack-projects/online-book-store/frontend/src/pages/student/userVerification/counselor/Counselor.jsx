// Counselor.js
import React, { useState } from "react";
import { CustomCheckbox } from "./CustomCheckbox ";
import {Chip} from "@nextui-org/react";

export default function Counselor() {
  const [selectedCounselor, setSelectedCounselor] = useState(null);

  const handleCounselorSelection = (value) => {
    setSelectedCounselor((prevSelected) => (prevSelected === value ? null : value));
  };


  return (
    <div className="flex flex-col gap-1 w-full items-center">
      <div className="flex flex-col gap-1 w-full items-center">
      <Chip className="mb-8" variant="shadow">Please Select the Counselor</Chip>

        <CustomCheckbox
          type="radio"
          name="counselor"
          selectedCounselor={selectedCounselor}
          onChange={handleCounselorSelection}
          value="junior"
          user={{
            name: "Ujjwol Dhakal",
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "Ujjwol Dhakal",
            status: "USA Counselor",
          }}
          statusColor="secondary"
        />
        <CustomCheckbox
          type="radio"
          name="counselor"
          selectedCounselor={selectedCounselor}
          onChange={handleCounselorSelection}
          value="junior"
          user={{
            name: "Ujjwol Dhakal",
            avatar: "https://www.facebook.com/photo/?fbid=4891563730945906&set=a.101876253248035",
            username: "Ujjwol Dhakal",
            status: "USA Counselor",
          }}
          statusColor="secondary"
        />
        <CustomCheckbox
          type="radio"
          name="counselor"
          selectedCounselor={selectedCounselor}
          onChange={handleCounselorSelection}
          value="junior"
          user={{
            name: "Ujjwol Dhakal",
            avatar: "https://www.facebook.com/photo/?fbid=4891563730945906&set=a.101876253248035",
            username: "Ujjwol Dhakal",
            status: "USA Counselor",
          }}
          statusColor="secondary"
        />
        <CustomCheckbox
          type="radio"
          name="counselor"
          selectedCounselor={selectedCounselor}
          onChange={handleCounselorSelection}
          value="junior"
          user={{
            name: "Ujjwol Dhakal",
            avatar: "https://www.facebook.com/photo/?fbid=4891563730945906&set=a.101876253248035",
            username: "Ujjwol Dhakal",
            status: "USA Counselor",
          }}
          statusColor="secondary"
        />
        <CustomCheckbox
          type="radio"
          name="counselor"
          selectedCounselor={selectedCounselor}
          onChange={handleCounselorSelection}
          value="johndoe"
          user={{
            name: "Ujjwol Dhakal",
            avatar: "https://www.facebook.com/photo/?fbid=4891563730945906&set=a.101876253248035",
            username: "Ujjwol Dhakal",
            status: "USA Counselor",
          }}
          statusColor="warning"
        />
        {/* Add similar CustomCheckbox components for other counselors */}
      </div>
      <p className="mt-4 ml-1 text-default-500">
        Selected Counselor: {selectedCounselor}
      </p>
    </div>
  );
}
