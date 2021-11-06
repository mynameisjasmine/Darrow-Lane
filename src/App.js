import React from 'react';
import './App.css';
import './index.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';







function App() {
  return (
    <div>
      
      <div className='border'>Free Shipping with $50 purchase or free Store Pickup</div>
      
      <Navigation />
      <div className='footer'>
      <Footer />
      </div>
      
      
    </div>
  );
}

export default App;
