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
      <DropdownMenu aria-label="Courses">
  <DropdownItem>
    <Link href="/guitarclass" className="nav-link">
      Guitar Class
    </Link>
  </DropdownItem>
  <DropdownItem>
    <Link href="/drumclass" className="nav-link">
      Drum Class
    </Link>
  </DropdownItem>
  <DropdownItem>
    <Link href="/keyboardclass" className="nav-link">
      Keyboard Class
    </Link>
  </DropdownItem>
  <DropdownItem>
    <Link href="/musicproductionclass" className="nav-link">
      Music Production Class
    </Link>
  </DropdownItem>
  <DropdownItem>
    <Link href="/ukuleleclass" className="nav-link">
      Ukulele Class
    </Link>
  </DropdownItem>
  <DropdownItem>
    <Link href="/voilinclass" className="nav-link">
      Violin Class
    </Link>
  </DropdownItem>
  <DropdownItem>
    <Link href="/westernvoalclass" className="nav-link">
      Western Vocal Class
    </Link>
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
          
        </NavbarContent>
      </Navbar>

      
    </>
  );
};

export default Appbar;
