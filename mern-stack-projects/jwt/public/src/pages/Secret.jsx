import React from 'react'
import { useNavigate } from 'react-router-dom'

const Secret = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/register')
  }

  return (
    <div className='private'>
      Secret
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Secret
