import axios from "axios";



const getProducts = async() => {
    const list = await axios.get("https://dummyjson.com/products/");
    const products = list.data.products;
    return products;
}

export default getProducts;

