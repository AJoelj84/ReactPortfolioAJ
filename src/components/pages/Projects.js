import React from 'react';
import Onlycheese from '../assets/images/Onlycheese.jpg';
import GroupProject1 from '../assets/images/groupproject.jpg';
import HTML from '../assets/images/html.jpg'
import PLACEHOLDER from '../assets/images/keyboard.jpeg';


function Projects() {
  return (
    <div class = 'bodyheaders'>
    <section id="Projects">
      <h1>Portfolio</h1>

      <p className="linktext">Group Project 2</p>
        <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2">
          <img src= {Onlycheese} alt="Group Project 2" width="900" height="500" />
        </a>
    

        <p className="linktext">Group Project 1</p>
        <a href="https://brandon5667.github.io/peak-fitness/" alt="First Group Project Link">
          <img src= {GroupProject1} alt="Group Project 1" width="900" height="500" />
        </a>
        
      

        <p className="linktext">HTML/CSS</p>
        <a href="https://github.com/AJoelj84/Horiseon-Optimization" alt="HTML Image">
          <img src= {HTML} alt="HTML Image" width="800" height="500" />
        </a>
        
      

        <p className="linktext">Place Holder 1</p>
        <a href="./pages/placeholder.html" alt="Placeholder Page">
          <img src= {PLACEHOLDER} alt="Keyboard Image" width="900" height="500" />
        </a>
        
    

        <p className="linktext">Place Holder 2</p>
        <a href="./pages/placeholder.html" alt="Placeholder Page">
          <img src= {PLACEHOLDER} alt="Keyboard Image" width="900" height="500" />
        </a>
        
    
    </section>
    </div>
  );
}

export default Projects;
