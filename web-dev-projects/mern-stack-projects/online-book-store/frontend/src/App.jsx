import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import AppBar from "./components/Navbar/Navbar";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <NextUIProvider>
      <main className={darkMode ? "dark text-foreground bg-background" : ""}>
  <AppBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
</main>
      </NextUIProvider>
    </>
  );
}
