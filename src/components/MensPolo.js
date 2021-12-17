import React from 'react';


const MensPolo = () => {
    return (
    <div className='container'>
    <div className='polo-main'>

    <div className='polomenu'>
       <p className='polo-text'>Shirt Type</p>
       {/* <Link to='menspolo' className='menu-link'><p className='shirts-menu-text'>Polo Shirts</p></Link> */}
       <p className='polo-menu-text'>Dress Shirts</p>
       <p className='polo-menu-text'>T-Shirts</p>
       <p className='polo-menu-text'>Hoodies</p>
       {/* <p className='shirts-menu-text'>Henleys</p> */}
       
  
       </div>

       <div className='polo-title'>POLOS</div>
      
      <div className='polo-active-parent'>

    <div className='polo-active-div'><img src={'./assets/shirts-men3.jpg'} alt='man wearing black polo shirt'/>
          <p>Polo Shirt</p>
          <p className='org-price'>$60.99</p>
          </div>

    <div className='polo-active-div'><img src={'./assets/shirts-men9.jpg'} alt='man wearing tan shirt'/>
    <p>Theory Cotton Shirt</p>
    <p className='org-price'>$65.00</p>
         </div>

    <div className='polo-active-div'><img src={'./assets/mens-polo1.jpg'} alt='man wearing black polo shirt'/>
          <p>Theory Cotton Shirt</p>
          <p className='org-price'>$65.00</p>
          </div>

          
          </div>
          
    </div>

    </div>
    )
}

export default MensPolo;