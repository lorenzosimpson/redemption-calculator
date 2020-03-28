import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import plane from '../images/plane.jpg'

const Miles = props => {
  const { handleChange } = useContext(MileageContext);
  return (
    <div className='form-container'>
      <div className='miles-left'>
      <img alt='airplane' id='miles-img' src={plane}></img>
        <a className='attr' href="https://www.freepik.com/free-photos-vectors/cartoon">Cartoon vector created by brgfx - www.freepik.com</a>
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
