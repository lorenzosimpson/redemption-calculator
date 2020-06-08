import React, { useContext, useState } from "react";
import { MileageContext } from "../contexts/MileageContext";
import money from '../images/money.svg';

const Money = props => {
  const [clicked, setClicked] = useState(false);
  const { handleChange } = useContext(MileageContext);
  const fn = () => {
    setTimeout(() => props.history.push("/result"), 2000)
  }
  return (
    <div className='mbl-money-container'>
        <div className='money-top'>
        <h2 className='form-title'>How much is the ticket in cash?</h2>
          <img alt='person looking at transactions' id='money-img' src={money}></img>
        </div>

        <form className="form-money" onChange={handleChange}>
          <input name="money" type="tel" />
          <button
            color="primary"
            onClick={e => {
              e.preventDefault();
              setClicked(true)
              fn();

            }}
          >
          {!clicked ? 'calculate' : 'calculating...'}
          </button>
        </form>
      </div>
  );
};

export default Money;
