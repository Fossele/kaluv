import { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import getProducts from "./utils.js";

const ProductDetail = ({product}) => {

    const [products, setProducts] = useState([]);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((data) => {
                // 2. data here is exactly your array of products. Pass it directly.
                setProducts([...data]);
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
        <div className="flex justify-between gap-5 w-10/12 h-lvh m-auto bg-black">
            <div className="w-1/2 h-6/12 bg-blue-600"><img src={product.image} alt="sorry" /></div>
            <div className="w-1/2 h-6/12 bg-white">
                <p>{product.brand}</p>
                <h1>{product.title}</h1>
                <div className="flex justify-between items-center ">
                    {product.discountPercentage ? <div>
                        <span>{Math.floor(((product.price - (product.price * (Math.floor(product.discountPercentage * 100) / 10000)))) * 100) / 100}$</span>
                        <span className="line-through font-light">{product.price}$</span>
                    </div> : <div>
                        <span>{product.price}$</span>
                    </div>
                    }
                    <p className="flex items-center"> <BiStar /> {rating} </p>
                </div>

            </div>
            <b>description</b>
            <p>{product.description}</p>

            <p> {product.availability}</p>

            <div>
                <button>Add to cart</button>
                <button>checkout now</button>
            </div>
        </div>
    )
}

export default ProductDetail;