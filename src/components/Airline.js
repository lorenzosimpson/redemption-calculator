import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const Airline = props => {
  const { inputs, setInputs } = useContext(MileageContext);

  const multipliers = {
    aa: 1.4,
    ua: 1.3,
    dl: 1.2
  };
  return (
    <div className="airlines" id='airlines'>
      <p id='choose'>Choose your airline</p>
      <div className="card-wrapper">
        <div
          className="aa"
          onClick={() => {
            setInputs({
              ...inputs,
              multiplier: multipliers.aa
            });
            props.history.push("/miles");
          }}
        >
          <Card>
            <CardImg src="https://image.flaticon.com/icons/svg/806/806042.svg" />
            <CardBody>
              <CardTitle>American Airlines</CardTitle>
            </CardBody>
          </Card>
        </div>

        <div
          className="ua"
          onClick={() => {
            setInputs({
              ...inputs,
              multiplier: multipliers.ua
            });
            props.history.push("/miles");
          }}
        >
          <Card>
            <CardImg src="https://www.freepnglogos.com/uploads/united-airlines-logo-emblem-png-5.png" />
            <CardBody>
              <CardTitle>United Airlines</CardTitle>
            </CardBody>
          </Card>
        </div>

        <div
          className="dl"
          onClick={() => {
            setInputs({
              ...inputs,
              multiplier: multipliers.dl
            });
            props.history.push("/miles");
          }}
        >
          <Card>
            <CardImg src="https://image.flaticon.com/icons/svg/806/806055.svg" />
            <CardBody>
              <CardTitle>Delta Airlines</CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
      <img id='airline-img'></img>
    </div>

  );
};

export default Airline;
