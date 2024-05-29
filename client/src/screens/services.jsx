import React from 'react';
import './css/homescreen.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';
import diagnostic from '../assets/img/Diagnostic.jpg'
import Detailing from '../assets/img/Detailing.jpg'
import engine from '../assets/img/engine.jpg'
import brakes from '../assets/img/brake.jpg'
import oillube from '../assets/img/oillube.jpg'
import suspension from '../assets/img/suspension.jpg'

export default function Services() {
  const navigate = useNavigate();

  const navigation = () => {
    navigate('/login');
  };
  return (
    <div className="">
          <nav className="navbar px-3 py-2">
        <div className="img"><img src={logo} alt="" height={50} /></div>
        <div>
          <div>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/services">Services</Link>
            <Link className='link' to="/about">About us</Link>
            <Link className='link' to="/contact">Contact</Link>
          </div>
        </div>
        <button onClick={navigation} className="login-btn px-2">Login</button>
      </nav>
      <div className="container">

    
      <h2 className="text-center">Our Services</h2>
      <p className="text-center">
        At Professional Auto Repair, we offer a comprehensive range of auto repair and maintenance services to keep your vehicle running smoothly. Our experienced technicians use the latest equipment and techniques to ensure top-quality service. Here are some of the services we provide:
      </p>

      <div className="row mx-0text-center mt-4">
        <div className="col-md-4 service-card">
      <img src={diagnostic} style={{height:'100px'}} alt="" className='img-fluid' />
          <h5 className="mt-3">Diagnostics</h5>
          <p>
            Accurate and thorough diagnostics to identify and address any issues with your vehicle. Our advanced diagnostic tools and techniques ensure precise detection and quick resolution.
          </p>
          <p>
            Whether your check engine light is on or you're experiencing unusual sounds or performance issues, our diagnostic services will pinpoint the problem and recommend the best course of action.
          </p>
        </div>
        <div className="col-md-4 service-card">
        <img src={Detailing} style={{height:'100px'}} alt="" className='img-fluid' />
          <h5 className="mt-3">Dent and Paint Repairs</h5>
          <p>
            Professional dent removal and paint repair services to restore your vehicle's appearance. We use top-quality materials and techniques to ensure a flawless finish.
          </p>
          <p>
            From minor scratches and dents to major collision damage, our expert technicians can restore your car to its original condition. We offer color matching, scratch removal, and complete paint jobs.
          </p>
        </div>
        <div className="col-md-4 service-card">
        <img src={brakes} style={{height:'100px'}} alt="" className='img-fluid' />
          <h5 className="mt-3">Brake System Repairs</h5>
          <p>
            Expert brake system repairs to ensure your safety on the road. Our services include brake pad replacement, rotor resurfacing, and complete brake system overhauls.
          </p>
          <p>
            Regular brake inspections and maintenance are crucial for safe driving. We offer comprehensive brake services, including ABS diagnostics, brake fluid replacement, and emergency brake repairs.
          </p>
        </div>
      </div>

      <div className="row mx-0text-center mt-4">
        <div className="col-md-4 service-card">
        <img src={suspension} style={{height:'100px'}} alt="" className='img-fluid' />
          <h5 className="mt-3">Suspension System Services</h5>
          <p>
            Comprehensive suspension system services to enhance your vehicle's handling and comfort. We provide suspension inspections, repairs, and upgrades to ensure a smooth ride.
          </p>
          <p>
            Our suspension services include shock and strut replacement, alignment services, and repairs for springs, bushings, and control arms. We help improve vehicle stability and handling.
          </p>
        </div>
        <div className="col-md-4 service-card">
        <img src={oillube} style={{height:'100px'}} alt="" className='img-fluid' />
          <h5 className="mt-3">Oil and Lube Changes</h5>
          <p>
            Regular oil and lube changes to keep your engine running smoothly. Our services include oil filter replacement and a thorough inspection of your vehicle's fluid levels.
          </p>
          <p>
            We use high-quality oils and lubricants to ensure optimal engine performance. Our oil change services include checking and topping off all essential fluids, ensuring your vehicle is in top condition.
          </p>
        </div>
        <div className="col-md-4 service-card">
        <img src={engine} style={{height:'100px'}} alt="" className='img-fluid' />
          <h5 className="mt-3">Professional Detailing</h5>
          <p>
            High-quality detailing services to keep your vehicle looking its best inside and out. Our detailing packages include interior cleaning, exterior washing, waxing, and polishing.
          </p>
          <p>
            Our detailing services cover everything from basic washes to complete interior and exterior cleaning. We use premium products to protect your vehicle's finish and ensure a showroom-quality shine.
          </p>
        </div>
      </div>
      </div>
      <footer className="bg-dark text-white pt-5 pb-4 mt-4">
        <div className="container text-center text-md-left">
          <div className="row mx-0text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">AUTOSERVICE</h5>
              <p>
                Autoservice mission is to enable premium quality care for your luxury car service at affordable pricing. We ensure real-time updates for complete car care needs with a fair and transparent pricing mechanism.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">Services</h5>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Periodic Maintenance Service</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Dent & Paint</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Bumper Repair</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Accidental Repair</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Scratch Removal</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">Links</h5>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Home</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>About</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>FAQ</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Blog</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Contact Us</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Privacy Policy</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">Contact</h5>
              <p><i className="fas fa-home mr-3"></i>Unit no.4, Reality Warehousing Pvt. Ltd., Behind Reliance Smart, Wagholi, Pune, Maharashtra – 412207</p>
              <p><i className="fas fa-envelope mr-3"></i> contact@AUTOSERVICE.com</p>
              <p><i className="fas fa-phone mr-3"></i> +73 9797 9797</p>
            </div>
          </div>

          <div className="row mx-0align-items-center">
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-facebook"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-twitter"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-linkedin"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-instagram"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
