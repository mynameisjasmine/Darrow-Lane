import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DarrowLane from './components/DarrowLane';
import About from './components/About';
import Men from './components/Men';
import MenShirt from './components/MenShirt';
import MensPolo from './components/MensPolo';
import Women from './components/Women';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';
import Sale from './components/Sale';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
        <App />
        <Route exact path='/' component={DarrowLane}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/men' component={Men}/>
        <Route exact path='/menshirt' component={MenShirt}/>
        <Route exact path='/menspolo'component={MensPolo}/>
        <Route exact path='/women' component={Women}/>
        <Route exact path='/shoes' component={Shoes}/>
        <Route exact path='/accessories' component={Accessories}/>
        <Route exact path='/sale' component={Sale}/>
        
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
