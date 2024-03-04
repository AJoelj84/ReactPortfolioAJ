import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/pages/About'
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/pages/Footer';
import Certificates from './components/pages/Certificates';

function App() {

  return (
    <Router>
      <div class = 'background'>
        <h1 style={{fontFamily: 'Josefin Sans, sans-serif'}} class = 'backgroundheader'>Adam Johnson's<br className='aftermedia'></br> Portfolio <Navigation /></h1>
          <Routes>
            <Route path="/" element={<Projects/>} exact />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/certificates" element={<Certificates/>} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;