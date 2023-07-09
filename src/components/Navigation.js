import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Navigation() {
  return (
    <Dropdown style={{ float: 'right', paddingRight: '40px' }}>
      <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
        Navigation
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
        <Dropdown.Item as={Link} to="/about">About</Dropdown.Item>
        <Dropdown.Item as={Link} to="/projects">Projects</Dropdown.Item>
        <Dropdown.Item as={Link} to="/contact">Contact</Dropdown.Item>
        <Dropdown.Item as={Link} to="/resume">Resume</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Navigation;

