import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
                <h1>Kuber E-bikes is one of India’s leading electric two-wheeler manufacturer. Our goal is to build a better, cleaner and greener future for the generations to come.</h1>
                <p> </p>
                  <button>READ MORE</button>
            </div>
            
        </div>
    )
}

export default About;
