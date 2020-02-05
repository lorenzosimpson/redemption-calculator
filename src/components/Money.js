import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";

const Money = props => {
  const { handleChange } = useContext(MileageContext);
  return (
    <form className="form-money" onChange={handleChange}>
      <h2 id="money-h2">How much is the ticket in cash?</h2>
      <input name="money" type="number" />
      <button
        color="primary"
        onClick={e => {
          e.preventDefault();
          props.history.push("/result");
        }}
      >
        calculate
      </button>
    </form>
  );
};

export default Money;
