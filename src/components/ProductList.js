import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {
    const [productsArray, setProductsArray] = useState([])
  useEffect(()=>{
     fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        console.log(json);
        setProductsArray(json);
        
    }

  return (
    <div className='flex flex-wrap'>
        {productsArray.map((item)=><ProductCard key={item.id} productsArray = {item} />)}
      
    </div>
  )
}

export default ProductList
