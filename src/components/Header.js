import React from "react";

const Header = props => {
  return (
    <div className="header">
      <h1
        onClick={() => {
          props.history.push("/");
        }}
      >
        Miles or Money?
      </h1>
    </div>
  );
};

export default Header;
