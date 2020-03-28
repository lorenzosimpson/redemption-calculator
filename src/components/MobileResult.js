import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import { fn } from "../utils";
import error from '../images/error.jpg';
import money2 from '../images/money2.jpg';
import woman from '../images/woman.svg';

const Result = props => {
  const { inputs } = useContext(MileageContext);
  console.log(inputs);
  return (
    <div className="mbl-result">
      {!inputs.money || !inputs.miles || !inputs.multiplier ? (
        <div className='result-sub'>
        <p id='result-text'>Whoops! You forgot to complete each section</p>
        <h2>Please try again</h2>
        <img alt='error' src={error} width='600px'></img>
        <a className='attr' href="http://www.freepik.com">Designed by slidesgo / Freepik</a>
        </div>
      ) : (
        <div>
          {fn(inputs.multiplier, inputs.money, inputs.miles)
            ? 
            <div className='result-sub'>
            <p id='result-text'>Use miles</p>
              <img src={woman} width='450px' alt='woman'></img>
              <a className='attr' href="https://www.vecteezy.com/free-vector/woman">Woman Vectors by Vecteezy</a>
              </div>
            : 
            <div className='result-sub'>
            <p id='result-text'>Use money</p>
            <img id='money-result' alt='money' src={money2} width='600px'></img>
            <a className='attr' href="https://www.vecteezy.com/free-vector/accounting">Accounting Vectors by Vecteezy</a>
            </div>
            }
            <p>...and have a great trip!</p>
        </div>
      )}
    </div>
  );
};

export default Result;
