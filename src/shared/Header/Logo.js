import React from 'react';
import RightMenu from './RightMenu';

export default function Logo() {
  return (
    <>
    <div>

      <img
      alt='logo'
        width={45}
        height={45}
        src='hmedbook.png'
        style={{ borderRadius: '50%', marginRight: 5 }}
      />
      <a href='/' className='navbar-brand hide-xs' style={{color:'white'}}>
        HmedBook
      </a>
    </div>
      <div className="hide-xl">
      
      <RightMenu/>
      </div>

      <style jsx>
        {`
                @media only screen and (min-width: 1200px){

        .hide-xl{
          display:none !important;
        }
      }

      @media only screen and (max-width: 1200px){

        .show-xl{
          display:flex !important;
        }
        .hide-xs{
          display:none !important;
        }
      }
        `}
      </style>
    </>
  );
}
