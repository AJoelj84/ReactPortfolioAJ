import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styling/fonts.css';

function Navigation() {

return (
  <div className='navigation'>
    
    <Link to="/projects" className='link' >Portfolio</Link>
    <Link to="/certificates" className='link' >Certificates</Link>
    <Link to="/about" className='link' >About Me</Link>
    <Link to="/resume" className='link' >Resume</Link>
    <Link to="/contact" className='link' >Contact</Link>
    
  </div>
);
}
export default Navigation;

