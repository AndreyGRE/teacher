import './App.css';
import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer/index.js'
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Glav from './Pages/Glav/index.js';
import Me from './Pages/me/index.js';
import Perents from "./Pages/perents/index.js";
import Contact from './Pages/contact/index.js';


function App(props) {
  return (
    <div className='ap' >
      <BrowserRouter>
        <Header/>
        <div className='herf'> 
        
          <Routes>
            <Route path='/glav'         element={<Glav/>} />
            <Route path='/about-me'     element={<Me/>} />
            <Route path='/for-parents'  element={<Perents/>} />
            <Route path='/contacts'     element={<Contact/>} />
          </Routes>
        </div> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
