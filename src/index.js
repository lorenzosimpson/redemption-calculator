import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MileageContext } from "./contexts/MileageContext";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Miles from "./components/Miles";
import Airline from "./components/Airline";
import Money from "./components/Money";
import Result from "./components/Result";
import About from './components/About';
import "./sass/styles.scss";
import Home from './components/Home'
import Media from 'react-media';

import MobileHome from './components/MobileHome.js';
import MobileAirlines from './components/MobileAirlines';
import MobileAbout from './components/MobileAbout';

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
          <Media queries={{ small: { maxWidth: 500 }}}>
            {matches =>
            matches.small ? (
              <>
              <Route exact path='/' component={MobileHome} />
             <Route exact path='/' component={MobileAirlines}/>
             <Route exact path='/about' component={MobileAbout} />
              </>
            ) : (
              <>
             <Route exact path='/' component={Home} />
             <Route exact path='/' component={Airline}/>
             <Route exact path='/about' component={About} />
             </>
            )
            }
        </Media>
        
        {/* <Route exact path="/" component={Airline} /> */}
        {/* <Route exact path='/about' component={About} /> */}
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
