
import { useState, useEffect } from 'react';

const useProductData = (id) => {
     const [productsArray, setProductsArray] = useState([]);
     const [filteredProduct, setFilteredProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
     fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        setProductsArray(json);
        setFilteredProduct(json);
        setCategories(["all", ...new Set(json.map((item) => item.category))])
    }

  return {productsArray, setProductsArray, filteredProduct, setFilteredProduct, categories, setCategories}
}

export default useProductData
