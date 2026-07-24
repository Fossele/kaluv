import getProducts from "../utils/getProducts.js";
import ProductCard from "./ProductCard.jsx";
import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";


const ProductListings = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts([...data]);
                console.log("1. Inside .then() -> Data successfully arrived:", data);
                setLoading(false)
            })
            .catch((err) => {
                console.error("Fetch failed:", err);
            });
    }, []);

    return (
        <div className="grid grid-cols-4 grid-flow-row gap-4 w-10/12 h-fit m-auto p-4">

            {loading ? <div>
                <BiLoaderCircle />
            </div>
                : products.map((product) => (<ProductCard key={product.id}
                    name={product.title}
                    image={product.thumbnail}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                    rating={product.rating}
                    id={product.id}
                    product={product}
                />))}
        </div>
    );
}

export default ProductListings;