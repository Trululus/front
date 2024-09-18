import React from 'react';
import '../styles/Search.css'

const Search = () => {
  return (
    <div className='search'>
      <div className='icon'>
        <div className='search-icon'></div> 
        </div>
      <input type='text' placeholder='Type your search...' />
    </div>
  );
};

export default Search;