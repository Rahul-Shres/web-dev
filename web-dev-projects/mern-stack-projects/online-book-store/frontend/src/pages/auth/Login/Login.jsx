import React from "react";
import { Button } from "@nextui-org/react";
import googleIcon from '../../../assets/google.png';


const loginwithgoogle = ()=>{
    window.open("http://localhost:8000/auth/google/","_self")
}


export default function Login() {
  return (
    <div className="flex gap-4 items-center justify-center h-screen	">
      <Button onClick={loginwithgoogle} color="default" variant="shadow" startContent={<img src={googleIcon} alt="Google Icon" width="20" height="20" />}>
      Sign in with Google
      </Button>
    </div>
  );
}
