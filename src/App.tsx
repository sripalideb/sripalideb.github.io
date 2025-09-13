import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <Header />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;