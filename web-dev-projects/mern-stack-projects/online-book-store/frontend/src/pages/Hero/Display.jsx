import React from 'react'

const Display = () => {
  return (
    <div className='flex flex-col	items-center justify-center h-screen'>
      <div className='w-10/12'>
      
      <div className='grid-cols-12	'>
        <h1 className='text-6xl text-center col-span-12'>Your Pathway to USA</h1>
        
      </div>
      {/* Image container */}
      <div id='hero-image'>
        <svg width="100%" viewBox="0 0 1409 578" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- 🧠 svg clip path --> */}
          <clipPath id="header-home">
            <path d="M1314.77 0.862305C1300.15 0.862305 1288.31 12.7103 1288.31 27.3256V52.821C1288.31 67.4363 1276.46 79.2843 1261.84 79.2843H26.7689C12.1537 79.2843 0.305664 91.1323 0.305664 105.748V268.375C0.305664 282.99 12.1537 294.838 26.769 294.838H52.2516C66.8668 294.838 78.7148 306.686 78.7148 321.301V356.838V433.164V550.829C78.7148 565.444 90.5628 577.292 105.178 577.292H1097.03C1111.65 577.292 1123.5 565.444 1123.5 550.829V486.091C1123.5 471.476 1135.35 459.628 1149.96 459.628H1381.84C1396.46 459.628 1408.31 447.78 1408.31 433.164V273.301C1408.31 273.293 1408.31 273.284 1408.31 273.276C1408.3 271.652 1408.3 270.024 1408.31 268.4C1408.31 268.391 1408.31 268.383 1408.31 268.375V153.375V105.748V27.3256C1408.31 12.7103 1396.46 0.862305 1381.84 0.862305H1314.77Z"></path>
          </clipPath>

          {/* <!-- 🧠 image hosted on Webflow + clip path reference --> */}
          <image clipPath="url(#header-home)" href="https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cut the Code header" width="100%" className="header-home-img"></image>
        </svg>
      </div>
      {/* coursel */}
      <div id='coursel'>

      </div>
      </div>
    </div>
  )
}

export default Display