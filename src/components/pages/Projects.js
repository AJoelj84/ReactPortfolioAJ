import React from 'react';

function Projects() {
  return (
    <div class = 'bodyheaders'>
    <section id="Projects">
      <h1>Projects</h1>

      <section className="primarylink">
        <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2">
          <img src="./assets/img/Onlycheese.jpg" alt="Group Project 2" width="500" height="500" />
        </a>
        <p className="linktext">Group Project 2</p>
      </section>

      <section className="linksections">
        <a href="https://brandon5667.github.io/peak-fitness/" alt="First Group Project Link">
          <img src="./assets/img/groupproject.jpg" alt="Group Project 1" width="500" height="500" />
        </a>
        <p className="linktext">Group Project 1</p>
      </section>

      <section className="linksections">
        <a href="https://github.com/AJoelj84/Horiseon-Optimization" alt="HTML Image">
          <img src="./assets/img/html.jpg" alt="HTML Image" width="500" height="500" />
        </a>
        <p className="linktext">HTML/CSS</p>
      </section>

      <section className="linksections">
        <a href="./pages/placeholder.html" alt="Placeholder Page">
          <img src="./assets/img/keyboard.jpeg" alt="Keyboard Image" width="500" height="500" />
        </a>
        <p className="linktext">Place Holder 1</p>
      </section>

      <section className="linksections">
        <a href="./pages/placeholder.html" alt="Placeholder Page">
          <img src="./assets/img/keyboard.jpeg" alt="Keyboard Image" width="500" height="500" />
        </a>
        <p className="linktext">Place Holder 2</p>
      </section>
    </section>
    </div>
  );
}

export default Projects;
