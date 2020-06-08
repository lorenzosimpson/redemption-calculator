import React from 'react';
import about from '../images/about.svg'

function About(props) {
    return (
        <div className='about-container'>
            <p id='about-header'>How it works</p>
            <div className='about-content'>
            <div className='about-left'>
                <div className='step'>
                    <p className='step-title'>1. Tell us your airline</p>
                    <p className='step-desc'>We'll see how much that airline's miles are worth.</p>
                </div>

                <div className='step'>
                    <p className='step-title'>2. Tell us the price in miles</p>
                    <p className='step-desc'>Check the airline's award calendar</p>
                </div>

                <div className='step'>
                    <p className='step-title'>3. Tell us the price in cash</p>
                    <p className='step-desc'>The fare you'd pay to buy the ticket normally</p>
                </div>

                <div className='step'>
                    <p className='step-title'>That's it!</p>
                    <p className='step-desc'>We'll tell you if it's a better deal to use your miles or to save your miles and use cash for this redemption.</p>
                </div>

            </div>

            <div className='about-right'>
                <img src={about} width='600' alt='website'></img>
               
            </div>
            </div>
        </div>
    );
}

export default About;