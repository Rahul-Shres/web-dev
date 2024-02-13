import React, { useRef, useEffect } from "react"; // Importing special tools for making web things
import "./Header.css"; // Bringing in styles for the header
import logo from "../../assets/img/dumble.png"; // Picture of a cute logo
import { motion } from "framer-motion"; // Magic for making things move

const Header = () => { // This is where the cool stuff begins
  // These are the special places you can click to go to different parts of the website
  const nav_links = [
    {
      path: "#home",
      display: "Home", // This is what you see written on the button
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

  const headerRef = useRef(null); // A special trick to remember the top part of the page

  useEffect(() => {
    const handleScroll = () => { // When you move up or down on the page
      if (
        document.body.scrollTop > 80 || // If you've moved down more than 80 pixels
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header"); // This makes the top part stay visible even if you scroll
      } else {
        headerRef.current.classList.remove("sticky-header"); // Otherwise, it goes back to normal
      }
    };

    window.addEventListener("scroll", handleScroll); // Listening for when you scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Stop listening when you're done scrolling
    };
  }, []);

  // When you click a button, this makes you smoothly go to that part of the page
  const handleClick = (e, path) => {
    e.preventDefault();
    const location = document.querySelector(path).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
      behavior: "smooth", // Smoothly move to that place like a slide
    });
  };

  // This is how the buttons and logo look when they appear on the page
  const navAnimation = {
    hidden: { opacity: 0, y: -50 }, // They start invisible or a little above where they end up
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Then they become visible and move into place
  };

  return (
    <motion.header
      className="header" // This is the cool top part of the webpage
      ref={headerRef} // Remembering the top part for the magic
      initial="hidden" // It starts off invisible
      animate="visible" // Then becomes visible with some magic
      variants={navAnimation} // This tells it how to move
    >
      {/* Everything inside here is what you see in the special top part */}
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo"> {/* This is the place for the cute logo */}
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>FitBody</h2>
          </div>
          {/* These are the special buttons that take you places */}
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
          {/* These are some more buttons on the right side */}
          <motion.div className="nav-right" variants={navAnimation}>
            <motion.button variants={navAnimation}>Register</motion.button>
            <motion.button variants={navAnimation}>Sign In</motion.button>
            {/* This is a small button you might see on a phone */}
            <motion.span className="mobile-menu" variants={navAnimation}>
              <i className="fa-solid fa-bars"></i>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; // This means all the cool things we made are ready to be shown on the website
