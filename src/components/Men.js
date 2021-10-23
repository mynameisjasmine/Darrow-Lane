import React from 'react';

const Men = () => {
 return (
   <div className='container'>
    
    <div className='mens-main'>
      
    <div className='mensmenu'>
     <p className='m-clothing-text'>Men's Clothing</p>
     <p>Shirts</p>
     <p>Pants</p>
     <p>Blazers</p>
     <p>Socks</p>
     <p>Active Tops</p>
     <p>Active Bottoms</p>
     <p>Sneakers</p>
     <p>Dress Shoes</p>
    </div>

    <div className='men-title'>MEN</div>

    <div className='mens-shop-div'>
      <div className='question-div'>WHAT ARE YOU SHOPPING FOR TODAY?</div>

      <div className='mens-pic-div'>
      <div className='circle-pic'><img src={'./assets/shirts.png'}/>Shirts</div>
      <div className='circle-pic'><img src={'./assets/pants.png'}/>Pants</div>
      <div className='circle-pic'><img src={'./assets/blazers.png'}/>Blazers</div>
      <div className='circle-pic'><img src={'./assets/sock.png'}/>Socks</div>
      </div>
    </div>
    </div>

   </div> 
 
 )
}

export default Men;