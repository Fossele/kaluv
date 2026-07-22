import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import NavBar from "./components/navbar.jsx";
import Products from "./pages/Products.jsx";
import { useState } from "react";


import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { Toaster } from "react-hot-toast";


const Test = () => {

  return (
    <div className="min-w-40 min-h-40 text-center text-amber-200
  bg-purple-500 transition ease-linear delay-100 duration-[5s] hover:text-blue-700 hover:box-shadow-lg">
      color change
    </div>
  )
}
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

{/*  <Routes>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/home" element={<ProductListing />}></Route>
      <Route path="product/detail:id" element={<ProductDetail />} ></Route>
      <Route path="/signup" element={<Signup />}></Route>

   </Routes> */}