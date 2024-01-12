import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <html className="h-full">
      <body className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
        <main className="w-full max-w-md mx-auto p-6">
          {/* ... existing code ... */}
          <div className="mt-5">
            {/* Change anchor tag to Link component */}
            // Inside Register.jsx
{/* Use a regular anchor tag for external authentication providers like Google */}
<a
  href="http://localhost:8000/auth/google"
  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
>
  <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
    {/* SVG Path data */}
  </svg>
  Sign in with Google
</a>


            {/* ... existing code ... */}
          </div>
          {/* ... existing code ... */}
        </main>
      </body>
    </html>
  );
};

export default Register;