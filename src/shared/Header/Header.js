import React, { useState } from 'react';
import Logo from './Logo';
import RightMenu from './RightMenu';
import { useHistory } from 'react-router-dom';
import FixedButtons from './FixedButtons';

export default function Header(props) {
  const [sticky, setsticky] = useState(false);

  const history = useHistory()

  
  window.onscroll = function () {
    myFunction();
  };
  // eslint-disable-next-line no-unused-vars
  function myFunction() {
    if (window.pageYOffset > "0") {
      setsticky(true);
    } else {
      setsticky(false);
    }
  }
  return (
    <>
      <nav
        className={`navbar navbar-light ${sticky ? "sticky" :""} `}
        style={{
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
          justifyContent: 'space-between',
          backgroundColor: '#242526',color: 'white',
          padding: '8px 0px',
          borderRadius: '0px 0px 20px 20px'
        }}>
      <div className="col-md-3 d-flex justify-content-between align-items-center">
      <Logo/>
      </div>
      <div class={`col-md-5 gedf-main d-flex justify-content-between main-items ${sticky ? "stickyy" :""} `}>
        <div onClick={()=>history.push('/')} className={`main-nav-item   d-flex align-items-center ${window.location.pathname === "/" ? "active-nav-item" : ""}`}><i className="fab fa-flickr main-nav" style={{fontSize:"25px",cursor:"pointer"}} ></i></div>
        <div onClick={()=>history.push('/video')} className={`main-nav-item d-flex align-items-center ${window.location.pathname === "/video" ? "active-nav-item" : ""}`}><i className="fab fa-vimeo" style={{fontSize:"25px",cursor:"pointer"}} ></i></div>
        <div onClick={()=>history.push('/Listimage')} className={`main-nav-item  d-flex align-items-center ${window.location.pathname === "/Listimage" ? "active-nav-item" : ""}`}><i className="fas fa-images" style={{fontSize:"25px",cursor:"pointer"}} ></i></div>
        <div onClick={()=>history.push('/Listvideo')} className={`main-nav-item d-flex align-items-center ${window.location.pathname === "/Listvideo" ? "active-nav-item" : ""}`}><i className="fas fa-video" style={{fontSize:"25px",cursor:"pointer",fontWeight:800}} ></i></div>
      </div>
      <div className="col-md-3 d-flex justify-content-around">

      <div className='hide-xs'>
      <RightMenu />
      </div>
      </div>
      {/*
       <SearchBar /> */}
      </nav>
      {props.children}
      <FixedButtons/>

      <style jsx>
        {`
         
        .main-nav{
          padding: 10px;
        }

        .active-nav-item{
          border-bottom: 2px solid #2D8D86;
    color: #2D8D86;
        }

        @media only screen and (max-width: 1200px){
          .main-search{
            display:none !important;
          }
          .main-items{
            margin: 10px;
            border-bottom: 1px solid #353738;
            border-top: 1px solid #353738;
          }
          .stickyy {
            transition: 0.7s;
            position: fixed;
            top: -11px;
            width: 100% !important ;
            left: -11px;
            animation: fadeInDown 1s both 0.2s;
            background-color: #242526;
            -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 100%);
            -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
            box-shadow: 0px 0px 10px rgb(0 0 0 / 100%);
            z-index: 999;
          }
      }


      @media only screen and (min-width: 1200px){
        .sticky {
          transition: 0.7s;
          position: fixed;
          top: 0;
          width: 100% !important ;
          left: 0;
          animation: fadeInDown 1s both 0.2s;
          -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 100%);
          -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
          box-shadow: 0px 0px 10px rgb(0 0 0 / 100%);
          z-index: 999;
        }
      }
         i:hover{
           padding:10px;
          background-color: #18191a;
    border-radius: 10px;
        }
        `}
      </style>
    </>
  );
}
