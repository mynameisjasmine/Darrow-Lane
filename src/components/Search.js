import React from 'react';
import '../index.css';


const Search = () => {
    return (
        <form action='/' method='get'>
          <label htmlFor='search'>
            <span className='hidden'>Search</span>
          </label>
          <input
          type='text'
          id='search'
          placeholder='search here...'
          name='s'
          />
          <button type='submit' className='button'><img src={'./assets/loupe.png'} alt=''/></button>
        </form>
        
    )
}

export default Search;