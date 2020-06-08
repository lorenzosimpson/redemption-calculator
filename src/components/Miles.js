import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import miles from '../images/miles.svg'

const Miles = props => {
  const { handleChange } = useContext(MileageContext);
  return (
    <div className='form-container'>
      <div className='miles-left'>
      <img alt='traveler sitting on suitcase' id='miles-img' src={miles}></img>
      </div>
      <form className="form-miles" onChange={handleChange}>
      <p className='form-title'>How many miles will you need for this ticket?</p>
        <input type="number" name="miles"/>
        <button
          onClick={e => {
            e.preventDefault();
            props.history.push("/money");
          }}
        >
          next
        </button>
      </form>
    </div>
  );
};
export default Miles;
