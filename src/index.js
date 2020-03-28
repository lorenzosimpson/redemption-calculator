import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MileageContext } from "./contexts/MileageContext";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Miles from "./components/Miles";
import Airline from "./components/Airline";
import Money from "./components/Money";
import Result from "./components/Result";
import "./styles.css";
import Home from './components/Home'

function App() {
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    console.log(inputs);
  }

  return (
    <MileageContext.Provider value={{ inputs, setInputs, handleChange }}>
      <div className="App">
      <Route path="/" component={Header} />
        <div className='main-container'>
        <Route exact path='/' component={Home} />
        
        <Route exact path="/" component={Airline} />
        <Route exact path="/miles" component={Miles} />
        <Route exact path="/money" component={Money} />
        <Route exact path="/result" component={Result} />
        </div>
      </div>
    </MileageContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
