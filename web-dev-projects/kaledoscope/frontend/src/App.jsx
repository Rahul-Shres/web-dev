
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";


export default function App() {
  return (
    <>
    <NextUIProvider>
    <BrowserRouter>
    <main className={"dark text-foreground bg-background" }>
    <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      </main>
      </BrowserRouter>
    </NextUIProvider>
    </>
  )
}