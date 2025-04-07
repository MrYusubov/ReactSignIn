import { useState } from 'react';
import './Auth.css';
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Auth = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FaGoogle /></a>
            <a href="#" className="icons"><FaFacebook /></a>
            <a href="#" className="icons"><FaGithub /></a>
            <a href="#" className="icons"><FaLinkedin /></a>
          </div>
          <span>Register with E-mail</span>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FaGoogle /></a>
            <a href="#" className="icons"><FaFacebook /></a>
            <a href="#" className="icons"><FaGithub /></a>
            <a href="#" className="icons"><FaLinkedin /></a>
          </div>
          <span>Login With Email & Password</span>
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <a href="#">Forget Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome To <br />AirBnB</h1>
            <p>Do You Have Account?</p>
            <button className="hidden" id="login" onClick={toggleActive}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hi Dear</h1>
            <h1>Customer</h1>
            <p>If You Don't Have Account</p>
            <button className="hidden" id="register" onClick={toggleActive}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;