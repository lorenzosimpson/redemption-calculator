import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import miles from '../images/miles.svg'

const MobileMiles = props => {
  const { handleChange } = useContext(MileageContext);
  return (
    <div className='mbl-form-container'>
      <div className='miles-top'>
      <p className='form-title'>How many miles will you need for this ticket?</p>
      <img alt='airplane' id='miles-img' src={miles}></img>
      </div>
      <form className="form-miles" onChange={handleChange}>
        <input type="tel" name="miles"/>
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
export default MobileMiles;
