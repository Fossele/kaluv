import { BiSearch, BiDownArrow, BiLockOpenAlt, BiHeart, BiCart } from "react-icons/bi"

const NavBar = () => {

    return (
        <nav className="sticky top-0 w-10/12  flex justify-between p-4 m-auto border-b-[0.5px] border-b-cyan-950 bg-white">
            <p>KALUV</p> {/*Brand logo expected here */}
            <div className="flex w-1/3 justify-around items-center">
                <span><BiSearch /></span>
                <span className="flex items-center">Category<BiDownArrow /></span>
                <span className="flex items-center-safe"> sign in <BiLockOpenAlt /></span>
                <span><BiHeart /></span>
                <span><BiCart /></span>
            </div>
        </nav>
    )
}

export default NavBar;