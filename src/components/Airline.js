import React, { useContext } from "react";
import { MileageContext } from "../contexts/MileageContext";
import { Card, CardImg, CardBody, p } from "reactstrap";
import travelers from '../images/travelers.svg';
import ua from '../images/ua.png';

const Airline = props => {
  const { inputs, setInputs } = useContext(MileageContext);

  const multipliers = {
    aa: 1.4,
    ua: 1.3,
    dl: 1.2
  };
  return (
    <div className="airlines-container" id='airlines'>
       <div className='airlines-content'>
          <div className='airlines-left'>
          <p id='choose'>Choose your airline</p>
            <img alt='travelers' id='travelers' src={travelers}></img>
      </div>

      <div className='airlines-right'>
          <div className="card-wrapper">
              <div
                className="aa"
                onClick={() => {
                  setInputs({
                    ...inputs,
                    multiplier: multipliers.aa
                  });
                  console.log(inputs)
                  props.history.push("/miles");
                }}
              >
                <Card>
                  <CardImg alt='american logo' className='card-img' src="https://image.flaticon.com/icons/svg/806/806042.svg" />
                  <CardBody>
                    <p className='airline-name'>American Airlines</p>
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
                  <CardImg alt='united logo' className='card-img' id='ua-img' src={ua} />
                  <CardBody>
                    <p className='airline-name'>United Airlines</p>
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
                  <CardImg alt='delta logo' className='card-img' src="https://image.flaticon.com/icons/svg/806/806055.svg" />
                  <CardBody>
                    <p className='airline-name'>Delta Airlines</p>
                  </CardBody>
                </Card>
              </div>

         </div>
        </div>
      </div>
    </div>

  );
};

// <a href="https://www.freepik.com/free-photos-vectors/travel">Travel vector created by stories - www.freepik.com</a>

export default Airline;
