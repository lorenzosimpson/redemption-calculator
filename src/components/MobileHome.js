import React from 'react';
import people from '../images/people.jpg';

function MobileHome(props) {
    return (
        <div className='mbl-home-container'>
            <div className='top'>
                <div className='banner-text'>
                    <p id='tagline'><span className='title-emp'>Miles</span> or <span className='title-emp'>money </span> 
                   for that ticket?
                    </p>

                    <div className='bottom'>
                <img id='people' alt='people holding ticket sign' 
                src={people}></img>    
                <a className='attr' href="https://www.vecteezy.com/free-vector/flight-attendant">Flight Attendant Vectors by Vecteezy</a>
            </div>
            
                    <p id='let-us-help'>We'll help you choose.</p>
                    <a href='#airlines'><button>Get Started</button></a>
                </div>
            </div>    
            
        </div>
    );
}
 

 export default MobileHome;