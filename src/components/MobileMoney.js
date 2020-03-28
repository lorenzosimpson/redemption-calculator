import React, { useContext, useState } from "react";
import { MileageContext } from "../contexts/MileageContext";
import money from '../images/money.jpg';

const Money = props => {
  const [clicked, setClicked] = useState(false);
  const { handleChange } = useContext(MileageContext);
  const fn = () => {
    setTimeout(() => props.history.push("/result"), 2000)
  }
  return (
    <div className='money-container'>
        <form className="form-money" onChange={handleChange}>
          <h2 className='form-title'>How much is the ticket in cash?</h2>
          <input name="money" type="number" />
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
        <div className='money-right'>
          <img alt='money' id='money-img' src={money}></img>
          <a className='attr' href="https://www.freepik.com/free-photos-vectors/money">Money vector created by stories - www.freepik.com</a>
        </div>
      </div>
  );
};

export default Money;
