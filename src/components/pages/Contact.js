import React from 'react';

function Contact() {
  return (
    <div>

      <h1 class = 'bodyheaders' style={{fontFamily: 'Josefin Sans, sans-serif'}}>Contact Me</h1> 

        <section>
          <p style={{fontFamily: 'Josefin Sans, sans-serif'}} class= 'links'><a className='contact-link' href="mailto:ajoelj84@gmail.com">Email</a></p>  
          <p style={{fontFamily: 'Josefin Sans, sans-serif'}} class= 'links'><a className='contact-link' href="https://github.com/AJoelj84">GitHub</a></p>
        </section>

    </div>
  );
}

export default Contact;