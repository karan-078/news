import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Singleproduct from "./component/Singleproduct";
import Product from "./component/Product";
import Login from "./component/Login";
import Dashbord from "./component/Dashbord";
import { useState } from "react";
const App = () => {

  const [user,setUser]= useState(null)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/dashbord" element={<Dashbord user={user} />} />
            <Route path="product/:productId" element={<Singleproduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
