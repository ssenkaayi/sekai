import React from 'react';
import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/body/home/home';
// import About from './components/body/about/about';
// import Service from './components/body/service.js/service';
// import Contact from './components/body/contact/contact';


const App = () => {

  return (
    <div>
      <Home/>

      {/* <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

      </BrowserRouter> */}
    </div>
  );


}

export default App;