import './App.css';
import Footer from './components/footer/footer';
import Home from './components/home/Home'
import Header from './components/header/Header';
import Login from './components/login/Login'
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
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviesdetail" element={<MoviesDetail />} /> */}
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
