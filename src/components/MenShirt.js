import React from 'react';

const MenShirt = () => {
  return (
    <div className='container'>
    <div className='shirts-main'>
      
      <div className='shirtsmenu'>
       <p className='shirts-text'>Shirt Type</p>
       <p className='shirts-menu-text'>Polo Shirts</p>
       <p className='shirts-menu-text'>Dress Shirts</p>
       <p className='shirts-menu-text'>T-Shirts</p>
       <p className='shirts-menu-text'>Jerseys</p>
       {/* <p className='shirts-menu-text'>Henleys</p> */}
       
  
       {/* <div className='m-sale-div'>
       <p className='m-sale-text'>Men's Sale</p>
       <p className='shirts-menu-text'>Shirts</p>
       <p className='shirts-menu-text'>Pants</p>
       <p className='shirts-menu-text'>Shoes</p>
       <p className='shirts-menu-text'>Accessories</p>
        </div> */}
  
       </div>
       
  
      <div className='shirts-title'>SHIRTS</div>
  
      <div className='shirts-shop-div'>
        <div className='shirts-question-div'></div>
  
        <div className='shirts-pic-div'>
        <div className='circle-pic'><img src={'./assets/shirts-polo.png'} alt='gray polo shirt'/>Polo Shirts</div>
        <div className='circle-pic'><img src={'./assets/shirts-dress.png'} alt='dress shitrs'/>Dress Shirts</div>
        <div className='circle-pic'><img src={'./assets/shirts-tee.png'} alt='t-shirts'/>T-Shirts</div>
        <div className='circle-pic'><img src={'./assets/shirts-jersey.png'} alt='red sports jersey'/>Jerseys</div>
        </div>
  
        {/* <div className='fit-div'>Keeping fit while being fashionable </div> */}
  
        <div className='shirts-active-parent'>
          <div className='shirts-active-div'><img src={'./assets/shirts-men1.jpg'} alt=''/>
          <p>Charter Club Dress Shirt</p>
          <p className='org-price'>originally $130.00</p>
          Sale <span className='sale'>$89.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men2.jpg'} alt=''/>
          <p>Nike x Off-White sneakers</p>
          <p className='org-price'>originally $59.99</p>
          Sale <span className='sale'>$19.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men3.jpg'} alt=''/>
          <p>Hugo Boss Camel Coat</p>
          <p className='org-price'>originally $370.99</p>
          Sale <span className='sale'>$299.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men4.jpg'} alt=''/>
          <p>Brunello Cucinelli Handbag</p>
          <p className='org-price'>originally $520.00</p>
          Sale <span className='sale'>$410.00</span></div>

        </div>

         {/* middle div */}
        <div className='shirts-active-parent'>
          <div className='shirts-active-div'><img src={'./assets/sale-leather-jkt.jpg'} alt='woman wearing black leather jacket'/>
          <p>BCBG Cropped Leather Jacket</p>
          <p className='org-price'>originally $130.00</p>
          Sale <span className='sale'>$89.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/sale-tshirts.jpg'} alt='cotton crew neck t-shirts'/>
          <p>Hanes Crew Neck T-Shirts</p>
          <p className='org-price'>originally $29.99</p>
          Sale <span className='sale'>$19.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/w-sale-straightjeans.jpg'} alt='woman wearing straight leg jeans'/>
          <p>Levi's Straight Leg Jeans</p>
          <p className='org-price'>originally $60.99</p>
          Sale <span className='sale'>$39.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/sale-sunglasses.jpg'} alt='black sunglasses'/>
          <p>Ray-Ban Sunglasses</p>
          <p className='org-price'>originally $220.00</p>
          Sale <span className='sale'>$175.00</span></div>

        </div>

        {/* bottom div */}

        <div className='shirts-active-parent'>
          <div className='shirts-active-div'><img src={'./assets/m-sale-tanshirt.jpg'} alt='man wearing tan jersey'/>
          <p>Theory Cotton Jersey</p>
          <p className='org-price'>originally $60.00</p>
          Sale <span className='sale'>$39.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/w-sale-leathertop.jpg'} alt='woman wearing tan and black leather top'/>
          <p>Maje Leather Shirt</p>
          <p className='org-price'>originally $159.99</p>
          Sale <span className='sale'>$80.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/sale-jwpurse.jpg'} alt='light brown purse'/>
          <p>JW Anderson Purse</p>
          <p className='org-price'>originally $109.00</p>
          Sale <span className='sale'>$70.99</span></div>

          <div className='shirts-active-div'><img src={'./assets/sale-chooshoes.jpg'} alt=''/>
          <p>Jimmy Choo Heels</p>
          <p className='org-price'>originally $330.00</p>
          Sale <span className='sale'>$220.00</span></div>

        </div>

        
      </div>
      </div>
    </div>
     
     
     )
}

export default MenShirt;