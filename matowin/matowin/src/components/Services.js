import React from 'react';
import "../assets/css/Services.css";
import { MdCameraRoll,MdOutlineLocationCity } from "react-icons/md";
import { GiCardboardBoxClosed } from "react-icons/gi"

const Services = () => {
  return (
    <div id='services' className='matowin_services'>
        <h1><span className='service'>O</span>ur <span className='service'>S</span>ervices</h1>
        <div className='matowin_series'> 
            <div className='services_heading'>
               <MdCameraRoll size={40} /> 
            </div>
            <div className='services_desc'>
            <h2>Casting</h2>
            <p>We have associated with various foundries like SG Iron, Cast Iron, Alloy Steels, Investment Castings, and Aluminium Castings.</p>
            </div>
        </div>
        <div className='matowin_series'>
            <div className='services_heading'>
                <MdOutlineLocationCity size={40} />
            </div>
            <div className='services_desc'>
            <h2>CAD/CAN</h2>
            <p>Converting CAD model to actual product latest industrial requirements</p>
            </div>
        </div>
        <div className='matowin_series'>
            <div className='services_heading'>
                <GiCardboardBoxClosed size={40} />
            </div>
            <div className='services_desc'>
                <h2>CNC</h2>
                <p>Highly skilled & trained operators handling the various CNC machinery under the guidelines of expert supervisors to serve & to fulfill our client's 
                    {/* requirements 24X7
                Our Brand: Shackle pins, Bushes, Cotter pins, */}
                Sleeves, Washers.</p>
            </div>
        </div>
    </div>
  )
}

export default Services
