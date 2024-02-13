import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  return (
    <div className='nav_bar'>
        To-Do v1
      <div className="menu_items">
        <Link  to="/">Home</Link>
        <Link  to="/add">Add Page</Link>
        <Link  to="/login">Log in</Link>
      </div>
    </div>
  )
}

export default Navbar
