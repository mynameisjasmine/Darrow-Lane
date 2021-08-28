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
     </div>
    )
}

export default DarrowLane;