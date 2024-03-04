import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './assets/styling/fonts.css';

function Navigation() {
//   return (
//     <Dropdown class= 'dropdown' style={{ float: 'right', paddingRight: '40px' }}>
//       <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
//         Navigation
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item as={Link} to="/">About Me</Dropdown.Item>
//         <Dropdown.Item as={Link} to="/projects">Portfolio</Dropdown.Item>
//         <Dropdown.Item as={Link} to="/contact">Contact</Dropdown.Item>
//         <Dropdown.Item as={Link} to="/resume">Resume</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }


return (
  <div className="navigation" style={{ float: 'right', paddingRight: '40px' }}>
    <Link to="/projects" className='link' >Portfolio</Link>
    <Link to="/about" className='link' >About Me</Link>
    <Link to="/certificates" className='link' >Certificates</Link>
    <Link to="/resume" className='link' >Resume</Link>
    <Link to="/contact" className='link' >Contact</Link>
    
  </div>
);
}
export default Navigation;

