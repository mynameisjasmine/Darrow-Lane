import React from 'react';
import './App.css';
import './index.css'
import Navigation from './components/Navigation';
import DarrowLane from './components/DarrowLane';







function App() {
  return (
    <div>
      <div className='border'>Free Shipping with $50 purchase or free Store Pickup</div>
      <header>
        <Navigation />
        {/* <DarrowLane /> */}
      </header>
    </div>
  );
}

export default App;
