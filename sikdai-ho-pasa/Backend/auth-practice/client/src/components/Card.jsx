import * as React from "react";
import { useSelector } from 'react-redux';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";

const CardUI = () => {
    const { currentUser } = useSelector((state) => state.user);
  return(
    <div className="flex items-center justify-center h-screen">
    <Card className="py-4 w-1/4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="font-bold text-large self-center cursor-pointer">Profile</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex items-center justify-center">

        
        <Image
          alt='profile'
          className="object-cover rounded-xl mb-3 self-center cursor-pointer"
          src={currentUser.profilePicture}
          width={150}
        />
        </div>

        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='Username'
          className='bg-slate-100 rounded-lg p-3 mb-3'
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3 mb-3'
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3 mb-3'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </CardBody>
      <div className="p-3 flex justify-between mt-5">
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
      <Button color="danger" variant="bordered">
        Delete user
      </Button>
      </div>
    </Card>
    </div>
  );
}

export default CardUI
