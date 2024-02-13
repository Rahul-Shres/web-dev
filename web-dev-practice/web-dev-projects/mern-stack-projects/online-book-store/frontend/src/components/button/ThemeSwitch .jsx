import React from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";
import { SunIcon } from "./SunIcon ";
import { MoonIcon } from "./MoonIcon";



export const ThemeSwitch = ({ checked, onChange }) => {
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch({
    checked,
    onChange,
  });

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {checked ? <SunIcon /> : <MoonIcon />}
          </div>
      </Component>
      {/* <p className="text-default-500 select-none">Lights: Lights: {checked ? "on" : "off"}</p> */}
    </div>
  )
}


export default function App() {
  return <ThemeSwitch/>
}
