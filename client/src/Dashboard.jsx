import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import logo from './assets/img/logo.svg';
import './App.css'
import axios from 'axios'
import { useEffect,useState } from 'react';
export default function Dashboard() {
        const {userId}=useParams()
    const [userdata, setUserdata] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAppointment = async () => {
          try {
            const appointmentId = userId;
            const baseUrl = 'https://server-1-rro0.onrender.com';
           // console.log("URL",`${baseUrl}/api/user/${appointmentId}`);
            const response =  await axios.get(`${baseUrl}/api/user/${appointmentId}`);
           
            setUserdata(response.data); // Assuming response.data is the appointment object
          } catch (err) {
            console.error('Error fetching appointment:', err.response.data);
            setError('Error fetching appointment details');
          } 
        };
      
        fetchAppointment();
      }, [userId]);

    const navigate=useNavigate()
    function home(){
        navigate(`/dashboard/${userId}`)
        console.log("name")
    }
    function appointment(){
        navigate(`/dashboard/${userId}/appointment`)
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
        <Navbar data={userdata}/>
        <div className='scroll-data'>
        <Outlet />
        </div>
       
    </div>
   </div>
  )
}
