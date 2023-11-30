import './App.css';
import Cart from './components/cart/cart';
import Slider from './components/slider/reactslider';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Home from './components/home/Home'
import Header from './components/header/Header';
import Login from './components/login/Login'
import ProductCard from './components/product/ProductCard';
import Profile from './components/profile/Profile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container1'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart/>} />
          {/* <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviesdetail" element={<MoviesDetail />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
