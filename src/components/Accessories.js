import React from 'react';

const Accessories = () => {
    return (
    <div className='container'>
     <div className='acc-main'>
      
      <div className='accmenu'>
     <p className='acc-clothing-text'>Accessories</p>
     <p className='acc-menu-text'>Hair Accessories</p>
     <p className='acc-menu-text'>Sunglasses</p>
     <p className='acc-menu-text'>Gloves & Scarves</p>
     <p className='acc-menu-text'>Belts</p>
     <p className='acc-menu-text'>Socks & Tights</p>
     <p className='acc-menu-text'>Face Masks</p>

     <div className='acc-handbags-div'>
     <p className='acc-handbags-text'>Purses</p>
     <p className='acc-menu-text'>Evening Bags</p>
     <p className='acc-menu-text'>Handbags</p>
     <p className='acc-menu-text'>Messenger Bags</p>
     
      </div>

     </div>

     <div className='acc-title'>ACCESSORIES</div>

     <div className='acc-shop-div'>
      <div className='acc-question-div'>WHAT ARE YOU SHOPPING FOR TODAY?</div>

      <div className='acc-pic-div'>
      <div className='circle-pic'><img src={'./assets/glovesandscarves.png'} alt='gloves and scarves'/>Gloves & Scarves</div>
      <div className='circle-pic'><img src={'./assets/belts.png'} alt='belt'/>Belts</div>
      <div className='circle-pic'><img src={'./assets/accsocks.png'} alt='socks'/>Socks & Tights</div>
      <div className='circle-pic'><img src={'./assets/purses.png'} alt='purses'/>Purses</div>
      </div>

      <div className='fit-div'>Shop this season's hottest color </div>

      <div className='acc-active-parent'>
        <div className='acc-active-div'><img src={'./assets/accshirt.jpg'} alt='woman wearing red shirt'/>May your days be merry and bright</div>
        <div className='acc-active-div'><img src={'./assets/accredpurse.jpg'} alt='woman in pink and gray outfit'/>Layering wardrobe essentials</div>
      </div>
       <div className='style-text'>Shop Your Aesthetic</div>
      <div className='womens-bottom-div'>
       <div className='bottom-div-pics'><img src={'./assets/womenweekend.jpg'} alt=''/>Weekend Vibes</div>
       <div className='bottom-div-pics'><img src={'./assets/womenworkout.jpg'} alt=''/>Stay Fit and Stylish</div>
       <div className='bottom-div-pics'><img src={'./assets/womenbags.jpg'} alt=''/>Purses and Bags</div>
       <div className='bottom-last-div-pic'><img src={'./assets/womenbusiness.jpg'} alt=''/>Business Style</div>
      </div>
    </div>
      </div>
    </div>
    
    )
}

export default Accessories;