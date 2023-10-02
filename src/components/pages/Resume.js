import React from 'react';
import ResumePDF from '../assets/images/Resume.pdf';
import ResumePic from '../assets/images/resume.jpg';


const Resume = () => {
  const googleDocsDirectUrl =
    'https://docs.google.com/document/d/e/2PACX-1vQPhsNGiqls9QcJyDic73OK12Rgjuk1AS6dko26RldNYSE4uaCsq1a4rkky6j4hXUbzb7_GK4InHnS4/pub';

  return (
    <div className="container text-center mt-5">
      <h2 className='bodyheaders' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>My Resume</h2>
        <div>
          <iframe title="Resume" src={`${ResumePDF}#toolbar=0`} className='resume' width="828" height="1070">
            <p>It appears your browser does not support embedded PDFs.</p>
          </iframe>
          
          <img src={ResumePic} alt="resume picture" className="resumepic" style={{ width: '500px', height: 'auto' }} />
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
