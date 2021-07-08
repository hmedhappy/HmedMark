import React from 'react';
import SearchBar from './SearchBar';
export default function RightMenu() {
  return (
    <>
      <div className='col-md-3 d-flex align_items-center justify-content-evenly' style={{justifyContent: 'space-between',padding: '0'}}>
      <SearchBar/>
             </div>
    </>
  );
}
