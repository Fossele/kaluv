import { useEffect, useState } from "react";
import ProductListings from "./ProductListing.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { Routes, Route } from "react-router-dom";
import ProductContext from "../utils/productContext.js";





const Products = () => {

const  [chosenProduct, setChosenProduct] = useState({});

const getProductDetail = (product) =>{
    setChosenProduct(product);
}

const contextValue = {chosenProduct, getProductDetail};



    return (
        <ProductContext.Provider value = {contextValue}>
            <Routes>
                <Route path="/" element={<ProductListings />} />
                <Route path="/:id" element={<ProductDetail />} />
            </Routes>
        </ProductContext.Provider>
    );
}

export default Products;