import React from 'react';
import './css/homescreen.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-cpu"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
          <h5 className="mt-3">Diagnostics</h5>
          <p>
            Accurate and thorough diagnostics to identify and address any issues with your vehicle. Our advanced diagnostic tools and techniques ensure precise detection and quick resolution.
          </p>
          <p>
            Whether your check engine light is on or you're experiencing unusual sounds or performance issues, our diagnostic services will pinpoint the problem and recommend the best course of action.
          </p>
        </div>
        <div className="col-md-4 service-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-tool"
          >
            <path d="M14.7 6.3a5 5 0 0 1 7.1 7.1l-8.4 8.4a5 5 0 0 1-7.1-7.1l8.4-8.4zm0 0L6 14" />
            <path d="M7 4h10" />
            <path d="M7 8h7" />
            <path d="M3 3l3 3" />
          </svg>
          <h5 className="mt-3">Dent and Paint Repairs</h5>
          <p>
            Professional dent removal and paint repair services to restore your vehicle's appearance. We use top-quality materials and techniques to ensure a flawless finish.
          </p>
          <p>
            From minor scratches and dents to major collision damage, our expert technicians can restore your car to its original condition. We offer color matching, scratch removal, and complete paint jobs.
          </p>
        </div>
        <div className="col-md-4 service-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-disc"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-activity"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          <h5 className="mt-3">Suspension System Services</h5>
          <p>
            Comprehensive suspension system services to enhance your vehicle's handling and comfort. We provide suspension inspections, repairs, and upgrades to ensure a smooth ride.
          </p>
          <p>
            Our suspension services include shock and strut replacement, alignment services, and repairs for springs, bushings, and control arms. We help improve vehicle stability and handling.
          </p>
        </div>
        <div className="col-md-4 service-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-droplet"
          >
            <path d="M12 2.69C12 2.69 18 10 18 15.4C18 18.71 15.31 21.4 12 21.4C8.69 21.4 6 18.71 6 15.4C6 10 12 2.69 12 2.69Z" />
          </svg>
          <h5 className="mt-3">Oil and Lube Changes</h5>
          <p>
            Regular oil and lube changes to keep your engine running smoothly. Our services include oil filter replacement and a thorough inspection of your vehicle's fluid levels.
          </p>
          <p>
            We use high-quality oils and lubricants to ensure optimal engine performance. Our oil change services include checking and topping off all essential fluids, ensuring your vehicle is in top condition.
          </p>
        </div>
        <div className="col-md-4 service-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-thumbs-up"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3C10.11 2 7 2.68 7 8v4H2V12a2 2 0 0 1 2-2h7" />
            <path d="M23 12a1 1 0 0 0-1-1h-7l1.64-7.36a1 1 0 0 0-.89-1.24L8 5.18 5.68 8.74a1 1 0 0 0-.19.83l1.5 5a1 1 0 0 0 .94.69H16a2 2 0 0 0 2-2.09L18 12" />
          </svg>
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
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">AutoMechanica</h5>
              <p>
                AutoMechanica’s mission is to enable premium quality care for your luxury car service at affordable pricing. We ensure real-time updates for complete car care needs with a fair and transparent pricing mechanism.
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
              <p><i className="fas fa-envelope mr-3"></i> contact@automechanica.com</p>
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
