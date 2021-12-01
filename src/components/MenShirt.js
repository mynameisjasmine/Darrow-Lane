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
        <div className='circle-pic'><img src={'./assets/shirts-dress.png'} alt='dress shirts'/>Dress Shirts</div>
        <div className='circle-pic'><img src={'./assets/shirts-tee.png'} alt='t-shirts'/>T-Shirts</div>
        <div className='circle-pic'><img src={'./assets/shirts-jersey.png'} alt='red sports jersey'/>Jerseys</div>
        </div>
  
        {/* <div className='fit-div'>Keeping fit while being fashionable </div> */}
  
        <div className='shirts-active-parent'>
          <div className='shirts-active-div'><img src={'./assets/shirts-men1.jpg'} alt='man wearing white dress shirt'/>
          <p>Charter Club Dress Shirt</p>
          <p className='org-price'>$89.00</p>
           </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men2.jpg'} alt='man wearing white t-shirt'/>
          <p>Adidas Crew Neck Shirt</p>
          <p className='org-price'>$59.99</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men3.jpg'} alt='man wearing black polo shirt'/>
          <p>Polo Shirt</p>
          <p className='org-price'>$60.99</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men4.jpg'} alt='man wearing blue button down shirt'/>
          <p>Brooks Brothers Short-Sleeved Shirt</p>
          <p className='org-price'>$50.00</p>
          </div>

        </div>

         {/* middle div */}
        <div className='shirts-active-parent'>
          <div className='shirts-active-div'><img src={'./assets/shirts-men5.jpg'} alt='woman wearing black leather jacket'/>
          <p>Levi's Denim Shirt</p>
          <p className='org-price'>$70.00</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men6.jpg'} alt='cotton crew neck t-shirts'/>
          <p>Champion Hoodie</p>
          <p className='org-price'>$69.99</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men7.jpg'} alt='woman wearing straight leg jeans'/>
          <p>Tommy Bahama Silk Shirt</p>
          <p className='org-price'>$110.99</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men8.jpg'} alt='black sunglasses'/>
          <p>Hurley Striped Crew Neck</p>
          <p className='org-price'>$50.00</p>
          </div>

        </div>

        {/* bottom div */}

        <div className='shirts-active-parent'>
          <div className='shirts-active-div'><img src={'./assets/shirts-men9.jpg'} alt='man wearing tan shirt'/>
          <p>Theory Cotton Shirt</p>
          <p className='org-price'>$65.00</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men10.jpg'} alt='man wearing navy shirt'/>
          <p>Navy Cotton Dress Shirt</p>
          <p className='org-price'>$89.99</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men11.jpg'} alt='man wearing red dress shirt'/>
          <p>Charter Club Dress Shirt</p>
          <p className='org-price'>$59.00</p>
          </div>

          <div className='shirts-active-div'><img src={'./assets/shirts-men12.jpg'} alt='man wearing floral shirt'/>
          <p>Bahama Floral Shirt</p>
          <p className='org-price'>$80.00</p>
          </div>

        </div>

        
      </div>
      </div>
    </div>
     
     
     )
}

export default MenShirt;