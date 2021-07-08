import React from 'react';

export default function SearchBar() {
  return (
    <>
      <div className="d-flex ">
      <i class="fa fa-search" style={{position: 'relative',left: '28px',top: '12px'}}></i>
      <input type="text" style={{borderRadius:"20px", border:"1px solid white !important",width: '180px',outline: 'none',paddingLeft: '40px',height:'40px'}}/>
      </div>
    </>
  );
}
