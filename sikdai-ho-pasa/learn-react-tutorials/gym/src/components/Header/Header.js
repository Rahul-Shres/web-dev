import React, { useRef, useEffect } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

const Header = () => {
  const nav_links = [
    {
      path: "#home",
      display: "Home",
    },
    {
      path: "#classes",
      display: "Watch",
    },
    {
      path: "#start",
      display: "Start",
    },
    {
      path: "#pricing",
      display: "Pricing",
    },
  ];

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const location = document.querySelector(path).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
      behavior: "smooth",
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>FitBody</h2>
          </div>
          {/* Navigation */}
          <div className="navigation">
            <ul className="menu">
              {nav_links.map((link, index) => (
                <li className="nav_item" key={index}>
                  <a
                    onClick={(e) => handleClick(e, link.path)}
                    href={link.path}>
                    {link.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
          <div className="nav-right">
            <button>Register</button>
            <button>Sign In</button>
            <span className="mobile-menu">
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
