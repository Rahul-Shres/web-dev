// CustomCheckbox.js
import React, { useState, useEffect } from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";

export const CustomCheckbox = ({ user, statusColor, value, selectedCounselor, onChange }) => {
    const isChecked = selectedCounselor === value;

    const handleCheckboxChange = () => {
      if (!isChecked) {
        onChange(value);
      }
    };
  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      checked={isChecked}
      onChange={handleCheckboxChange}
      value={value}
      type="radio"
      name="counselor"
      disabled={selectedCounselor !== null && selectedCounselor !== value}
    >
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          description={
            <Link isExternal href={user.url} size="sm">
              @{user.username}
            </Link>
          }
          name={user.name}
        />
        <div className="flex flex-col items-end gap-1">
          <span className="text-tiny text-default-500">{user.role}</span>
          <Chip color={statusColor} size="sm" variant="flat">
            {user.status}
          </Chip>
        </div>
      </div>
    </Checkbox>
  );
};
