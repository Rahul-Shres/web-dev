import React from 'react';
import './Features.css'; // Import the CSS file

const Features = () => {
  return (
    <div className="bg-dark text-foreground  h-50 relative">
      {/* Background */}
      


      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center relative z-10 dark mb-28" >
        <h1 className='text-6xl'>Nepal’s Leading Music School</h1>
        {/* Grid */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            {/* <!-- Stats --> */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">Talented Students</h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white">5000+</p>
            </div>
            {/* <!-- End Stats --> */}

            {/* <!-- Stats --> */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">Courses Offered</h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white">50+</p>
            </div>
            {/* <!-- End Stats --> */}

            {/* <!-- Stats --> */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">Happy Graduates</h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white">95%</p>
            </div>
            {/* <!-- End Stats --> */}
          </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </div>
  );
};

export default Features;
