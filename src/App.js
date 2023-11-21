import './App.css';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Home from './components/home/Home'
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container1'></div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Contact />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviesdetail" element={<MoviesDetail />} /> */}
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
