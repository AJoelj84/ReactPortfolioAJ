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
          <p class="card-text">In this Project I designed our wireframe and then helped lay the early framework of the site. 
                               After that I built a full separate server for a socket.io chat room integrated into our site.  
                               Finally I helped setup our Users Profile Card Pages. </p>
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
        <p class="card-text">In the first Group Project of my class, we built a site that uses the users entered location to give them
                             the days weather forecast, and a List of the Local Biking Trails.  In this Project I assisted with the styling choices
                             and setting up the API calls.</p>
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
        <p class="card-text">In this Tech Blog Model View Controller Project I built my take on a Tech Blog, TechQik</p>
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
        <p class="card-text">In this Weather Dashboard Project, I used API calls to display to the User the current Days forecast and combined with DayJS
                             present the User with a Five Day Forecast as well.</p>
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
