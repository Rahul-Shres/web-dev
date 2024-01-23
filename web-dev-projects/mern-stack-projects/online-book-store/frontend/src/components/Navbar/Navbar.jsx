import React, { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom';
import {User} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, Button, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import CustomButton from "../button/Button";
import { APIAuthenticated } from "../../http";
import { ThemeSwitch } from "../button/ThemeSwitch ";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import sacIcon from "../../assets/logo.png";




export default function AppBar({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [themeSwitchChecked, setThemeSwitchChecked] = useState(darkMode);
  const [userdata, setUserdata] = useState(null);
  const [userImage, setUserImage] = useState(null); // Store image URL in state

  const getUser = async () => {
    try {
      const response = await APIAuthenticated.get('profile');
      console.log(response, 'res');
      if (response.data.data) {

        setUserdata(response.data.data);
        setUserImage(response.data.data.image); // Set image URL in state

      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    setUserdata(null);
    navigate('/');
  };

  const handleLoginSuccess = () => {
    // Perform any actions needed after successful login
    // For now, let's just log the userdata
    console.log("Userdata after successful login:", userdata);
  };

  console.log("User Image URL:", userdata?.image);
  const handleThemeSwitchChange = () => {
    setThemeSwitchChecked(!themeSwitchChecked);
    toggleDarkMode(); // Call the toggleDarkMode function to synchronize the theme
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };



  return (
    <Navbar  >
      <NavbarBrand >
      <img src={sacIcon} alt="Sac Icon" width="280"  />
        {/* <p className="text-lg	 font-bold text-inherit">ACME</p> */}
      </NavbarBrand>

      {/* middle */}

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-xl"
                endContent={icons.chevron}
                radius="sm"
                color="primary"
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page" className="text-xl">
            Universities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#"  className="text-xl">
            Courses
          </Link>
        </NavbarItem>
      </NavbarContent>

      
             {/* play stops HeroSection */}

      {userdata ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
            <User   
      name={userdata.displayName}
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          {userdata.email}
        </Link>
      )}
      avatarProps={{
        src: userImage 
      }}
    />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{userdata.displayName}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogoutClick}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <CustomButton to="/login"  onClick={handleLoginSuccess} buttonText="Log In" buttonColor="primary" />

      )}





      {/* play stops HeroSection */}
        <ThemeSwitch checked={themeSwitchChecked} onChange={handleThemeSwitchChange} />
    </Navbar>
  );
}
