import logo from './logo.svg';
import './App.css';
import SignupForm from './component/SignupForm';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import Dashboard from './component/Dashboard';
import HomePage from './component/HomePage';
import Shop from './component/Shop';
import Blog from './component/Blog';
import About from './component/About';
import Contact from './component/Contact';
import Sproduct from './component/Sproduct';
import Cart from './component/Cart';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sproduct" element={<Sproduct />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}

export default App;
