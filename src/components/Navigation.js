import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Search from './Search';


const Navigation = () => {
    return (
      
      <div className='nav-bar'>
        
         <div>
        {/* <Link to='/' className='link' style={{position: 'relative', right: 78}}>DARROW LANE</Link> */}
        <Link to='/' className='link' style={{position: 'relative', right: 58}}><img src='../assets/darrow.png' alt=''/></Link>

         </div>

         <div>
        <Link to='/about' className='link'>ABOUT</Link>
        </div>

        <div>
        <Link to='/men' className='link'>MEN</Link>
        </div>

        <div>
        <Link to='/women' className='link'>WOMEN</Link>
        </div>

        <div>
        <Link to='/shoes' className='link'>SHOES</Link>
        </div>

        <div>
        <Link to='/accessories' className='link'>ACCESSORIES</Link>
        </div>

        <div>
        <Link to='/sale' className='link' style={{color:'red'}}>SALE</Link>
        </div>
        <div>
          <Search />
        </div>
        {/* <div><Banner /></div> */}
        
      </div>
    )
}

export default Navigation;


