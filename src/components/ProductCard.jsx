import { useNavigate } from "react-router-dom";
import { BiSolidArrowToRight, BiStar } from "react-icons/bi";


const ProductCard = ({ name, image, price, discountPercentage = 0, rating, id}) => {
    

    const navigate = useNavigate();
    const handleClick = () => {navigate(`detail/${id}`); }

    return (
        <div className=" border-indigo-700 bg-indigo-100 border transition duration-500 hover:shadow-[0_0_25px_rgba(0,0,0,0.08)] p-2.5">
            <img src={image} alt={name} />
            <p>{name}</p>

            <div className="flex justify-between items-center ">
                {discountPercentage ? <div>
                    <span>{Math.floor(((price - (price * (Math.floor(discountPercentage * 100) / 10000)))) * 100) / 100}$</span>
                    <span className="line-through font-light">{price}$</span>
                </div> : <div>
                    <span>{price}$</span>
                </div>
                }
                <p className="flex items-center"> <BiStar /> {rating} </p>
            </div>
            <button className="flex items-center bg-indigo-700" onClick={handleClick}><p>Get detail</p> <BiSolidArrowToRight /> </button>
        </div>
    );
}

export default ProductCard;