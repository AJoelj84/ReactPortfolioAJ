import React from 'react';
import credlyImage from '../assets/images/credly.png';

function Footer() {
  return (
    <footer style={{fontFamily: 'Josefin Sans, sans-serif'}} className="footer">
      <div className="background">
        <div>
          <div className="social-links">
            <p className = 'footlink'>More Links</p>   
            <a href="mailto:ajoelj84@gmail.com">Email</a>
            <a href="https://github.com/AJoelj84">GitHub</a>
            <a href="https://linkedin.com/in/adam-johnson-569184283">LinkedIn</a>
          </div>
              <div className="credly-image">
                <img src={credlyImage} alt="UNC Credly logo" />
              </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
