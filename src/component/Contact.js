import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faAddressBook, faEnvelope, faClock, faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../common/Contact.css';

// Import images
import logo from '../img/logo.png';
import person1 from '../img/people/1.png';
import person2 from '../img/people/2.png';
import person3 from '../img/people/3.png';
import appStore from '../img/pay/app.jpg';
import playStore from '../img/pay/play.jpg';
import paymentMethods from '../img/pay/pay.png';

const Contact = () => {
  return (
    <div>
      <section id="header">
        <Link to="/">
          <img src={logo} width="30%" height="30%" className="logo" alt="Logo" />
        </Link>

        <div>
          <ul id="navbar">
            <li><Link to="/">LOGOUT</Link></li>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
            <li id="lg-bag"><a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
            <a href="#" id="close"><FontAwesomeIcon icon="fa-times" /></a>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></Link>
          <Link to="#"><FontAwesomeIcon id="bar" icon="fa-outdent" /></Link>
        </div>
      </section>

      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <FontAwesomeIcon icon={faMapPin} />
              <p>134, Malviya Nagar, Jaipur, Rajasthan</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faAddressBook} />
              <p>+91 9462 XXX XXX</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>ronak@gmail.com</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <p>10:00 - 17:00 Mon - Sat</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.2584843954887!2d75.03386417492642!3d27.801813421319576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cab0999c02435%3A0x6beb28aded79e5e7!2sMody%20University!5e0!3m2!1sen!2sin!4v1720802113896!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src={person1} alt="Jimmy" />
            <p><span>Jimmy</span>Senior Marketing Manager<br />Phone: +91 9462 XXX XXX<br />Email: jimmy@gmail.com</p>
          </div>
          <div>
            <img src={person2} alt="Carl" />
            <p><span>Carl</span>Marketing Head<br />Phone: +91 7014 XXX XXX<br />Email: carl@gmail.com</p>
          </div>
          <div>
            <img src={person3} alt="Evaa" />
            <p><span>Evaa</span>Employee<br />Phone: +91 8877 XXX XXX<br />Email: evaa@gmail.com</p>
          </div>
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
          <img src={paymentMethods} alt="Payment Methods" />
        </div>

        <div className="copyright">
          <p><FontAwesomeIcon icon={faHeart} />2024, Made with <FontAwesomeIcon icon={faHeart} /> <FontAwesomeIcon icon={faHeart} /> by Ronak</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
