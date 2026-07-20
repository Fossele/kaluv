import { useEffect, useState } from "react";
import ProductListings from "./ProductListing.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { Routes, Route } from "react-router-dom";




const Products = () => {

    return (
        <Routes>
            <Route path="/" element={<ProductListings />} />
            <Route path="/:id" element={<ProductDetail />} />
        </Routes>
    );
}

export default Products;