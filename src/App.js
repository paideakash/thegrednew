import React from 'react';
import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import Products from './Products';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import Detail from './Detail';


function App() {
  return (
    <>
       <BrowserRouter>
          <Navbar />
          {/* <Home/> */}
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="details/:id" element={<Detail/>} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
       </BrowserRouter>
    </>        
  );
}

export default App;
