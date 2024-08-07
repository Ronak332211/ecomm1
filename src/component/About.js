import React from 'react';
import { Link } from 'react-router-dom';
import '../common/About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes, faStar, faArrowRight,faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import logo from '../img/logo.png';
import aboutImage from '../img/about/a6.jpg';
import feature1 from '../img/features/f1.png';
import feature2 from '../img/features/f2.png';
import feature3 from '../img/features/f3.png';
import feature4 from '../img/features/f4.png';
import feature5 from '../img/features/f5.png';
import feature6 from '../img/features/f6.png';
import appStore from '../img/pay/app.jpg';
import playStore from '../img/pay/play.jpg';
import paymentMethods from '../img/pay/pay.png';

const About = () => {
  return (
    <div>
      <header id="header">
        <Link to="/"><img src={logo} width="30%" height="30%" className="logo" alt="Logo" /></Link>
        <div>
          <ul id="navbar">
            <li><Link to="/">LOGOUT</Link></li>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li id="lg-bag"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
            <a href="#" id="close"><FontAwesomeIcon icon={faTimes} /></a>
          </ul>
        </div>  
      </header>

      <section id="page-header" className="about-header">
        <h2>#knowUs</h2>
        <p>Discover our journey and passion for excellence.</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={aboutImage} alt="About Us" />
        <div>
          <h2>Who We Are?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
          <abbr title="">Create stunning images with as much or as little control as you like 
            thanks to a choice of Basic and Creative modes.</abbr>
          <br /><br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you like 
            thanks to a choice of Basic and Creative modes.</marquee>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={feature1} alt="Free Shipping" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={feature2} alt="Online Order" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={feature3} alt="Save Money" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={feature4} alt="Promotions" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={feature5} alt="Happy Sell" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={feature6} alt="24/7 Support" />
          <h6>24/7 Support</h6>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for Newsletter</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src={logo} width="30%" height="30%" alt="Logo" />
          <h4>Contact</h4>
          <p><strong>Address:</strong> 121 Malviya Nagar, Street 43, Jaipur</p>
          <p><strong>Phone:</strong> +91 9462 XXX XXX</p>
          <p><strong>Hours:</strong> 10:00- 17:00 Mon - Sat</p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faPinterestP} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <Link to="#">About Us</Link>
          <Link to="#">Delivery Information</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
          <Link to="#">Contact Us</Link>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <Link to="#">Sign In</Link>
          <Link to="#">View Cart</Link>
          <Link to="#">My Wishlist</Link>
          <Link to="#">Track my Order</Link>
          <Link to="#">Help</Link>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={appStore} alt="App Store" />
            <img src={playStore} alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={paymentMethods} alt="Payment Gateways" />
        </div>

        <div className="copyright">
          <p><i className="fa-regular fa-copyright"></i>2024, Made with <FontAwesomeIcon icon={faHeart} /> by Ronak</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
