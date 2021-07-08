import React from 'react'
import AppRoute from './Routes/AppRoute'
import { ToastContainer } from "react-toastify";
import {BrowserRouter as Router,} from "react-router-dom";
import Header from './shared/Header/Header';

import SearchImage from './pages/ImageAdd/SearchImage'
import SearchVideo from './pages/VideoAdd/SearchVideo'

import ListVideo from './pages/VideoList'
import ListImage from './pages/ImageList'
import './App.css';
require('dotenv').config()

function App() {
  return (
    <div className="App"  style={{backgroundColor: '#18191A',color: 'white',minHeight:"100vh"}}>
              <div class="col-md-12 gedf-main" style={{margin: 'auto'}}>
<ToastContainer/>
      <Router>
        <AppRoute path="/" exact layout={Header} component={SearchImage}/>
        <AppRoute path="/video" exact layout={Header} component={SearchVideo}/>
        <AppRoute path="/Listvideo" exact layout={Header} component={ListVideo}/>
        <AppRoute path="/Listimage" exact layout={Header} component={ListImage}/>
      </Router>
      <style jsx>
        {`
        input{
          background-color:#18191A !important;
          color:white;
          border:none !important;
      }
      .card.gedf-card {
      background-color: #242526;
  
      .active {
          color: white !important;
          border-color: #dee2e6 #dee2e6 #fff !important;
      }
        `}
      </style>
    </div>
    </div>
  );
}

export default App;
