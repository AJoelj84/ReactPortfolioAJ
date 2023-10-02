import React from 'react';
import ProfilePic from '../assets/images/profilepicture.jpg';

function About() {
  return (
    <div>
      <h1 className='bodyheaders' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>About Me</h1>
      <section style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='bodytext'>
        <div className="row">
          <div className="col-md-6 order-md-2 text-center">
            <img src={ProfilePic} alt="Adam Johnson Profile Picture" className="profilepic" style={{ width: '500px', height: 'auto' }} />
          </div>
          <div className="col-md-6 order-md-1">
            <div style={{ marginLeft: '80px', marginRight: 'auto' }}>
              <p>
                Hello! My name is Adam Johnson. I live in the beautiful Smokey Mountains of North Carolina 
                with my wife and two wild little boys. I have professional experience in multiple industries 
                the most experience being an Automotive Mechanic 10 years and Locomotive Engineering for the past 8 years.<br></br>
                <br></br> 
                I enjoy spending time with my Family, Fishing, Gardening, Woodworking, Blacksmithing, 3D Printing and any kind of craft/trade that involves 
                a learned skill and using my hands.
                <br></br>
                <br></br>
                In the past I have dabbled with HTML, CSS, Java, and C++ taking classes in Highschool and Early parts of College which led me to  
                 recently decide to pursue new opportunities with the UNC Coding Boot Camp. 
                I have a love for computers and an understanding of different levels of industry that spans at least twenty years. 
              </p>
              <p>
              <br></br>
                Please feel free to review my portfolio and reach out to me if you have any questions or would like to discuss a project. 
                I look forward to working with you!
              </p>
              <img src={ProfilePic} alt="Adam Johnson Profile Picture" className="mobileprofile" style={{ width: '500px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;