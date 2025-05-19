import React from 'react';
import Onlycheese from '../assets/images/Onlycheese.jpg';
import GroupProject1 from '../assets/images/groupproject.jpg';
import TechQik from '../assets/images/techqik.jpg';
import WorkDay from '../assets/images/workday.jpg';
import Inked from '../assets/images/Inkedin.jpg';
import WeatherDash from '../assets/images/weatherdash.jpg';
import NoteTaker from '../assets/images/NoteTaker.jpg';
import Portfolio from '../assets/images/Portfolio.jpg';

function Projects() {
  return (
    <div className="bodyheaders" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
      <section id="Projects">
        <h1>Portfolio</h1>
        

        <div className="card-container row row-cols-1 row-cols-sm-2 g-3">
          
        <div className="col">
            <div className="card cardborder">
              <a href="https://github.com/AJoelj84/ReactPortfolioAJ" alt="Portfolio Link" style={{ textDecoration: 'none' }}>
                <img src={Portfolio} className="card-img-top" alt="card-grid" />
              </a>
                <div className="card-body">
                  <h5 className="card-title"><br></br>Portfolio Code<br></br><br></br></h5>
                  <p className="card-text">Here you can view the code and screenshots over time of the development of My Personal Portfolio.  
                  <br></br><br></br>
                    Code Repository  <a href="https://github.com/AJoelj84/ReactPortfolioAJ">Here</a>.
                  </p>
                </div>
              </div> 
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }} className="d-block">
                  <img src={Onlycheese} className="card-img-top" alt="card-grid" />
                </a>
                  <div className="card-body">
                    <h5 className="card-title">Only Cheese UNC Group Project #2</h5>
                    <p className="card-text">
                      In this Project, I designed our wireframe and laid the early framework of the site.<br></br>
                      As well I helped set up the Users Profile Card Pages, and the final styling of the site.<br></br>
                      My Biggest Achievement for this project is the creation of a seperate Socket.io chat room.<br></br><br></br>
                      Code Repository for the Main Site <a href="https://github.com/eileenmh/only-cheese">Here</a>.<br></br><br></br>
                      Code Repository for the Chat Room <a href="https://github.com/AJoelj84/onlycheesechatserver">Here</a>.<br></br>
                    </p>
                  </div>
              </div> 
          </div>

          <div className="col">
            <div className="card cardborder">
              <a href="https://brandon5667.github.io/peak-fitness/" alt="First Group Project Link" style={{ textDecoration: 'none' }}>
                <img src={GroupProject1} className="card-img-top" alt="card-grid" />
              </a>
                <div className="card-body">
                  <h5 className="card-title">Peak Fitness UNC Group Project #1</h5>
                  <p className="card-text">In the first Group Project of my class, we built a site that uses the user's entered location to give them
                    the day's weather forecast and a List of the Local Biking Trails. In this Project, I assisted with the styling choices
                    and setting up the API calls.<br></br><br></br>
                    Code Repository  <a href="https://github.com/Brandon5667/peak-fitness">Here</a>.
                  </p>
                </div>
              </div> 
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://techqik-ccaa5c6abf81.herokuapp.com/" alt="Tech blog Project" style={{ textDecoration: 'none' }}>
                  <img src={TechQik} className="card-img-top" alt="card-grid" />
                </a>
                  <div className="card-body">
                    <h5 className="card-title">TechQik TechBlog Project</h5>
                    <p className="card-text">
                      In this Tech Blog Model View Controller Project, I built my take on a Tech Blog, TechQik<br></br><br></br>
                      Code Repository <a href="https://github.com/AJoelj84/TechBlogMVC">Here</a>.
                    </p>
                </div>
              </div>
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://inkedin-ef5cc989f602.herokuapp.com/" alt="InkedIn" style={{ textDecoration: 'none' }}>
                  <img src={Inked} className="card-img-top" alt="card-grid" />
                </a>
                  <div className="card-body">
                    <h5 className="card-title">InkedIn UNC Group Project #3</h5>
                    <p className="card-text">
                      In This Final project my group used all the skills we had acquired in Full Stack Bootcamp, <br></br>
                      My part in this was the React Routing, and Page Styling.<br></br><br></br>
                      Code Repository <a href="https://github.com/bnadel4/inkedin">Here</a>.
                    </p>
                </div>
              </div>
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://ajoelj84.github.io/Scheduler/" alt="InkedIn" style={{ textDecoration: 'none' }}>
                  <img src={WorkDay} className="card-img-top" alt="card-grid" />
                </a>
                  <div className="card-body">
                    <h5 className="card-title">Work Day Scheduler</h5>
                    <p className="card-text">
                      A Simple Work Day Scheduling Project, using client side storage, and DayJS.<br></br><br></br>
                      Code Repository <a href="https://github.com/AJoelj84/Scheduler">Here</a>.
                    </p>
                </div>
              </div>
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://ajoelj84-notetaker.herokuapp.com/" alt="InkedIn" style={{ textDecoration: 'none' }}>
                  <img src={NoteTaker} className="card-img-top" alt="card-grid" />
                </a>
                  <div className="card-body">
                    <h5 className="card-title">Note Taker Project</h5>
                    <p className="card-text">
                      A Simple note taking app, Allowing a user to write and delete notes, using client side storage.<br></br><br></br>
                      Code Repository <a href="https://github.com/AJoelj84/NoteTaker">Here</a>.
                    </p>
                </div>
              </div>
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://ajoelj84.github.io/WeatherDashboard/" alt="Weather Dashboard Project" style={{ textDecoration: 'none' }}>
                  <img src={WeatherDash} className="card-img-top" alt="card-grid" />
                </a>
                  <div className="card-body">
                    <h5 className="card-title">Weather Dashboard Project</h5>
                    <p className="card-text">
                      In this Weather Dashboard Project, I used API calls to display to the User the current Day's forecast and combined with DayJS
                      present the User with a Five Day Forecast as well.<br></br><br></br>
                      Code Repository <a href="https://github.com/AJoelj84/WeatherDashboard">Here</a>.
                    </p>
                </div>
              </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Projects;

