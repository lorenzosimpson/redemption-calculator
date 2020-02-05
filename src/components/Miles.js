import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";

const Miles = props => {
  const { handleChange } = useContext(MileageContext);
  return (
    <form className="form-miles" onChange={handleChange}>
      <h2>How many miles will you need for this ticket?</h2>
      <input type="number" name="miles" />
      <button
        onClick={e => {
          e.preventDefault();
          props.history.push("/money");
        }}
      >
        next
      </button>
    </form>
  );
};
export default Miles;
