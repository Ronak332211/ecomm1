import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/Sproduct.css'; // Ensure this path is correct
import logo from '../img/logo.png';
import f1 from '../img/products/f1.jpg';
import f2 from '../img/products/f2.jpg';
import f3 from '../img/products/f3.jpg';
import f4 from '../img/products/f4.jpg';
import n1 from '../img/products/n1.jpg';
import n2 from '../img/products/n2.jpg';
import n3 from '../img/products/n3.jpg';
import n4 from '../img/products/n4.jpg';
import n5 from '../img/products/n5.jpg';
import n6 from '../img/products/n6.jpg';
import n7 from '../img/products/n7.jpg';
import n8 from '../img/products/n8.jpg';

const Sproduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Select Size');
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Store product details in localStorage
    const product = {
      image: f1,
      name: "Men's Fashion T Shirt",
      price: 139,
      quantity,
      size
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === product.name && item.size === product.size);
    
    if (existingItemIndex !== -1) {
      // Update the quantity if the item already exists
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cartItems.push(product);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    navigate('/cart'); // Redirect to the cart page
  };

  return (
    <div>
      <section id="header">
        <a href="#"><img src={logo} width="30%" height="30%" className="logo" alt="Logo" /></a>

        <div>
          <ul id="navbar">
            <li><a href="/">LOGOUT</a></li>
            <li><a className="active" href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li id="lg-bag"><a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
            <a href="#" id="close"><i className="far fa-times"></i></a>
          </ul>
        </div>
        <div id="mobile">
          <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
          <a href="#"><i id="bar" className="fas fa-outdent"></i></a>
        </div>
      </section>

      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={f1} width="100%" id="MainImg" alt="Main Image" />

          <div className="small-img-group">
            <div className="small-img-col">
              <img src={f1} width="100%" className="small-img" alt="Small Image 1" />
            </div>
            <div className="small-img-col">
              <img src={f2} width="100%" className="small-img" alt="Small Image 2" />
            </div>
            <div className="small-img-col">
              <img src={f3} width="100%" className="small-img" alt="Small Image 3" />
            </div>
            <div className="small-img-col">
              <img src={f4} width="100%" className="small-img" alt="Small Image 4" />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$139</h2>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)} 
            min="1" // Ensure quantity cannot be less than 1
          />
          <button className="normal" onClick={handleAddToCart}>Add to Cart</button>
          <h4>Product Details</h4>
          <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd, fabric constructed from 100% cotton, 
            this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, 
            and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning 
            package.</span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Similar Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {[n1, n2, n3, n4, n5, n6, n7, n8].map((src, index) => (
            <div className="pro" key={index}>
              <img src={src} alt={`Product ${index + 1}`} />
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="fa-solid fa-cart-shopping helo"></i></a>
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
          <p><strong>Hours:</strong> 10:00- 17:00  Mon - Sat</p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
              <i className="fa-brands fa-linkedin-in"></i>
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
          <p><i className="fa-regular fa-copyright"></i>2024, Made with <i className="fa-solid fa-heart"></i> by Ronak</p>
        </div>
      </footer>
    </div>
  );
};

export default Sproduct;
