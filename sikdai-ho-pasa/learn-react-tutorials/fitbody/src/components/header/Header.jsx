import React, { useRef, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/img/dumble.png";
import { motion } from "framer-motion";

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

  const navAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.header
      className="header"
      ref={headerRef}
      initial="hidden"
      animate="visible"
      variants={navAnimation}
    >
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>FitBody</h2>
          </div>
          {/* Navigation */}
          <motion.div className="navigation" variants={navAnimation}>
            <ul className="menu">
              {nav_links.map((link, index) => (
                <motion.li
                  className="nav_item"
                  key={index}
                  variants={navAnimation}
                >
                  <a
                    onClick={(e) => handleClick(e, link.path)}
                    href={link.path}
                  >
                    {link.display}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* nav right */}
          <motion.div className="nav-right" variants={navAnimation}>
            <motion.button variants={navAnimation}>Register</motion.button>
            <motion.button variants={navAnimation}>Sign In</motion.button>
            <motion.span className="mobile-menu" variants={navAnimation}>
              <i className="fa-solid fa-bars"></i>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
