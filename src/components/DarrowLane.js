import React from 'react';
import Banner from './Banner';

const DarrowLane = () => {
    return (
    <div className='container'>
        <div className='main-image-div'>
        {/* <h1>DarrowLane Component</h1> */}
            <div className='image-div'><img src={'./assets/mod1.png'} alt='woman wearing hat'/></div>
            <div className='image-div'><img src={'./assets/mod2.png'} alt='man with hair twists wearing gray jacket'/></div>
            <div className='image-div'><img src={'./assets/mod3.png'} alt='woman wearing shirt with skeletal hand peace sign'/></div>
            <div className='image-div'><img src={'./assets/mod4.png'} alt='woman wearing black jacket with fur hood'/></div>
            
        </div>

        <div>
        <Banner />
        </div>

        <p className='trends'>Fall Trends</p>
        
        <div className='middle-image-div'>
         <div className='mods'><img src={'./assets/mod5.png'} alt=''/></div>
         <div className='mods'><img src={'./assets/mod6.png'} alt=''/></div>
         <div className='mods mod7'><img src={'./assets/mod7.png'} alt=''/></div>
          </div>

        <div className='middle-image-div'>
         <div className='mods bag '><img src={'./assets/bag1.3.png'} alt=''/></div>
         <div className='mods mod8 '><img src={'./assets/mod8.2.png'} alt=''/></div>
         <div className='mods shoes'><img src={'./assets/shoes1.3.png'} alt=''/></div>
         
          </div>
          <div className='acc-image-div'>
          <div className='mod9'><img src={'./assets/mod9.png'} alt=''/></div>
          </div>
          <div className='complete-div'>
              {/* <div className='complete'><img src={'./assets/complete.png'} alt=''/></div> */}
              <p className='text'>COMPLETE THE</p>
              
              <p className='text look'>LOOK</p>
          </div>
     </div>
    )
}

export default DarrowLane;