
import './App.css'
import {  RouterProvider } from 'react-router-dom'
import router from './router'
import Navbar from './global/components/navbar/Navbar'
import Footer from './global/components/footer/Footer'


function App() {


  return (
    <>
    <Navbar />
   <RouterProvider router={router} />
   <Footer />

    </>
  )
}

export default App