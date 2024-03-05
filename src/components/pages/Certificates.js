import React from 'react';
import DataAnalysis from '../assets/images/dataanalysis.jpg';
import Codio from '../assets/images/codioc++.jpg';
import RITtableau from '../assets/images/RITtableau.jpg';
import Bootcamp from '../assets/images/UNCBootcamp.jpg';

function Certificates(){
    return(
        <section>
        <h1 className='certheader'>Professional Certificates</h1>

        <div className="card-container row row-cols-1 row-cols-sm-2 g-3">

        <div className="col">
              <div className="card certificate">
                  <img src={Bootcamp} className="card-img-top" alt="card-grid-image" />
              </div> 
          </div>


          <div className="col">
              <div className="card codiocertificate">
                  <img src={Codio} className="card-img-top" alt="card-grid-image" />
              </div> 
          </div>


          <div className="col">
              <div className="card certificate">
                  <img src={DataAnalysis} className="card-img-top" alt="card-grid-image" />
              </div> 
          </div>


          <div className="col">
              <div className="card certificate">
                  <img src={RITtableau} className="card-img-top" alt="card-grid-image" />
              </div> 
          </div>

        </div>
</section>
    );
}


export default Certificates;