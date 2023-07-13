import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

class Resume extends React.Component {
  render() {
    const ResumePDF = () => (
      <Document>
        <Page>
          <Text>Adam Johnson - 22 Curtis Dr. Waynesville NC, 28786 - 828.399.1559 - ajoelj84@gmail.com</Text>
          <Text>Coding Proficencies</Text>
          <Text>MERN Fullstack Development</Text>
          <Text>HTML, CSS, JavaScript, jQuery, Bootstrap, PWAs, React,</Text>
          <Text>Heroku Deployment, Git, MySQL, MongoDB, Apollo and GraphQL, Node, Express</Text>

          <Text>Employment History</Text>

          <Text>Locomotive Engineer\Conductor</Text>
          <Text>Blue Ridge Southern Railroad</Text>
          <Text>May 2015- Present</Text>
          <Text>Handle Logistics of product Delivery and Train Consist building as Conductor</Text>
          <Text>Locomotive Operation, and Basic Maintanence</Text>

          <Text>Installer Service Specialist</Text>
          <Text>O'reilly Auto Parts, Waynesville NC</Text>
          <Text>March 2013 – May2015</Text>
          <Text>Manage Commercial Accounts, Operation of Sales System</Text>
          <Text>Logistics of Parts Aquirement and Delivery</Text>

          <Text>Owner/Partner</Text>
          <Text>MP Motorsports, Sylva NC</Text>
          <Text>April 2009 – March 2013</Text>
          <Text>Daily Operation, Repairing Automobiles, and Fabrication</Text>

          <Text>Meat cutter</Text>
          <Text>Ryan’s  Steakhouse, Sylva, NC</Text>
          <Text>May 2005 – April 2010</Text>
          <Text>Preparation, and Rotation of Food Stock</Text>

          <Text>General Laborer</Text>
          <Text>LITO Lumber, Cullowhee, NC</Text>
          <Text>October 2006 – August 2008</Text>
          <Text>Operating Sawmill, Logging, and Production Equipment</Text>
          <Text>Construction of Cabinets, Flooring, and other Wood Products</Text>

          <Text>Education</Text>
          <Text>Smoky Mountain High School, Sylva NC</Text>
          <Text>Southwestern Community College, Sylva NC</Text>
          <Text>Previously ASE certified</Text>
          <Text>Timken Tech Certified</Text>
          <Text>Airtex Fuel Delivery Systems Certified</Text>
          <Text>UNC Coding Bootcamp</Text>

          <Text>Skills</Text>
          <Text>Computer Proficient (Windows OS, Data Entry, Full Stack Development)</Text>
          <Text>Mechanical (Repair, Rebuild, and Modification)</Text>
          <Text>Experience in Outdoor Working Environments</Text>
          <Text>Communication, and Teamwork Skills built from Retail Environment</Text>
        </Page>
      </Document>
    );

    return (
      <div className="bodyheaders">
        <h1>Resume</h1>
        <PDFDownloadLink document={<ResumePDF />} fileName="adamjohnsonresume.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : <button className="pdfbutton">Download PDF</button>
          }
        </PDFDownloadLink>
        <section style={{fontFamily: 'Josefin Sans, sans-serif', color: 'black'}}>

            <p class='resumeheader'>Adam Johnson - 22 Curtis Dr. Waynesville NC, 28786 - 828.399.1559 - ajoelj84@gmail.com</p>

                    <p class='resumesecond'>Coding Proficencies</p>
                        <br></br>
                        <p>MERN Fullstack Development<br></br><br></br>HTML, CSS, JavaScript, jQuery, Bootstrap, PWAs, React, <br></br><br></br>Heroku Deployment, Git, MySQL, MongoDB, Apollo and GraphQL, Node, Express</p>
                    <p class='resumesecond'>Employment History</p>
                        <br></br>

                    <p class='resumeheader'>Locomotive Engineer\Conductor</p>
                        <p>Blue Ridge Southern Railroad</p>
                        <p>May 2015- Present</p>
                        <p>Handle Logistics of product Delivery and Train Consist building as Conductor</p>
                        <p>Locomotive Operation, and Basic Maintanence</p>
            
                    <p class='resumeheader'>Installer Service Specialist</p>
                        <p>O'reilly Auto Parts, Waynesville NC</p>
                        <p>March 2013 – May2015</p>
                        <p>Manage Commercial Accounts, Operation of Sales System</p>
                        <p>Logistics of Parts Aquirement and Delivery</p>
                        
                    <p class='resumeheader'>Owner/Partner</p>
                        <p>MP Motorsports, Sylva NC</p>
                        <p>April 2009 – March 2013</p>
                        <p>Daily Operation, Repairing Automobiles, and Fabrication</p>
                
                    <p class='resumeheader'>Meat cutter</p>
                        <p>Ryan’s  Steakhouse, Sylva, NC</p>
                        <p>May 2005 – April 2010</p>
                        <p>Preparation, and Rotation of Food Stock</p>
                
                    <p class='resumeheader'>General Laborer</p>
                        <p>LITO Lumber, Cullowhee, NC</p>
                        <p>October 2006 – August 2008</p>
                        <p>Operating Sawmill, Logging, and Production Equipment</p>
                        <p>Construction of Cabinets, Flooring, and other Wood Products</p>
                        <br></br>
                        <br></br>                      
                    <p class='resumesecond'>Education</p>
                        <p>Smoky Mountain High School, Sylva NC</p>	
                        <p>Southwestern Community College, Sylva NC</p>
                        <p>Previously ASE certified</p>
                        <p>Timken Tech Certified</p>
                        <p>Airtex Fuel Delivery Systems Certified</p>
                        <p>UNC Coding Bootcamp</p>
                        
                    

                    <p class='resumesecond'>Skills</p>
                        <p>Computer Proficient (Windows OS, Data Entry, Full Stack Development)</p>	
                        <p>Mechanical (Repair, Rebuild, and Modification)</p>
                        <p>Experience in Outdoor Working Enviroments</p>
                        <p>Communication, and Teamwork Skills built from Retail Enviroment</p>
              
        </section>
      </div>
    );
  }
}

export default Resume;
