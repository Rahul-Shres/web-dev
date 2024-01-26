
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";


export default function App() {
  return (
    <>
    <NextUIProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      </Routes></BrowserRouter>
    </NextUIProvider>
    </>
  )
}