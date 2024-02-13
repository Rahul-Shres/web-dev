import React from 'react'
import { Avatar } from "@nextui-org/react";

const UpdateUniversity = () => {
  return (
    <div className="flex justify-center items-center h-full">
    <div className="w-full max-w-md p-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center mb-4">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update University</h1>
            
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
              
                <div>
                  <label htmlFor="universityName" className="block text-sm mb-2 dark:text-white">University Name</label>
                  <div className="relative">
                    <input type="universityName" id="universityName" name="universityName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="universityName-error" />
                    {/* ... */}
                  </div>
                  {/* ... */}
                </div>

                <div>
                  <label htmlFor="scholarship" className="block text-sm mb-2 dark:text-white">Scholarship in $</label>
                  <div className="relative">
                    <input type="number" id="scholarship" name="scholarship" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="scholarship-error" />
                    {/* ... */}
                  </div>
                  {/* ... */}
                </div>


                <div>
                  <label htmlFor="applicationFees" className="block text-sm mb-2 dark:text-white">Application Fees</label>
                  <div className="relative">
                    <input type="number" id="applicationFees" name="applicationFees" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="applicationFees-error" />
                    {/* ... */}
                  </div>
                  {/* ... */}
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="tutionFees" className="block text-sm mb-2 dark:text-white">Tution Fees</label>
                  
                  </div>
                  <div className="relative">
                    <input type="number"  id="tutionFees" name="tutionFees" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" />
                    {/* ... */}
                  </div>
                  {/* ... */}
                </div>

                <Avatar isBordered radius="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <label htmlFor="logo" className="block text-sm mt-2 dark:text-white">University Logo</label>
            <input type="file" id="logo" name="logo" accept="image/*" className="mt-1" />

               

                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Update University</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateUniversity