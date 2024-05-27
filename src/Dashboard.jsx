import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import logo from './assets/img/logo.svg';
import './App.css'
export default function Dashboard() {
    const navigate=useNavigate()
    function home(){
        navigate('/dashboard')
        console.log("name")
    }
    function appointment(){
        navigate('/dashboard/appointment')
        console.log("name")
    }
  return (
   <div className="row mx-0">
    <div className='col-1 px-0'>
    <div className='menu'>
     <div><img src={logo} height={40} className='img-fluid' alt="" /></div>
     <div className='mt-3 d-flex justify-content-center align-items-center flex-column'>
     <button onClick={home} className='dashboarditems'>
        
     <i className="fa-solid fa-house"></i>
     </button>
     <button onClick={appointment} className='dashboarditems'>
     <i className="fa-solid fa-calendar-check"></i>
     </button>
     <button className='dashboarditems'>
     <i className="fa-solid fa-magnifying-glass"></i>
     </button>
     <button className='dashboarditems'>
     <i className="fa-solid fa-user"></i>
     </button>
     </div>
    </div>
    </div>
    <div className='col-11 px-0'>
        <Navbar />
        <div className='scroll-data'>
        <Outlet />
        </div>
       
    </div>
   </div>
  )
}
