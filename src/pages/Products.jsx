import { useState } from "react";
import ProductListings from "../components/ProductListing.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import { Routes, Route } from "react-router-dom";
import ProductContext from "../utils/productContext.js";





const Products = ({setCartProducts}) => {

const  [chosenProduct, setChosenProduct] = useState({});

const getProductDetail = (product) =>{
    setChosenProduct(product);
}

const contextValue = {chosenProduct, getProductDetail};



    return (
        <ProductContext.Provider value = {contextValue}>
            <Routes>
                <Route path="/" element={<ProductListings />} />
                <Route path="/:id" element={<ProductDetail setCartProducts={setCartProducts}/>} />
            </Routes>
        </ProductContext.Provider>
    );
}

export default Products;