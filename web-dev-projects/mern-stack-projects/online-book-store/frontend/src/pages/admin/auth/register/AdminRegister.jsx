import React from 'react';
import { Avatar } from "@nextui-org/react";

const AdminRegister = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-md p-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center mb-4">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Register</h1>
              
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                    <div className="relative">
                      <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />
                      {/* ... */}
                    </div>
                    {/* ... */}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Phone Number</label>
                    <div className="relative">
                      <input type="tel" id="phone" name="phone" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="phone-error" />
                      {/* ... */}
                    </div>
                    {/* ... */}
                  </div>


                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Department</label>
                    <div className="relative">
                      <input type="tel" id="phone" name="phone" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="phone-error" />
                      {/* ... */}
                    </div>
                    {/* ... */}
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                      <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/recover-account.html">Forgot password?</a>
                    </div>
                    <div className="relative">
                      <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" />
                      {/* ... */}
                    </div>
                    {/* ... */}
                  </div>

                  <Avatar isBordered radius="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <label htmlFor="avatar" className="block text-sm mt-2 dark:text-white">Profile Picture</label>
              <input type="file" id="avatar" name="avatar" accept="image/*" className="mt-1" />

                  <div className="flex items-center">
                    {/* Checkbox code */}
                    <div className="flex">
                      <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />  
                    </div>
                    <div className="ms-3">
                      <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
