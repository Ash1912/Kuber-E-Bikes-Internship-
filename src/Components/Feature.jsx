import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.jpeg';
import fimage2 from '../images/2.jpeg';
import fimage3 from '../images/3.jpeg';
import fimage4 from '../images/4.jpeg';

function Feature() {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Featurebox image={fimage1} title="ECO FRIENDLY"/>
                <Featurebox image={fimage2} title="LOW MAINTENANCE"/>
                <Featurebox image={fimage3} title="NO LICENSE"/>
                <Featurebox image={fimage4} title="NO REGISTRATION"/>
                </div> 
            
        </div>
    )
}

export default Feature;
