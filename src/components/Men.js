import React from 'react';

const Men = () => {
 return (
   <div className='container'>
    
    <div className='mens-main'>
      
    <div className='mensmenu'>
     <p className='m-clothing-text'>Men's Clothing</p>
     <p className='mens-menu-text'>Shirts</p>
     <p className='mens-menu-text'>Pants</p>
     <p className='mens-menu-text'>Blazers</p>
     <p className='mens-menu-text'>Socks</p>
     <p className='mens-menu-text'>Active Tops</p>
     <p className='mens-menu-text'>Active Bottoms</p>

     <div className='m-shoes-div'>
     <p className='m-shoes-text'>Men's Shoes</p>
     <p className='mens-menu-text'>Sneakers</p>
     <p className='mens-menu-text'>Dress Shoes</p>
     <p className='mens-menu-text'>Loafers</p>
      </div>

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

      <div className='fit-div'>Keeping fit while being fashionable </div>

      <div className='mens-active-parent'>
        <div className='mens-active-div'><img src={'./assets/mainmensactive.jpg'}/>Activewear</div>
        <div className='mens-active-div'><img src={'./assets/mainmensshoes.jpg'}/>Sneakers & Dress Shoes</div>
      </div>
       <div className='style-text'>Ready, Set, Style!</div>
      <div className='mens-bottom-div'>
       <div className='bottom-div-pics'><img src={'./assets/menslounge.png'}/>Casual Weekends</div>
       <div className='bottom-div-pics'><img src={'./assets/menswhitetee.jpg'}/>The Perfect White Tee</div>
       <div className='bottom-div-pics'><img src={'./assets/mensouterwear.jpg'}/>Men's Outerwear</div>
       <div className='bottom-last-div-pic'><img src={'./assets/menscasual.jpg'}/>Business Casual Style</div>
      </div>
    </div>
    </div>

   </div> 
 
 )
}

export default Men;