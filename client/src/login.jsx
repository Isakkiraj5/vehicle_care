import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
import './login.css';

const Login = () => {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const signUpValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
  });

  const handleSignInSubmit = (values) => {
    // Log sign-in values to the console
    console.log(values)
    axios.post("http://localhost:3000/login", values)
    .then((res) => {
      console.log('Login Response:', res.data);
      if (res.data === "success") {
        console.log('Login successful. Redirecting to dashboard...');
        dashboard();
      } else {
        setError(true)
        console.log('Login failed:', res.data);
        
      }
    })
    .catch((error) => {
      console.error('Login Error:', error);
      // Handle error if necessary
    });
  
  };

  const handleSignUpSubmit = (values) => {
  
    console.log('Sign Up Values:', values);
    axios.post("http://localhost:3000/register",values)
    .then((res)=>console.log(res))
    setActive(false)
    
  };

  const dashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container1">
      <div className="forms-container1">
        <div className="signin-signup">
          {!active && (
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={signInValidationSchema}
              onSubmit={handleSignInSubmit}
            >
              {() => (
                <Form className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
                      type="text"
                      name="email"
                      placeholder="email"
                    />
                  </div>
                  <ErrorMessage name="username" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  {error && ( <div  className="error-message" >
                  Enter correct email and password
                  </div>)}
                  <ErrorMessage name="password" component="div" className="error-message" />
                  <input type="submit" value="Login" className="btn solid" />
                </Form>
              )}
            </Formik>
          )}
          {active && (
            <Formik
              initialValues={{ username: '', email: '', password: '', mobile: '' }}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSignUpSubmit}
            >
              {() => (
                <Form className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                  </div>
                  <ErrorMessage name="username" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-phone"></i>
                    <Field
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <ErrorMessage name="mobile" component="div" className="error-message" />
                  <input type="submit" value="Sign up" className="btn solid" />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>

      <div className="panels-container1">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to Our Community?</h3>
            <p>
              Welcome to Vehicle Care. Whether you're a car enthusiast or just looking to maintain your vehicle, you've come to the right place.
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => setActive(true)}>
              Sign up
            </button>
          </div>
          <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches our shared experiences. Let's continue this journey together!
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => setActive(false)}>
              Sign in
            </button>
          </div>
          <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
