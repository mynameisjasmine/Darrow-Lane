import React from 'react';

const Shoes = () => {
    return (
    <div className='container'>
      <div className='shoes-main'>
      
      <div className='shoesmenu'>
       <p className='womens-shoes-text'>Women's Shoes</p>
       <p className='shoes-menu-text'>Boots</p>
       <p className='shoes-menu-text'>Heels</p>
       <p className='shoes-menu-text'>Evening & Wedding</p>
       <p className='shoes-menu-text'>Flats</p>
       <p className='shoes-menu-text'>Sneakers</p>
       <p className='shoes-menu-text'>Slippers</p>
  
       <div className='mens-shoes-div'>
       <p className='mens-shoes-text'>Men's Shoes</p>
       <p className='shoes-menu-text'>Sneakers</p>
       <p className='shoes-menu-text'>Dress Shoes</p>
       <p className='shoes-menu-text'>Loafers</p>
        </div>
  
       </div>
       
  
      <div className='shoes-title'>SHOES</div>
  
      <div className='shoes-shop-div'>
        <div className='shoes-question-div'>WHAT ARE YOU SHOPPING FOR TODAY?</div>
  
        <div className='shoes-pic-div'>
        <div className='circle-pic'><img src={'./assets/w-boots.png'} alt='white boots with butterfly motif'/>Boots</div>
        <div className='circle-pic'><img src={'./assets/w-heels.png'} alt='gold high heels'/>Heels</div>
        <div className='circle-pic'><img src={'./assets/w-sneakers.png'} alt='orange, green and black nike sneakers'/>Sneakers</div>
        <div className='circle-pic'><img src={'./assets/w-flats.png'} alt='beige flat shoes'/>Flats</div>
        </div>
  
        <div className='fit-div'>Shop our faves!</div>
  
        <div className='shoes-active-parent'>
          <div className='shoes-active-div'><img src={'./assets/w-mainboots.jpg'} alt='two women smiling and lauging'/>These shoes on sale will make you smile</div>
          <div className='shoes-active-div'><img src={'./assets/weddingshoesmain.jpg'} alt='embellished white and gold open toe heels'/>Find shoes for wedding guests</div>
        </div>
         <div className='style-text'>Shoes for every occasion</div>
        <div className='shoes-bottom-div'>
         <div className='bottom-div-pics'><img src={'./assets/w-loafershoes.jpg'} alt='woman wearing black loafers'/>Stylish and classic loafers </div>
         <div className='bottom-div-pics'><img src={'./assets/w-sneakers.jpg'} alt='woman wearing red,black and blue nike sneakers'/>Shop athletic shoes</div>
         <div className='bottom-div-pics'><img src={'./assets/w-blackboots.jpg'} alt='woman wearing black ankle boots'/>Trendy boots</div>
         <div className='bottom-last-div-pic'><img src={'./assets/w-oxfordshoes.jpg'} alt=''/>See our selection of flats</div>
        </div>
      </div>
      </div>
    </div>
    
    )
}

export default Shoes;