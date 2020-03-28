import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <p id='logo'
        onClick={() => {
          props.history.push("/");
        }}
      >
        redemption<span style={{fontWeight: 'bold'}}>Calculator</span>
      </p>
      <Link to='/about'>about</Link>
    </div>
  );
};

export default Header;
