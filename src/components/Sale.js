import React from 'react';

const Sale = () => {
    return (
    <div className='container'>
     <div className='sale-main'>
      
      <div className='salemenu'>
       <p className='w-sale-text'>Women's Sale</p>
       <p className='sale-menu-text'>Tops</p>
       <p className='sale-menu-text'>Dresses</p>
       <p className='sale-menu-text'>Skirts</p>
       <p className='sale-menu-text'>Pants</p>
       <p className='sale-menu-text'>Shoes</p>
       <p className='sale-menu-text'>Accessories</p>
       {/* <p className='sale-menu-text'>Active Bottoms</p> */}
  
       <div className='m-sale-div'>
       <p className='m-sale-text'>Men's Sale</p>
       <p className='sale-menu-text'>Shirts</p>
       <p className='sale-menu-text'>Pants</p>
       <p className='sale-menu-text'>Shoes</p>
       <p className='sale-menu-text'>Accessories</p>
        </div>
  
       </div>
       
  
      <div className='sale-title'>SALE</div>
  
      <div className='sale-shop-div'>
        <div className='sale-question-div'></div>
  
        <div className='sale-pic-div'>
        <div className='circle-pic'><img src={'./assets/w-sale.png'} alt='woman wearing black blazer'/>Women</div>
        <div className='circle-pic'><img src={'./assets/m-sale.png'} alt='man wearing tan sweater'/>Mens</div>
        <div className='circle-pic'><img src={'./assets/shoesale.png'} alt='leopard print ankle boots'/>Shoes</div>
        <div className='circle-pic'><img src={'./assets/accsale.png'} alt='brown hat and sunglasses'/>Accessories</div>
        </div>
  
        <div className='fit-div'>Keeping fit while being fashionable </div>
  
        <div className='sale-active-parent'>
          <div className='sale-active-div'><img src={'./assets/mainmensactive.jpg'} alt=''/>Activewear</div>
          <div className='sale-active-div'><img src={'./assets/mainmensshoes.jpg'} alt=''/>Sneakers & Dress Shoes</div>
        </div>
         <div className='style-text'>Ready, Set, Style!</div>
        <div className='sale-bottom-div'>
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

export default Sale;