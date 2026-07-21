import {  useContext } from "react";
import { BiSolidStar, BiStar } from "react-icons/bi";

import getProducts from "../utils/getProducts.js";
import { useParams } from "react-router-dom";
import ProductContext from "../utils/productContext.js";


const ProductDetail = ({setCartProducts}) => {

    const { product, _ } = useContext(ProductContext);
    
    return (
        <div className="flex justify-between gap-5 w-10/12 h-lvh m-auto bg-black">
            <div className="w-1/2 h-6/12 bg-gray-200"><img src={product.image} alt="sorry" /></div>
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
                    <p className="flex items-center"> <BiStar /> {product.rating} </p>
                </div>

            </div>
            <b>description</b>
            <p>{product.description}</p>

            <p> {product.availability}</p>

            <div>
                <button onClick={()=>{setCartProducts(...product)}} className="bg-indigo-700 text-white p-3 rounded-2xl" >Add to cart</button>
                <button  className="border-indigo-700 border p-3 rounded-2xl">checkout now</button>
            </div>
        </div>
    )
}

export default ProductDetail;
