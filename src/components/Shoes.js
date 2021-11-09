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
  
        <div className='fit-div'>Keeping fit while being fashionable </div>
  
        <div className='shoes-active-parent'>
          <div className='shoes-active-div'><img src={'./assets/mainmensactive.jpg'} alt=''/>Activewear</div>
          <div className='shoes-active-div'><img src={'./assets/mainmensshoes.jpg'} alt=''/>Sneakers & Dress Shoes</div>
        </div>
         <div className='style-text'>Ready, Set, Style!</div>
        <div className='shoes-bottom-div'>
         <div className='bottom-div-pics'><img src={'./assets/menslounge.png'} alt=''/>Casual Weekends</div>
         <div className='bottom-div-pics'><img src={'./assets/menswhitetee.jpg'} alt=''/>The Perfect White Tee</div>
         <div className='bottom-div-pics'><img src={'./assets/mensouterwear.jpg'} alt=''/>Men's Outerwear</div>
         <div className='bottom-last-div-pic'><img src={'./assets/menscasual.jpg'} alt=''/>Business Casual Style</div>
        </div>
      </div>
      </div>
    </div>
    
    )
}

export default Shoes;