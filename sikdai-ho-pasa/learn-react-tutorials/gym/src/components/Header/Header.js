import React from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";
const Header = () => {
  const nav_links = [
    {
      path: "#",
      display: "Home",
    },
    {
      path: "#",
      display: "Watch",
    },
    {
      path: "#",
      display: "Pricing",
    },
  ];

  return (
    <header className="header">
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
              {nav_links.map((link) => (
                <li className="nav_item">
                  <a href={link.path}>{link.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}

          <div className="nav-right">
            <button >Register</button>
            <button >Sign In</button>
            <span className="mobile-menu">
              
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
