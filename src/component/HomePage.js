import React from 'react';
import { Link } from 'react-router-dom';
import '../common/HomePage.css';
import logo from '../img/logo.png'; // Adjust the path based on your project structure

const HomePage = () => {
  return (
    <div>
      <header id="header">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        <nav>
          <ul id="navbar">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li id="lg-bag"><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
            <a href="#" id="close"><i className="far fa-times"></i></a>
          </ul>
        </nav>
        <div id="mobile">
          <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </header>

      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <Link to="/shop"><button>Shop Now</button></Link>
        <div id="auth-buttons">
          <Link to="/signup" className="auth-button">Sign Up</Link>
          <Link to="/login" className="auth-button">Login</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
