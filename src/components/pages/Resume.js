import React from 'react';
import html2pdf from 'html2pdf.js';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.resumeRef = React.createRef();
  }

  handleDownload = () => {
    const element = this.resumeRef.current; // Get the HTML element to be converted

    const options = {
      margin: 10, // Specify the margins for the PDF
      filename: 'adamjohnsonresume.pdf', // Set the filename for the downloaded PDF
      image: { type: 'jpeg', quality: 0.98 }, // Set the image format and quality
      html2canvas: { scale: 2 }, // Set the scaling factor for better quality
      jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }, // Set the PDF format and orientation
    };

    html2pdf().set(options).from(element).save(); // Generate and save the PDF
  };
  render() {

  return (
    <div class = 'bodyheaders'>
      <h1>Resume</h1>

      <button class = 'pdfbutton' onClick={this.handleDownload}>Download PDF</button>

      <div ref={this.resumeRef}>
      <section style={{fontFamily: 'Josefin Sans, sans-serif', color: 'black'}}>

            <p class='resumeheader'>Adam Johnson - 22 Curtis Dr. Waynesville NC, 28786 - 828.399.1559 - ajoelj84@gmail.com</p>

                    <p class='resumesecond'>Coding Proficencies</p>
                        <br></br>
                        <p>Full Stack Development</p>
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
    </div>
  );
}
}
export default Resume;
