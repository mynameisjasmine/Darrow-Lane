import React from 'react';

const Women = () => {
    return (
    <div className='container'>
      <div className='womens-main'>
      
      <div className='womensmenu'>
     <p className='w-clothing-text'>Women's Clothing</p>
     <p className='womens-menu-text'>Blouses</p>
     <p className='womens-menu-text'>Pants</p>
     <p className='womens-menu-text'>Blazers</p>
     <p className='womens-menu-text'>Active Tops</p>
     <p className='womens-menu-text'>Active Bottoms</p>
     <p className='womens-menu-text'>Lingerie</p>

     <div className='w-shoes-div'>
     <p className='w-shoes-text'>Women's Shoes</p>
     <p className='womens-menu-text'>Heels</p>
     <p className='womens-menu-text'>Flats</p>
     <p className='womens-menu-text'>Boots</p>
      </div>

     </div>

     <div className='women-title'>WOMEN</div>

     <div className='womens-shop-div'>
      <div className='w-question-div'>WHAT ARE YOU SHOPPING FOR TODAY?</div>

      <div className='womens-pic-div'>
      <div className='circle-pic'><img src={'./assets/womenstop.png'}/>Tops</div>
      <div className='circle-pic'><img src={'./assets/womenjeans.png'}/>Jeans</div>
      <div className='circle-pic'><img src={'./assets/womensweater.png'}/>Sweaters</div>
      <div className='circle-pic'><img src={'./assets/womensdress.png'}/>Dresses</div>
      </div>

      <div className='fit-div'>Shop this season's bestsellers </div>

      <div className='womens-active-parent'>
        <div className='womens-active-div'><img src={'./assets/bestseller1.jpg'}/>Stay fashionably warm</div>
        <div className='womens-active-div'><img src={'./assets/bestseller2.jpg'}/>Layering wardrobe essentials</div>
      </div>
       <div className='style-text'>Ready, Set, Style!</div>
      <div className='womens-bottom-div'>
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

export default Women;