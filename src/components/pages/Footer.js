import React from 'react';

function Footer() {
  return (
    <footer style={{fontFamily: 'Josefin Sans, sans-serif'}} className="footer">
      <div className="background">
        <div className="app-wrapper">
          <div className="social-links">
            <p className = 'footlink'>More Links </p>
            <a href="mailto:your-email@example.com">Email</a>
            <a href="https://github.com/your-github-profile">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
