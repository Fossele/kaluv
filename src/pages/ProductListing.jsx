import getProducts from "../utils/getProducts.js";
import ProductCard from "../components/ProductCard.jsx";
import { useEffect, useState } from "react";


const ProductListing = () => {

    const [products, setProducts] = useState([]);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((data) => {
                // 2. data here is exactly your array of products. Pass it directly.
                setProducts([... data ]);
                console.log("1. Inside .then() -> Data successfully arrived:", data);
            })
            .catch((err) => {
                console.error("Fetch failed:", err);
            });

        // 🚨 REMEMBER: This log will ALWAYS print [] on first load.
        // That is completely normal! React state is asynchronous.
        console.log("2. Inside useEffect body -> State is not updated yet:", products);
    }, []);

    return (
        <div className="grid grid-cols-4 grid-flow-row gap-4 w-10/12 h-fit m-auto p-4">

            {products.map((product) => (<ProductCard key={product.id}
                name={product.title}
                image={product.thumbnail}
                price={product.price}
                discountPercentage={product.discountPercentage}
                rating={product.rating} />))}
        </div>
    );
}

export default ProductListing;