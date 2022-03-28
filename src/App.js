import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import React from "react";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/' element={<Footer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
