import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import NavBar from "./components/navbar.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ProductListing from "./pages/ProductListing.jsx";


const Test = () => {

  return (
    <div className="min-w-40 min-h-40 text-center text-amber-200
     bg-purple-500 transition ease-linear delay-100 duration-[5s] hover:text-blue-700 hover:box-shadow-lg
      
     ">
      color change
    </div>
  )
}
export default function App() {
  return (

    <div >
      <NavBar></NavBar>
      <ProductDetail></ProductDetail>
    </div>

  )
}
