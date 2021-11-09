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
     <p className='womens-menu-text'>Boots</p>
     <p className='womens-menu-text'>Heels</p>
     <p className='womens-menu-text'>Evening & Wedding</p>
     <p className='womens-menu-text'>Flats</p>
     <p className='womens-menu-text'>Sandals</p>
     <p className='womens-menu-text'>Slippers</p>
      </div>

     </div>

     <div className='women-title'>WOMEN</div>

     <div className='womens-shop-div'>
      <div className='w-question-div'>WHAT ARE YOU SHOPPING FOR TODAY?</div>

      <div className='womens-pic-div'>
      <div className='circle-pic'><img src={'./assets/womenstop.png'} alt='blouses'/>Tops</div>
      <div className='circle-pic'><img src={'./assets/womenjeans.png'} alt='jeans'/>Jeans</div>
      <div className='circle-pic'><img src={'./assets/womensweater.png'} alt='sweaters'/>Sweaters</div>
      <div className='circle-pic'><img src={'./assets/womensdress.png'} alt='dresses'/>Dresses</div>
      </div>

      <div className='fit-div'>Shop this season's bestsellers </div>

      <div className='womens-active-parent'>
        <div className='womens-active-div'><img src={'./assets/bestseller1.jpg'} alt='woman wearing gray coat'/>Stay fashionably warm</div>
        <div className='womens-active-div'><img src={'./assets/bestseller2.jpg'} alt='woman in pink and gray outfit'/>Layering wardrobe essentials</div>
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

export default Women;