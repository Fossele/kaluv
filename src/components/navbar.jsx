import { BiSearch, BiDownArrow, BiLockOpenAlt, BiHeart, BiCart } from "react-icons/bi"

const NavBar = () => {

    return (
        <nav className="sticky top-0 w-10/12  flex justify-between p-4 m-auto border-b-[0.5px] border-b-cyan-950 bg-white">
            <p>KALUV</p> {/*Brand logo expected here */}
            <div className="flex w-1/3 justify-around items-center">
                <span><BiSearch /></span>
                <span className="flex items-center gap-1">Category<BiDownArrow /></span>
                <span className="flex items-center gap-1 text-center">Sign in <BiLockOpenAlt /></span>
                <span className="flex items-center-safe gap-1"><BiHeart />favourites</span>
                <span className="flex items-center-safe gap-1"><BiCart />Cart</span>
            </div>
        </nav>
    )
}

export default NavBar;