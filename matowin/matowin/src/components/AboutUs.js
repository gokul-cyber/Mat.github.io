import React from 'react';
import About from "../assets/images/about.png";
import "../assets/css/AboutUs.css";

const AboutUs = () => {
  return (
    <div id='about' className='matowin_about_us'>
      <div className='about_us'>
        <img src={About} alt='about_us' />
      </div>

      <div className='about_us_desc'>
        <h1>About <span className='us_style'>Us</span></h1>
        <p>Matowin Techniques is a firm established in February
        2016 situated in Shimoga, Karnataka & the place is well
        known for various foundries and which give a great
        advantage to us in taking up various projects from
        casting to finishing.
        We are the customer-centric manufacturing unit offers
        a wide variety of solutions like precisions
        manufacturing, new product development & casting
        process in a cost-effective way.
        We are the group of expertise people having a strong
        background in Manufacturing, Research and
        Development and knowledge of Auto-Components
        and also service and maintenance of all conventional
        and CNC Machines</p>
      </div>
    </div>
  )
}

export default AboutUs
