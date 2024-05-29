import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
 const navigate=useNavigate()
  function navigation(){
    navigate('/')
  }
  return (
    <>
    <nav className='navbar-1'>
   
      <div><i className="fa-solid fa-user mx-3"></i> Name </div>
      <button onClick={navigation} className="logout-btn px-2">Log out</button>
    </nav>
    </>
  )
}
