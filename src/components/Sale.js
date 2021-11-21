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
  
        {/* <div className='fit-div'>Keeping fit while being fashionable </div> */}
  
        <div className='sale-active-parent'>
          <div className='sale-active-div'><img src={'./assets/w-sale-blazer2.jpg'} alt=''/>
          <p>Tahari Blazer</p>
          <p className='org-price'>originally $130.00</p>
          Sale <span className='sale'>$89.99</span></div>

          <div className='sale-active-div'><img src={'./assets/m-sale-sneaker.jpg'} alt=''/>
          <p>Nike x Off-White sneakers</p>
          <p className='org-price'>originally $59.99</p>
          Sale <span className='sale'>$19.99</span></div>

          <div className='sale-active-div'><img src={'./assets/m-sale-camelcoat.jpg'} alt=''/>
          <p>Hugo Boss Camel Coat</p>
          <p className='org-price'>originally $370.99</p>
          Sale <span className='sale'>$299.99</span></div>

          <div className='sale-active-div'><img src={'./assets/sale-tan-purse.jpg'} alt=''/>
          <p>Brunello Cucinelli Handbag</p>
          <p className='org-price'>originally $520.00</p>
          Sale <span className='sale'>$410.00</span></div>

        </div>

         {/* middle div */}
        <div className='sale-active-parent'>
          <div className='sale-active-div'><img src={'./assets/sale-leather-jkt.jpg'} alt='woman wearing black leather jacket'/>
          <p>BCBG Cropped Leather Jacket</p>
          <p className='org-price'>originally $130.00</p>
          Sale <span className='sale'>$89.99</span></div>

          <div className='sale-active-div'><img src={'./assets/sale-tshirts.jpg'} alt='cotton crew neck t-shirts'/>
          <p>Hanes Crew Neck T-Shirts</p>
          <p className='org-price'>originally $29.99</p>
          Sale <span className='sale'>$19.99</span></div>

          <div className='sale-active-div'><img src={'./assets/w-sale-straightjeans.jpg'} alt='woman wearing straight leg jeans'/>
          <p>Levi's Straight Leg Jeans</p>
          <p className='org-price'>originally $60.99</p>
          Sale <span className='sale'>$39.99</span></div>

          <div className='sale-active-div'><img src={'./assets/sale-sunglasses.jpg'} alt='black sunglasses'/>
          <p>Ray-Ban Sunglasses</p>
          <p className='org-price'>originally $220.00</p>
          Sale <span className='sale'>$175.00</span></div>

        </div>

        {/* bottom div */}

        <div className='sale-active-parent'>
          <div className='sale-active-div'><img src={'./assets/m-sale-tanshirt.jpg'} alt='man wearing tan jersey'/>
          <p>Theory Cotton Jersey</p>
          <p className='org-price'>originally $60.00</p>
          Sale <span className='sale'>$39.99</span></div>

          <div className='sale-active-div'><img src={'./assets/w-sale-leathertop.jpg'} alt='woman wearing tan and black leather top'/>
          <p>Maje Leather Shirt</p>
          <p className='org-price'>originally $159.99</p>
          Sale <span className='sale'>$80.99</span></div>

          <div className='sale-active-div'><img src={'./assets/sale-jwpurse.jpg'} alt='light brown purse'/>
          <p>JW Anderson Purse</p>
          <p className='org-price'>originally $109.00</p>
          Sale <span className='sale'>$70.99</span></div>

          <div className='sale-active-div'><img src={'./assets/sale-chooshoes.jpg'} alt=''/>
          <p>Jimmy Choo Heels</p>
          <p className='org-price'>originally $300.00</p>
          Sale <span className='sale'>$210.00</span></div>

        </div>

        
         {/* <div className='style-text'>Ready, Set, Style!</div>
        <div className='sale-bottom-div'>
         <div className='bottom-div-pics'><img src={'./assets/menslounge.png'} alt=''/>Casual Weekends</div>
         <div className='bottom-div-pics'><img src={'./assets/menswhitetee.jpg'} alt=''/>The Perfect White Tee</div>
         <div className='bottom-div-pics'><img src={'./assets/mensouterwear.jpg'} alt=''/>Men's Outerwear</div>
         <div className='bottom-last-div-pic'><img src={'./assets/menscasual.jpg'} alt=''/>Business Casual Style</div>
        </div> */}
      </div>
      </div>
    </div>
    
    )
}

export default Sale;