import React from 'react';
import html2pdf from 'html2pdf.js';

function Resume() {
  const handleDownload = () => {
    const element = document.getElementById('resume-content'); // Get the HTML element to be converted

    html2pdf().from(element).save(); // Generate and save the PDF
  };

  return (
    <div class = 'bodyheaders'>
      <h1>Resume</h1>

      <button class = 'pdfbutton' onClick={handleDownload}>Download PDF</button>

      <div>
      <section style={{fontFamily: 'Josefin Sans, sans-serif'}}>

            <p>Adam Johnson</p>
            <p>22 Curtis Dr. Waynesville NC, 28786 - 828.399.1559 - ajoelj84@gmail.com</p>
                
                <p>Experience</p>
            
            

                    <p>Locomotive Engineer\Conductor</p>
                        <p>Blue Ridge Southern Railroad</p>
                        <p>May 2015- Present</p>
                        <p>Handle Customer Ordering of Freight</p>
                        <p>Build Train Consist as a Conductor</p>
                        <p>Operate and “Drive” Locomotives</p>
            
                    <p>Installer Service Specialist</p>
                        <p>O'reilly Auto Parts, Waynesville NC</p>
                        <p>March 2013 – May2015</p>
                        <p>Manage Commercial Shop Accounts</p>
                        <p>Operating Sales System and Handling Currency</p>
                        <p>Coordination and Location of Parts outside of/or  not  Handled by O'reilly's</p>
                        
                        <p>Owner/Partner</p>
                        <p>MP Motorsports, Sylva NC</p>
                        <p>April 2009 – March 2013</p>
                        <p>Operate Business,  Handle  Customers and Scheduling</p>
                        <p>Repairing Automobiles and Fabrication</p>
                
                
                
                    <p>Meat cutter</p>
                        <p>Ryan’s  Steakhouse, Sylva, NC</p>
                        <p>May 2005 – April 2009</p>
                        <p>Prepare and Handle Meats</p>
                        <p>Rotation of Stock and food prep</p>
                
                    <p>General Laborer</p>
                        <p>LITO Lumber, Cullowhee, NC</p>
                        <p>October 2006 – August 2008</p>
                        <p>Operation Of Sawmill and Logging Equipment</p>
                        <p>Construction of Cabinets, Flooring, and other Wood Products</p>
                                        

                    <p>Education</p>	
                        <p> Automotive Training-2008</p>
                        <p>Southwestern Community College, Sylva , NC</p>
                        <p>Previously ASE certified</p>
                        <p>Timken Tech Certified</p>
                        <p>Airtex Fuel Delivery Systems Certified</p>
            
            
                    <p>Smoky Mountain High School</p>
                        <p>Graduated 2002</p>

                    <p>Skills</p>	
                        <p>Mechanical (Repair, Rebuild, and Modification)</p>
                        <p>Computer Proficient (Windows OS, Data Entry)</p>
                        <p>Experience in Outdoor Working Enviroments</p>
                        <p>Communication, and Teamwork Skills built from Retail Enviroment</p>
              

        </section>
      </div>
      
    </div>
  );
}

export default Resume;
