import './App.css';
import Footer from './components/footer/footer';
import Home from './components/home/Home'
import Header from './components/header/Header';
import ProductCard from './components/product/ProductCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container1'></div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductCard />} />
          {/* <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviesdetail" element={<MoviesDetail />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
