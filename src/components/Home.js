import React from 'react';
import home from '../images/home.svg';


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
                <img id='home-img' alt='woman looking at travel site' 
                src={home}></img> 
            </div>      
            
        </div>
    );
}

export default Home;