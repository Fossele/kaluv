import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import NavBar from "./components/navbar.jsx";
import Products from "./pages/Products.jsx";
import { useState } from "react";


import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { Toaster } from "react-hot-toast";


export default function App() {
    
const [cardProducts, setCartProducts] = useState([]);

  return (
    <div className="h-lvh">    
        <Toaster position="top-right" />
        <NavBar />
        <Routes>
          <Route path="/sign-in" element = {<Login/>} />
          <Route path="/sign-up" element = {<Signup/>} />
          <Route path="/products/*" element={<Products setCartProducts={setCartProducts}/>} />
          <Route path="/cart" element={<Cart cardProducts={cardProducts}/>} />
        </Routes>   
    </div>

  );
}

