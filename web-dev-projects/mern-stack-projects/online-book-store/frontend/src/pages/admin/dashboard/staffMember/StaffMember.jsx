import React from "react";
import { User } from "@nextui-org/react";

export default function StaffMember() {
  const users = [
    {
      name: "Jane Doe",
      description: "Product Designer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    {
      name: "John Smith",
      description: "Software Engineer",
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702e"
    },
    // Add more users as needed
  ];


  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user, index) => (
        <div key={index} className="flex flex-col items-center text-center m-4">
          <User
            className="w-52"
            name={user.name}
            description={user.description}
            avatarProps={{
              src: user.avatarSrc
            }}
          />
        </div>
      ))}
    </div>
  );
}
