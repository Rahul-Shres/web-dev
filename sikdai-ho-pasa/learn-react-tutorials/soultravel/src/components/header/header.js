import React from "react";
import "./header.css";

const header = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <h2>
            Soul<span className="highlights">Travel</span>.
          </h2>
        </div>

        <nav className="links">
          <ul>
            <li>
              <a href=""></a>Destination
            </li>
            <li>
              <a href=""></a>Package
            </li>
            <li>
              <a href=""></a>Blog
            </li>
            <li>
              <a href=""></a>About
            </li>
            <li>
              <a href=""></a>Contact
            </li>
          </ul>
        </nav>

        <div className="buttons">
          <a href="">Sign Up</a>
          <button className="btn-sign-in">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default header;
