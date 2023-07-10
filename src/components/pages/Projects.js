import React from 'react';
import Onlycheese from '../assets/images/Onlycheese.jpg';
import GroupProject1 from '../assets/images/groupproject.jpg';
import TechQik from '../assets/images/techqik.jpg';
import WorkDay from '../assets/images/workday.jpg';
import BookSearch from '../assets/images/booksearch.jpg';
import WeatherDash from '../assets/images/weatherdash.jpg';



function Projects() {
  return (
    <div class = 'bodyheaders'>
    <section id="Projects">
      <h1>Portfolio</h1>

  <div class="card-container row row-cols-1 row-cols-sm-2 g-3">
    <div class="col">
      <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }}>
        <div class="card">
          <img src={Onlycheese} class="card-img-top" alt="card-grid-image"/>
          <div class="card-body">
          <h5 class="card-title">Group Project #2</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
      </a>
  </div>


  <div class="col">
  <a href="https://brandon5667.github.io/peak-fitness/" alt="First Group Project Link" style={{ textDecoration: 'none' }}>
    <div class="card">
      <img src={GroupProject1}  class="card-img-top" alt="card-grid-image"/>
      <div class="card-body">
        <h5 class="card-title">Group Project #1</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </a>
  </div>


  <div class="col">
  <a href="https://techqik-ccaa5c6abf81.herokuapp.com/" alt="Tech blog Project" style={{ textDecoration: 'none' }}>
    <div class="card">
      <img src={TechQik} class="card-img-top" alt="card-grid-image"/>
      <div class="card-body">
        <h5 class="card-title">TechQik TechBlog Project</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    </a>
  </div>

  
  <div class="col">
  <a href="https://ajoelj84.github.io/WeatherDashboard/" alt="Weather Dashboard Project" style={{ textDecoration: 'none' }}>
    <div class="card">
      <img src={WeatherDash} class="card-img-top" alt="card-grid-image"/>
      <div class="card-body">
        <h5 class="card-title">Weather Dashboard Project</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </a>  
  </div>
</div>








    
    </section>
    </div>
  );
}

export default Projects;
