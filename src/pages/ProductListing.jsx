import getProducts from "../utils/getProducts.js";
import ProductCard from "../components/ProductCard.jsx";
import ProductContext from "../utils/productContext.js";
import { useEffect, useState, useContext } from "react";



const ProductListings = () => {

    const [products, setProducts] = useState([]);
    //const [loading, setLoading] = useState(true);
    const { chosenProduct, getProductDetail } = useContext(ProductContext);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts([...data]);
                console.log("1. Inside .then() -> Data successfully arrived:", data);
            })
            .catch((err) => {
                console.error("Fetch failed:", err);
            });
    }, []);

    const { id } = useParams();


    return (
        <div className="grid grid-cols-4 grid-flow-row gap-4 w-10/12 h-fit m-auto p-4">

            {products.map((product) => (<ProductCard key={product.id}
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