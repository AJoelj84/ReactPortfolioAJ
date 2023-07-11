import React from 'react';

function Footer() {
  return (
    <footer style={{fontFamily: 'Josefin Sans, sans-serif'}} className="footer">
      <div className="background">
        <div className="app-wrapper">
          <div className="social-links">
            <p className = 'footlink'>More Links </p>
            <a href="mailto:ajoelj84@gmail.com">Email</a>
            <a href="https://github.com/your-github-profile">GitHub</a>
            <a href="https://www.linkedin.com/in/adam-undefined-569184283/">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
