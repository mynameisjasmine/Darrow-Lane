import React from 'react';
import './App.css';
import './index.css'
import Navigation from './components/Navigation';
import DarrowLane from './components/DarrowLane';
import Banner from './components/Banner';
import Footer from './components/Footer';







function App() {
  return (
    <div>
      
      <div className='border'>Free Shipping with $50 purchase or free Store Pickup</div>
      
      <Navigation />
      <Footer />
      {/* <Banner /> */}
      {/* <div>
      <Navigation />
        <Banner />
      </div> */}
      {/* <div>
      
        <Navigation />
        
        
      </div> */}
    </div>
  );
}

export default App;
