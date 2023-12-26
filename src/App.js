import React from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Lodging from './pages/Lodging';
import Header from './layout/Header';
import Footer from './layout/Footer';
import "../src/style/utils/reset.scss";


function App() {
  return (
    <BrowserRouter>
      <div>
          <Header/>
          
          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/lodging/:id" element={<Lodging/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<Error404 />} />
          </Routes>
      </div>
      
          <Footer/> 
    </BrowserRouter> 
  );
}

export default App;