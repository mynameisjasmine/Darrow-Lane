import React from 'react';


const MensPolo = () => {
    return (
    <div className='container'>
    <div className='polo-main'>

    <div className='shirtsmenu'>
       <p className='shirts-text'>Shirt Type</p>
       {/* <Link to='menspolo' className='menu-link'><p className='shirts-menu-text'>Polo Shirts</p></Link> */}
       <p className='shirts-menu-text'>Dress Shirts</p>
       <p className='shirts-menu-text'>T-Shirts</p>
       <p className='shirts-menu-text'>Hoodies</p>
       {/* <p className='shirts-menu-text'>Henleys</p> */}
       
  
       {/* <div className='m-sale-div'>
       <p className='m-sale-text'>Men's Sale</p>
       <p className='shirts-menu-text'>Shirts</p>
       <p className='shirts-menu-text'>Pants</p>
       <p className='shirts-menu-text'>Shoes</p>
       <p className='shirts-menu-text'>Accessories</p>
        </div> */}
  
       </div>

       <div className='shirts-title'>POLOS</div>

    <div className='shirts-active-div'><img src={'./assets/shirts-men3.jpg'} alt='man wearing black polo shirt'/>
          <p>Polo Shirt</p>
          <p className='org-price'>$60.99</p>
          </div>

    <div className='shirts-active-div'><img src={'./assets/shirts-men9.jpg'} alt='man wearing tan shirt'/>
    <p>Theory Cotton Shirt</p>
    <p className='org-price'>$65.00</p>
         </div>

    <div className='shirts-active-div'><img src={'./assets/mens-polo1.jpg'} alt='man wearing black polo shirt'/>
          <p>Theory Cotton Shirt</p>
          <p className='org-price'>$65.00</p>
          </div>


    </div>

    </div>
    )
}

export default MensPolo;