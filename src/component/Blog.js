import React from 'react';
import { Link } from 'react-router-dom';
import '../common/Blog.css'; // Ensure this path is correct
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes, faOutdent, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Blog = () => {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  return (
    <div>
      <section id="header">
        <a href="/"><img src={logo} width="30%" height="30%" className="logo" alt="Logo" /></a>
        <div>
          <ul id="navbar">
            <li><a href="/">LOGOUT</a></li>
            <li><Link to="/dashboard">Home</Link></li>
            <li><a href="/shop">Shop</a></li>
            <li><a className="active" href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li id="lg-bag"><a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
            <a href="#" id="close"><FontAwesomeIcon icon={faTimes} /></a>
          </ul>
        </div>
        <div id="mobile">
          <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
          <a href="#"><FontAwesomeIcon icon={faOutdent} id="bar" /></a>
        </div>
      </section>

      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read All Case Studies</p>
      </section>

      <section id="blog" className="section-p1">
        <div className="blog-box">
          <div className="blog-img">
            <img src={require('../img/blog/b1.jpg')} alt="Blog Image 1" />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
            <Link to="#">CONTINUE READING</Link>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={require('../img/blog/b2.jpg')} alt="Blog Image 2" />
          </div>
          <div className="blog-details">
            <h4>The wooden sofa</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
            <Link to="#">CONTINUE READING</Link>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={require('../img/blog/b3.jpg')} alt="Blog Image 3" />
          </div>
          <div className="blog-details">
            <h4>The wooden sofa</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
            <Link to="#">CONTINUE READING</Link>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="blog-box">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
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
          <p><strong>Hours:</strong> 10:00-17:00  Mon - Sat</p>
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
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track my Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="App Store" />
            <img src="img/pay/play.jpg" alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay/pay.png" alt="Payment Gateways" />
        </div>

        <div className="copyright">
          <p><FontAwesomeIcon icon={faHeart} /> 2024, Made with <FontAwesomeIcon icon={faHeart} /> by Ronak</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
