import React from 'react';
import ResumePDF from '../assets/images/Resume.pdf';
import ResumePic from '../assets/images/resume.jpg';


const Resume = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className='bodyheaders' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>My Resume</h2>
        <div>
          <iframe title="Resume" src={`${ResumePDF}#toolbar=0`} className='resume' width="828" height="1070">
            <p>It appears your browser does not support embedded PDFs.</p>
          </iframe>
          
          <img src={ResumePic} alt="resume" className="resumepic" style={{ width: '500px', height: 'auto' }} />
        </div>

        <a href="https://docs.google.com/document/d/10bE77cH4oykhptmwuTtSoOhOWXE2e1utqrl6SY9eskE/export?format=pdf" target="_blank" rel="noopener noreferrer">
          <div className='resumesecond'>
          Download Resume (PDF)
          </div>
        </a>
    </div>
  );
};

export default Resume;
