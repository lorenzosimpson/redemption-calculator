import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import { fn } from "../utils";

const Result = props => {
  const { inputs } = useContext(MileageContext);
  console.log(inputs);
  return (
    <div className="result">
      {!inputs.money || !inputs.miles || !inputs.multiplier ? (
        <p>Please complete the form</p>
      ) : (
        <h2>
          {fn(inputs.multiplier, inputs.money, inputs.miles)
            ? "Use miles"
            : "Use money"}
        </h2>
      )}
    </div>
  );
};

export default Result;
