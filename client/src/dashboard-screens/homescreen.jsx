import React from 'react'
import booking from '../assets/img/booking.svg'
import tracker from '../assets/img/tracker.svg'
import vehicle from '../assets/img/vehicle.svg'
import user from '../assets/img/user.svg'
import '../App.css'


export default function Homescreen() {
  return (
    <div className='row p-3'>
    <div className='col-md-3'>
    <div className="card shadow-lg mb-5 bg-white rounded py-2">
      <img height={150} src={booking} className="card-img-top img-fluid" alt="Booking" />
      <div className="card-body text-center">
        <h5 className="card-title">Book Appointment</h5>
        <p className="card-text">Schedule your vehicle service appointment easily and conveniently.</p>
        <a href="/dashboard/appointment" className="btn btn-primary">Book Now</a>
      </div>
    </div>

    </div>
    <div className='col-md-3'>
    <div className="card shadow-lg mb-5 bg-white rounded py-2">
      <img height={150} src={tracker} className="card-img-top img-fluid" alt="Service Tracker" />
      <div className="card-body text-center">
        <h5 className="card-title">Track Service</h5>
        <p className="card-text">Monitor the status of your vehicle service easily.</p>
        <a href="/track-service" className="btn btn-primary">Track Now</a>
      </div>
    </div>
    </div>

    <div className='col-md-3'>
    <div className="card shadow-lg mb-5 bg-white rounded py-2">
      <img src={vehicle} className="card-img-top img-fluid" alt="Add Vehicle" />
      <div className="card-body text-center">
        <h5 className="card-title">Add Vehicle</h5>
        <p className="card-text">Add your vehicle details for a better service experience.</p>
        <a href="/add-vehicle" className="btn btn-primary">Add Now</a>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <div className="card shadow-lg mb-5 bg-white rounded py-2">
      <img height={150} src={user} className="card-img-top img-fluid" alt="Booking" />
      <div className="card-body text-center">
        <h5 className="card-title">Your Details</h5>
        <p className="card-text">Add your Details and Vehicle Information </p>
        <a href="/appointment" className="btn btn-primary">Add Now</a>
      </div>
    </div>

    </div>

    </div>
  )
}
