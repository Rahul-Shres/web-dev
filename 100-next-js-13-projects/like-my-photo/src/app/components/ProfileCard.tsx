"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import img from '../../../public/img.png';
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';

const ProfileCard: React.FC = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  const name = 'User Name'; // Replace with the actual user name

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Like my photo app</h1>
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <div className="flex items-center mb-2">
          <AiFillSmile className="mr-2" />
          <span>{name ? name : 'Name'}</span>
        </div>
        <Image src={img} alt="profile Image" onDoubleClick={toggleLike} />
        <div className="flex items-center justify-between mt-2">
          <AiOutlineComment className="mr-2" />
          <div>{like ? (
            <AiFillHeart onClick={toggleLike} className="text-red-500 cursor-pointer" />
          ) : (
            <AiOutlineHeart onClick={toggleLike} className="text-gray-500 cursor-pointer" />
          )}
          <span className="ml-1">{count}</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
