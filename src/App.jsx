import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIBot from './components/AIBot';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LLMInfo from './LLMInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/llminfo" element={<LLMInfo />} />
        </Routes>
        <AIBot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
