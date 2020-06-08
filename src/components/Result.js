import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import { fn } from "../utils";
import error from '../images/error.svg';
import money2 from '../images/money2.svg';
import world from '../images/world.svg';

const Result = props => {
  const { inputs } = useContext(MileageContext);
  console.log(inputs);
  return (
    <div className="result">
      {!inputs.money || !inputs.miles || !inputs.multiplier ? (
        <div className='result-sub'>
        <p id='result-text'>Whoops! You forgot to complete each section</p>
        <h2>Please try again</h2>
        <img alt='woman looking at blank canvas' src={error} width='600px'></img>
        </div>
      ) : (
        <div>
          {fn(inputs.multiplier, inputs.money, inputs.miles)
            ? 
            <div className='result-sub'>
            <p id='result-text'>Use miles</p>
              <img src={world} width='450px' alt='man looking at world map'></img>
              </div>
            : 
            <div className='result-sub'>
            <p id='result-text'>Use money</p>
            <img alt='man with credit card' src={money2} width='600px'></img>
            </div>
            }
            <p>...and have a great trip!</p>
        </div>
      )}
    </div>
  );
};

export default Result;
