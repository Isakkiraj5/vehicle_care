import React from 'react';

import './login.css'

export default function Login() {
    return (
        <div className="container1">
		<div className="forms-container1">
			<div className="signin-signup">
				<form action="#" className="sign-in-form">
					<h2 className="title">Sign in</h2>
					<div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Username" />
					</div>
					<div className="input-field">
						<i className="fas fa-lock"></i>
						<input type="password" placeholder="Password" />
					</div>
					<input type="submit" value="Login" className="btn solid" />
					
				</form>
				<form action="#" className="sign-up-form">
					<h2 className="title">Sign up</h2>
					<div className="input-field">
						<i className="fas fa-user"></i>
						<input type="text" placeholder="Username" />
					</div>
					<div className="input-field">
						<i className="fas fa-envelope"></i>
						<input type="email" placeholder="Email" />
					</div>
					<div className="input-field">
						<i className="fas fa-lock"></i>
						<input type="password" placeholder="Password" />
					</div>
					<input type="submit" className="btn" value="Sign up" />
					
				</form>
			</div>
		</div>

		<div className="panels-container1">
			<div className="panel left-panel">
				<div className="content">
					<h3>New to Our Community?</h3>
<p>
    Welcome to the Vehicle Care  Whether you're a car enthusiast or just looking to maintain your vehicle, you've come to the right place. 
</p>
					<button className="btn transparent" id="sign-up-btn">
						Sign up
					</button>
				</div>
				<img  src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
			</div>
			<div className="panel right-panel">
				<div className="content">
					<h3>One of Our Valued Members</h3>
					<p>
						Thank you for being part of our community. Your presence enriches our
          shared experiences. Lets continue this journey together!
					</p>
					<button className="btn transparent" id="sign-in-btn">
						Sign in
					</button>
				</div>
				<img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"  className="image" alt="" />
			</div>
		</div>
	</div>
    );
}
