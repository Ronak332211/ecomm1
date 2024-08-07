import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes, faStar, faArrowRight, faOutdent } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../common/Shop.css';

// Import images statically
import logo from '../img/logo.png';
import appStore from '../img/pay/app.jpg';
import googlePlay from '../img/pay/play.jpg';
import payMethods from '../img/pay/pay.png';


// Sample product images (importing them statically)
import f1 from '../img/products/f1.jpg';
import f2 from '../img/products/f2.jpg';
import f3 from '../img/products/f3.jpg';
import f4 from '../img/products/f4.jpg';
import f5 from '../img/products/f5.jpg';
import f6 from '../img/products/f6.jpg';
import f7 from '../img/products/f7.jpg';
import f8 from '../img/products/f8.jpg';
import n1 from '../img/products/n1.jpg';
import n2 from '../img/products/n2.jpg';
import n3 from '../img/products/n3.jpg';
import n4 from '../img/products/n4.jpg';
import n5 from '../img/products/n5.jpg';
import n6 from '../img/products/n6.jpg';
import n7 from '../img/products/n7.jpg';
import n8 from '../img/products/n8.jpg';

const products = [
  { img: f1, brand: 'godrej', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: f2, brand: 'godrej', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: f3, brand: 'godrej', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: f4, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: f5, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: f6, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: f7, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: f8, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n1, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n2, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n3, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n4, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n5, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n6, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n7, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
  { img: n8, brand: 'adidas', name: 'Cartoon Astronaut T-Shirts', price: '$78' },
];

const Shop = () => {
  return (
    <div>
      <section id="header">
        <Link to="/">
          <img
            src={logo}
            width="30%"
            height="30%"
            className="logo"
            alt="Logo"
          />
        </Link>
        <div>
          <ul id="navbar">
            <li><Link to="/">LOGOUT</Link></li>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/shop" className="active">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li id="lg-bag">
              <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
            </li>
            <li>
              <Link to="#" id="close"><FontAwesomeIcon icon={faTimes} /></Link>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <FontAwesomeIcon id="bar" icon={faOutdent} />
        </div>
      </section>

      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      <section id="product1" className="section-p1">
  <div className="pro-container">
    {products.map((product, index) => (
      <div className="pro" key={index}>
        <Link to="/sproduct">
          <img src={product.img} alt={product.name} />
          <div className="des">
            <span>{product.brand}</span>
            <h5>{product.name}</h5>
            <div className="star">
              {[...Array(5)].map((_, i) => <FontAwesomeIcon icon={faStar} key={i} />)}
            </div>
            <h4>{product.price}</h4>
          </div>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </Link>
      </div>
    ))}
  </div>
</section>


      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
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
          <p><strong>Hours:</strong> 10:00-17:00 Mon - Sat</p>
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
          <Link to="/about">About Us</Link>
          <Link to="#">Delivery Information</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <Link to="/signin">Sign In</Link>
          <Link to="/cart">View Cart</Link>
          <Link to="#">My Wishlist</Link>
          <Link to="#">Track my Order</Link>
          <Link to="#">Help</Link>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={payMethods} alt="Payment Methods" />
        </div>

        <div className="copyright">
          <p><FontAwesomeIcon icon="copyright" />2024, Made with <FontAwesomeIcon icon="heart" /> by Ronak</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
