import React from 'react';
import './Features.css'; // Import the CSS file

const Features = () => {
  return (
    <div className="h-50 relative">
      {/* Background */}
      
      <div className="absolute inset-0 background-image"></div>

      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center relative z-10">
        <h1 className='text-6xl'>Nepal’s Leading Music School</h1>
        {/* Grid */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Accuracy rate</h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">99.95%</p>
            <p className="mt-1 text-gray-500">in fulfilling orders</p>
          </div>
          {/* End Stats */}

          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Startup businesses</h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">2,000+</p>
            <p className="mt-1 text-gray-500">partner with Preline</p>
          </div>
          {/* End Stats */}

          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Happy customer</h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">85%</p>
            <p className="mt-1 text-gray-500">this year alone</p>
          </div>
          {/* End Stats */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </div>
  );
};

export default Features;
