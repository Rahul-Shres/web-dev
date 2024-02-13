import { useState } from "react"
import { Avatar } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { STATUSES } from "../../../../globals/misc/statuses"
import { registerAdmin } from "../../../../store/adminAuth";
import { APIAdminApiAuthentication } from "../../../../http";



const AdminRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {status} = useSelector((state)=>state.adminAuth)
  console.log("Current status:", status);


  const [userData, setUserData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    department: "",
    adminName: "", // Add adminName field
  });


  const handleChange = (e)=>{
    const {name,value} = e.target 
    setUserData({
      ...userData,
      [name] : value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("Form submitted");
    dispatch(registerAdmin(userData))
    if(status === STATUSES.SUCCESS){
      return navigate("/login")
    }
    if(status === STATUSES.ERROR){
      alert("Something Went Wrong, Try again")
      return;
    }
   
  }
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-md p-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center mb-4">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Register</h1>
            </div>

            <div className="mt-5">
            <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">

                <div className="grid gap-y-4">
                <div>
                    <label htmlFor="picture" className="block text-sm mt-2 dark:text-white">Profile Picture</label>
                   
                    <input type="file" id="picture" name="picture" accept="image/*" className="mt-1" />

                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                    <div className="relative">
                      <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" onChange={handleChange} />
                    </div>
                  </div>

                  <div>
          <label htmlFor="adminName" className="block text-sm mb-2 dark:text-white">Admin Name</label>
          <div className="relative">
            <input type="text" id="adminName" name="adminName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="adminName-error" onChange={handleChange}/>
          </div>
        </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm mb-2 dark:text-white">Phone Number</label>
                    <div className="relative">
                      <input type="tel" id="phoneNumber" name="phoneNumber" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="phoneNumber-error" onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm mb-2 dark:text-white">Department</label>
                    <div className="relative">
                      <input type="text" id="department" name="department" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="department-error"  onChange={handleChange}/>
                    </div>
                  </div>

                  <div>
                  <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>

                    <div className="relative">
                      <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Confirm Password</label>
                    <div className="relative">
                      <input type="password" id="confirm-password" name="confirm-password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="confirm-password-error" onChange={handleChange}/>
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
