import React from 'react';

function Footer() {
  return (
    <footer style={{fontFamily: 'Josefin Sans, sans-serif'}} className="footer">
      <div className="background">
        <div className="app-wrapper">
          <div className="social-links">
            <p className = 'footlink'>More Links </p>
            <a href="mailto:ajoelj84@gmail.com">Email</a>
            <a href="https://github.com/AJoelj84">GitHub</a>
            <a href="https://linkedin.com/in/adam-johnson-569184283">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
