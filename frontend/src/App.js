import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Apply from './pages/Apply';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import ClientStories from './pages/ClientStories';
import Blog from './pages/Blog';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <ScrollToTop/>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/clientstories" element={<ClientStories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;