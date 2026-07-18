import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import NavBar from "./components/navbar.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ProductListing from "./pages/ProductListing.jsx";


import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";


const Test = () => {

  return (
    <div className="min-w-40 min-h-40 text-center text-amber-200
     bg-purple-500 transition ease-linear delay-100 duration-[5s] hover:text-blue-700 hover:box-shadow-lg
      
     ">
      color change
    </div>
  )
}
export default function App() {
  return (
    <>
       <NavBar/>
      <Cart />
    </>

  );
}

{/*  <Routes>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/home" element={<ProductListing />}></Route>
      <Route path="product/detail:id" element={<ProductDetail />} ></Route>
      <Route path="/signup" element={<Signup />}></Route>

   </Routes> */}