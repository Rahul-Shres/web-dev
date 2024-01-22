import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import AppBar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
     <NextUIProvider>
    <AppBar />
    <h1 className="text-3xl font-bold underline">
      
      Hello world!
    </h1>
    </NextUIProvider>
    </>
  )
}