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
        <div className='acc-active-div purse-div'><img src={'./assets/accpurse.jpg'} alt='red purse'/>May your days be merry and bright</div>
        <div className='acc-active-div scarf-div'><img src={'./assets/accscarf.jpg'} alt='woman in red and orange scarf'/>Cold weather essentials</div>
      </div>
       <div className='style-text'>Treat yourself to these items on sale</div>
      <div className='acc-bottom-div'>
       <div className='bottom-div-pics acc-hat-div'><img src={'./assets/acchats.jpg'} alt='knit hats'/>Baby it's cold outside</div>
       <div className='bottom-div-pics acc-socks-div'><img src={'./assets/acc-socks.jpg'} alt='holiday socks'/>A cozy pair</div>
       <div className='bottom-div-pics acc-glasses-div'><img src={'./assets/acc-glasses.jpg'} alt='woman wearing sunglasses'/>Sunglasses on sale</div>
       <div className='bottom-last-div-pic acc-hair-div'><img src={'./assets/acc-hair.jpg'} alt='woman wearing hair barrette'/>Save on hair accessories</div>
      </div>
    </div>
      </div>
    </div>
    
    )
}

export default Accessories;