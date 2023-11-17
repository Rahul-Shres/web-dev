import React from 'react';
import logo from '../../assets/img/dumble.png';

const Header = () => {

  const nav__links=[
    {
      path: "#",
      display: "Home"
    },
    {
      path: "#",
      display: "Schedule"
    },
    {
      path: "#",
      display: "Classes"
    },
    {
      path: "#",
      display: "Pricing"
    },
  ]
  return (
    <div className="container">
      <div className="nav__wrapper">
        <div className="logo">
          <div className="logo__img">
            <img src={logo} alt='Fitbody logo' />
            <h2>Fitbody</h2>
            {/* Navigation Menu */}
            <div className="navigation">
              <ul className="menu">
                {
                  nav__links.map(items=>(
                    <li className='nav__item'>
                      <a href={items.path}>{items.display}</a>
                    </li>
                  ))
                }
              </ul>
              {/* nav right */}

              continue from 8:33
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
