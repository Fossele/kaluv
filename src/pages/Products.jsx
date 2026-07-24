import ProductListings from "../components/ProductListing.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import { Routes, Route } from "react-router-dom";


const Products = ({ setCartProducts }) => {

    return (
        <Routes>
            <Route path="/" element={<ProductListings />} />
            <Route path="/detail/:id" element={<ProductDetail setCartProducts={setCartProducts} />} />
        </Routes>
    );
}



export default Products;