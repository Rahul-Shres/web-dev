import React from 'react';
import logo from '../../assets/img/dumble.png';

const Header = () => {
  return (
    <div className="container">
      <div className="nav__wrapper">
        <div className="logo">
          <div className="logo__img">
            <img src={logo} alt='Fitbody logo' />
            <h2>Fitbody</h2>
            {/* continue from 3:43 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
