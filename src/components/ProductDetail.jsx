import { useParams } from "react-router-dom";
import {  BiStar } from "react-icons/bi";
import getProducts from "../utils/getProducts.js";
import { useState, useEffect,  Fragment } from "react";



const ProductDetail = ({ setCartProducts }) => {

    const  {id} = useParams();
    const [product, setProduct] = useState({}); 
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            getProducts()
                .then((data) => {
                    setProduct(data.find(item => item.id == id));
                    console.log(product);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Fetch failed:", err);
                });
        }, [id]);

    return (
        <div className="flex justify-between gap-5 w-10/12 h-4/5 m-auto">
            {!loading ? (<Fragment>
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
                    <button onClick={() => { setCartProducts(...product) }} className="bg-indigo-700 text-white p-3 rounded-2xl" >Add to cart</button>
                    <button className="border-indigo-700 border p-3 rounded-2xl">checkout now</button>
                </div>
            </Fragment>)
                : (<div className="text-indigo-400 text-center"> loading...</div>)}
        </div>
    )
}

export default ProductDetail;
