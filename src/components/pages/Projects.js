import React from 'react';
import Onlycheese from '../assets/images/Onlycheese.jpg';
import GroupProject1 from '../assets/images/groupproject.jpg';
import TechQik from '../assets/images/techqik.jpg';
import WorkDay from '../assets/images/workday.jpg';
import BookSearch from '../assets/images/booksearch.jpg';
import WeatherDash from '../assets/images/weatherdash.jpg';

function Projects() {
  return (
    <div className="bodyheaders" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
      <section id="Projects">
        <h1>Portfolio</h1>

        <div className="card-container row row-cols-1 row-cols-sm-2 g-3">
          <div className="col row-cols-1 row-cols-sm-2 g-3">
            <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src={Onlycheese} className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Group Project #2</h5>
                  <p className="card-text">In this Project, I designed our wireframe and then helped lay the early framework of the site.
                    After that, I built a full separate server for a socket.io chat room integrated into our site.
                    Finally, I helped set up our Users Profile Card Pages.</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col">
            <a href="https://brandon5667.github.io/peak-fitness/" alt="First Group Project Link" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src={GroupProject1} className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Group Project #1</h5>
                  <p className="card-text">In the first Group Project of my class, we built a site that uses the user's entered location to give them
                    the day's weather forecast and a List of the Local Biking Trails. In this Project, I assisted with the styling choices
                    and setting up the API calls.</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col">
            <a href="https://techqik-ccaa5c6abf81.herokuapp.com/" alt="Tech blog Project" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src={TechQik} className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">TechQik TechBlog Project</h5>
                  <p className="card-text">In this Tech Blog Model View Controller Project, I built my take on a Tech Blog, TechQik</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col">
            <a href="https://ajoelj84.github.io/WeatherDashboard/" alt="Weather Dashboard Project" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src={WeatherDash} className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard Project</h5>
                  <p className="card-text">In this Weather Dashboard Project, I used API calls to display to the User the current Day's forecast and combined with DayJS
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

