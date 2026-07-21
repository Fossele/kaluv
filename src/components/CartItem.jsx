import { useState } from "react";

const CartItem = ({product}) => {

    const [count, setCount] = useState(0);

    return (


        <div className="flex justify-around items-center gap-4 border-fuchsia-900 border rounded-2xl">
            <div className="flex justify-between gap-3">
                <div>
                    <img src="https://placeholder.com" alt="Bag" className="w-10 h-10 bg-indigo-100" />
                    <button>✕</button>
                </div>
                <div className="flex flex-col">
                    <h3>BAG- 10 L TURQUOISE</h3>
                    <p>Color: <span>Green-D</span></p>
                    <p>Size: <span>XL</span></p>

                </div>
            </div>
            <div>
                <span></span>
                <span>In Stock (12 Pcs) {product.title}</span>
            </div>
            <div>$41.78</div>
            <div>
                <div className="flex">
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
            <div>$41.78</div>
        </div>
    )
}

export default CartItem;