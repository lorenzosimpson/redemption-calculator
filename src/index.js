import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MileageContext } from "./contexts/MileageContext";
import { NavContext } from './contexts/NavContext';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import MobileMiles from './components/MobileMiles';
import MobileMoney from './components/MobileMoney';
import MobileResult from './components/MobileResult';
import MobileNav from './components/MobileNav';

function App() {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = useState(true)

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    console.log(inputs);
  }

  return (
    <MileageContext.Provider value={{ inputs, setInputs, handleChange }}>
      <NavContext.Provider value={{ open, setOpen }}>
      
      <div className="App">
      {
        <div className='main-container'>
          <Media queries={{ small: { maxWidth: 800 }}}>
            {matches =>
            matches.small && open ?
            <>
            <Route path='/' component={MobileNav} />
                <div className='nav-open'>
                  <Link className='mobile-nav-op'>Home</Link>
                  <Link className='mobile-nav-op'>About</Link>
                  <Link className='mobile-nav-op'>Start</Link>
                </div>
                </>
              :
              matches.small ?
              (
              <>
              <Route path='/' component={MobileNav} />
              <Route exact path='/' component={MobileHome} />
             <Route exact path='/' component={MobileAirlines}/>
             <Route exact path='/about' component={MobileAbout} />
             <Route exact path='/miles' component={MobileMiles} />
             <Route exact path='/money' component={MobileMoney} />
             <Route exact path='/result' component={MobileResult} />
                )
              </>
            ) : (
              <>
              <Route path="/" component={Header} />
             <Route exact path='/' component={Home} />
             <Route exact path='/' component={Airline}/>
             <Route exact path='/about' component={About} />
             <Route exact path="/miles" component={Miles} />
            <Route exact path="/money" component={Money} />
            <Route exact path="/result" component={Result} />
             </>
            )
            }
        </Media>
        
        </div>
}
      </div>
      </NavContext.Provider>
    </MileageContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
