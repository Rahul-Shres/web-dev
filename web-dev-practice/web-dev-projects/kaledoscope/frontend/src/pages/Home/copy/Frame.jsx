import React from 'react';
import room from './room.jpg';
const Frame = () => {
  return (
    <svg className="mx-auto w-full h-full" width="1206" height="589" viewBox="0 0 1206 389" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <!-- 🧠 svg clip path --> */}
      <clipPath id="header-home">
        <path d="M21.027 0C9.41411 0 0 9.41408 0 21.027V298.584C0 310.197 9.41407 319.611 21.027 319.611H286.701C298.314 319.611 307.728 329.025 307.728 340.638V367.973C307.728 379.586 317.142 389 328.755 389H1184.76C1196.38 389 1205.79 379.586 1205.79 367.973V90.4162C1205.79 78.8033 1196.38 69.3892 1184.76 69.3892H919.089C907.476 69.3892 898.062 59.9751 898.062 48.3622V21.027C898.062 9.41411 888.647 0 877.035 0H21.027Z" fill="#D9D9D9"/>
      </clipPath>
      {/* <!-- 🧠 image hosted on Webflow + clip path reference --> */}
      <image clipPath="url(#header-home)" href={room} alt="Cut the Code header" width="100%" className="header-home-img"></image>
    </svg>
  );
}

export default Frame;
