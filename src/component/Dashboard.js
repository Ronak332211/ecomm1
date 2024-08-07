import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTimes, faOutdent, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../common/Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <header id="header">
                <a href="#"><img src={require("../img/logo.png")} width="30%" height="30%" className="logo" alt="Logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li id="lg-bag"><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                        <a href="#" id="close"><FontAwesomeIcon icon={faTimes} /></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                    <a href="#"><FontAwesomeIcon id="bar" icon={faOutdent} /></a>
                </div>
            </header>

            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" className="section-p1">
                {[
                    { img: 'features/f1.png', title: 'Free Shipping' },
                    { img: 'features/f2.png', title: 'Online Order' },
                    { img: 'features/f3.png', title: 'Save Money' },
                    { img: 'features/f4.png', title: 'Promotions' },
                    { img: 'features/f5.png', title: 'Happy Sell' },
                    { img: 'features/f6.png', title: '24/7 Support' },
                ].map((feature, index) => (
                    <div className="fe-box" key={index}>
                        <img src={require(`../img/${feature.img}`)} alt="" />
                        <h6>{feature.title}</h6>
                    </div>
                ))}
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    {[
                        'products/f1.jpg', 'products/f2.jpg', 'products/f3.jpg', 'products/f4.jpg', 
                        'products/f5.jpg', 'products/f6.jpg', 'products/f7.jpg', 'products/f8.jpg'
                    ].map((product, index) => (
                        <div className="pro" key={index}>
                            <img src={require(`../img/${product}`)} alt="" />
                            <div className="des">
                                <span>Godrej</span>
                                <h5>The wooden sofa</h5>
                                <div className="star">
                                    {[...Array(5)].map((_, i) => <FontAwesomeIcon icon={faStar} key={i} />)}
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><FontAwesomeIcon icon={faCartShopping} className="helo" /></a>
                        </div>
                    ))}
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% off</span> - All home decor</h2>
                <button className="normal">Explore More</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Collection New Modern Design</p>
                <div className="pro-container">
                    {[
                        'products/n1.jpg', 'products/n2.jpg', 'products/n3.jpg', 'products/n4.jpg', 
                        'products/n5.jpg', 'products/n6.jpg', 'products/n7.jpg', 'products/n8.jpg'
                    ].map((product, index) => (
                        <div className="pro" key={index}>
    <img src={require(`../img/${product}`)} alt="" />
    <div className="des">
        <span>Godrej</span>
        <h5>The wooden sofa</h5>
        <div className="star">
            {[...Array(5)].map((_, i) => <FontAwesomeIcon icon={faStar} key={i} />)}
        </div>
        <h4>$78</h4>
    </div>
    <a href="#"><FontAwesomeIcon icon={faCartShopping} className="helo" /></a>
</div>

                    ))}
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic decor piece is on sale at YARA</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>Spring/Summer</h4>
                    <h2>Upcoming Season</h2>
                    <span>The best classic decor piece is on sale at YARA</span>
                    <button className="white">Collection</button>
                </div>
            </section>

            <section id="banner3">
                <div className="banner-box">
                    <h2>Seasonal Sale</h2>
                    <h3>Wooden Collection -50% OFF</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>The wooden sofa Collection</h2>
                    <h3>Spring / Summer 2024</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>The wooden sofa</h2>
                    <h3>New Trendy Prints</h3>
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
                    <img className="logo" src={require("../img/logo.png")} width="30%" height="30%" alt="Logo" />
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
                        <img src={require("../img/pay/app.jpg")} alt="" />
                        <img src={require("../img/pay/play.jpg")} alt="" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src={require("../img/pay/pay.png")} alt="" />
                </div>

                <div className="copyright">
                    <p>© 2024, YARA - Ecommerce Website. Powered by Ronak Nehara, Sakshi Sain</p>
                </div>
            </footer>
        </>
    );
};

export default Dashboard;
