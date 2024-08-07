import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../common/LoginForm.css';
import LoginImage from '../img/Login.jpg'; // Adjust the path as necessary
import GoogleIcon from '../img/google.jpg'; // Adjust the path as necessary
import FacebookIcon from '../img/facebook.jpg'; // Adjust the path as necessary
import GitHubIcon from '../img/github.jpg'; // Adjust the path as necessary

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful! Welcome back");
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="loginContainer">
      <div className="formSection">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="formFooter">
            <Link to="/forgot-password" className="forgotPasswordLink">Forgot password?</Link>
            <button type="submit" className="loginButton">Login</button>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </form>
        <div className="socialSignup">
          <hr className="divider" />
          <p className="orText">or Login with</p>
          <hr className="divider" />
          <div className="socialIcons">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src={GoogleIcon} alt="Google" className="socialIcon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="socialIcon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          </div>
        </div>
      </div>
      <div className="imageSection">
        <img src={LoginImage} alt="Login" />
      </div>
    </div>
  );
};

export default LoginForm;
