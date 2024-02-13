import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { AcmeLogo } from "./AcmeLogo.jsx";
import "./Appbar.css"; // Import the CSS file
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import logo from '../../assets/logo.png';
import { CameraIcon } from "./CameraIcon.jsx";

const Appbar = (props) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <>
      <Navbar isBordered isBlurred={false} shouldHideOnScroll>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <img src={logo} alt="Company Logo" className="w-12 h-12" />
          <div className="block pl-3.5	">
          <p className="font-bold text-sm">Kaleidoscope</p>
          <p className="font-bold text-xs">Music Academy </p>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>


          <NavbarItem isActive>
            {/* <Link href="#" aria-current="page">
              Customers
            </Link> */}
            <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light"
          endContent={<CameraIcon/>}
        >
          Courses
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
          </NavbarItem>


          <NavbarItem>
            <Link color="foreground" href="#">
              Gallery
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link}color="primary" variant="bordered" href="#">
              Book A Demo
            </Button>
          </NavbarItem>
          {/* <NavbarItem>
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
            {isSelected ? <SunIcon /> : <MoonIcon />}
          </div>
        </Component>
      </div>
          </NavbarItem> */}
        </NavbarContent>
      </Navbar>

      
    </>
  );
};

export default Appbar;
