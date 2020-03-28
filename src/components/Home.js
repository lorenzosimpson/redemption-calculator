import React from 'react';
import woman from '../images/people.jpg';


function Home(props) {
    return (
        <div className='home-container'>
            <div className='left'>
                <div className='banner-text'>
                    <p id='tagline'><span className='title-emp'>Miles</span> or <span className='title-emp'>money </span> 
                   for that ticket?
                    </p>
                    <p id='let-us-help'>We'll help you choose.</p>
                    <a href='#airlines'><button>Get Started</button></a>
                </div>
            </div>
            <div className='right'>
                <img id='people' alt='people holding ticket sign' 
                src={woman}></img>    
                <a className='attr' href="https://www.vecteezy.com/free-vector/flight-attendant">Flight Attendant Vectors by Vecteezy</a>
            </div>      
            
        </div>
    );
}

export default Home;