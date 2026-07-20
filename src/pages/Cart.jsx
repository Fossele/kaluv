import toast from "react-hot-toast";
import CartItem from "../components/CartItem";
import { useState } from "react";


const doSubmit = async() => {
    toast.success('Sign Up Successful. You are now logged in');
};

const Cart = ({cardProducts}) => {

    return (
        <div className="flex flex-col gap-4  w-10/12 p-4 m-auto ">
            { cardProducts.map((product) => (<CardItem product= {product}/>))}

            <CartItem />
            <CartItem />
            <CartItem />

            <div className=" flex justify-end gap-2  w-full">
                <button className="bg-indigo-700 text-white p-3 rounded-2xl">Go back to products</button>
                <button className=" border-indigo-700 border p-3 rounded-2xl" onClick={() => doSubmit()}>Go to checkout</button>
            </div>

        </div>
    )
}

export default Cart;


/*
            <div>


                <div>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>

                
                <div>

                    
                    <div>
                        <div>
                            <div>
                                <img src="https://placeholder.com" alt="Hiking Rain Poncho"/>
                                    <button>✕</button>
                            </div>
                            <div>
                                <h3>HIKING RAIN PONCHO 50 - 10 L TURQUOISE</h3>
                                <p>Color: <span>Green-D</span></p>
                                <p>Size: <span>XL</span></p>
                                <div>
                                    <span></span>
                                    <span>In Stock (12 Pcs)</span>
                                </div>
                            </div>
                        </div>
                        <div>$41.78</div>
                        <div>
                            <div>
                                <button>-</button>
                                <input type="text" value="1"/>
                                    <button>+</button>
                            </div>
                        </div>
                        <div>$41.78</div>
                    </div>
        
        
                    <div>
                        <div>
                            <div>
                                <img src="https://placeholder.com" alt="Jacket"/>
                                    <button>✕</button>
                            </div>
                            <div>
                                <h3>HIKING RAIN PONCHO 50 - 10 L TURQUOISE</h3>
                                <p>Color: <span>Green-D</span></p>
                                <p>Size: <span>XL</span></p>
                                <div>
                                    <span></span>
                                    <span>In Stock (1 Pcs)</span>
                                </div>
                            </div>
                        </div>
                        <div>$41.78</div>
                        <div>
                            <div>
                                <button>-</button>
                                <input type="text" value="2">
                                    <button>+</button>
                            </div>
                        </div>
                        <div>$41.78</div>
                    </div>

                    <!-- Item 3 -->
                    <div>
                        <div>
                            <div>
                                <img src="https://placeholder.com" alt="Bag">
                                    <button>✕</button>
                            </div>
                            <div>
                                <h3>BAG- 10 L TURQUOISE</h3>
                                <p>Color: <span>Green-D</span></p>
                                <p>Size: <span>XL</span></p>
                                <div>
                                    <span></span>
                                    <span>In Stock (12 Pcs)</span>
                                </div>
                            </div>
                        </div>
                        <div>$41.78</div>
                        <div>
                            <div>
                                <button>-</button>
                                <input type="text" value="1">
                                    <button>+</button>
                            </div>
                        </div>
                        <div>$41.78</div>
                    </div>

                </div>
            </div> */