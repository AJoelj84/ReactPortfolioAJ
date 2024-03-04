import React from 'react';
import DataAnalysis from '../assets/images/dataanalysis.jpg';
import Codio from '../assets/images/codioc++.jpg';
import RITtableau from '../assets/images/RITtableau.jpg';
import Bootcamp from '../assets/images/UNCBootcamp.jpg';

function Certificates(){
    return(
        <section id="Projects">
        <h1>Portfolio</h1>

        <div className="card-container row row-cols-1 row-cols-sm-2 g-3">


          <div className="col">
              <div className="card cardborder">
                <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }} className="d-block">
                  <img src={DataAnalysis} className="card-img-top" alt="card-grid-image" />
                </a>
                  <div className="card-body">
                    <p className="card-text">
                     Placeholder text<br></br><br></br> 
                    </p>
                  </div>
              </div> 
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }} className="d-block">
                  <img src={Codio} className="card-img-top" alt="card-grid-image" />
                </a>
                  <div className="card-body">
                    <p className="card-text">
                     Placeholder text<br></br><br></br> 
                    </p>
                  </div>
              </div> 
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }} className="d-block">
                  <img src={DataAnalysis} className="card-img-top" alt="card-grid-image" />
                </a>
                  <div className="card-body">
                    <p className="card-text">
                     Placeholder text<br></br><br></br> 
                    </p>
                  </div>
              </div> 
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }} className="d-block">
                  <img src={RITtableau} className="card-img-top" alt="card-grid-image" />
                </a>
                  <div className="card-body">
                    <p className="card-text">
                     Placeholder text<br></br><br></br> 
                    </p>
                  </div>
              </div> 
          </div>

          <div className="col">
              <div className="card cardborder">
                <a href="https://only-cheese.herokuapp.com/" alt="Group Project 2" style={{ textDecoration: 'none' }} className="d-block">
                  <img src={Bootcamp} className="card-img-top" alt="card-grid-image" />
                </a>
                  <div className="card-body">
                    <p className="card-text">
                     Placeholder text<br></br><br></br> 
                    </p>
                  </div>
              </div> 
          </div>
          </div>
</section>
    );
}


export default Certificates;