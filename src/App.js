import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from './components/pages/Home';
import About from './components/pages/About'
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {

  return (
    <Router>
      <div className="app-wrapper">
      <div class = 'background'>
        <h1 style={{fontFamily: 'Josefin Sans, sans-serif'}} class = 'mainheader'>Adam Johnson's Portfolio <Navigation /></h1>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      
      </div>
      </div>
    </Router>
  );
}

export default App;