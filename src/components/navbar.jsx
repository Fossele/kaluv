import { BiSearch, BiDownArrow, BiLockOpenAlt, BiHeart, BiCart } from "react-icons/bi"
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="sticky top-0 w-10/12  flex justify-between p-4 m-auto border-b-[0.5px] border-b-cyan-950 bg-white">
            <p>KALUV</p> {/*Brand logo expected here */}
            <div className="flex w-1/3 md:gap-4 justify-around items-center">
                <span><BiSearch /></span>
                <span className="flex items-center gap-1">Category<BiDownArrow /></span>
                <NavLink to="/sign-in" className="flex items-center gap-1 text-center">Sign in <BiLockOpenAlt /></NavLink>
                <NavLink to = "/products/favorite" className="flex items-center-safe gap-1"><BiHeart />favorites</NavLink>
                <NavLink  to ="/cart" className="flex items-center-safe gap-1"><BiCart />Cart</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;

/*<div className="flex w-1/3 justify-around items-center">
                <span><BiSearch /></span>
                <span className="flex items-center gap-1">Category<BiDownArrow /></span>
                <Link to="/sign-in"><span className="flex items-center gap-1 text-center">Sign in <BiLockOpenAlt /></span></Link>
                <Link to="/fav"> <span className="flex items-center-safe gap-1"><BiHeart />favourites</span></Link>
                <Link to="/cart">  <span className="flex items-center-safe gap-1"><BiCart />Cart</span></Link>
            </div>*/