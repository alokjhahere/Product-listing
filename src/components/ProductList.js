import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {
    const [productsArray, setProductsArray] = useState([])
    const [filteredProduct, setFilteredProduct] = useState([])
    const [sortOrder, setSortOrder] = useState("")
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    useEffect(()=>{
     fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        console.log(json);
        setProductsArray(json);
        setFilteredProduct(json);
        setCategories(["all", ...new Set(json.map((item) => item.category))])
    }


    const handleSort =(order) => {
           setSortOrder(order);
           let sortedArray = [...filteredProduct]
           if(order === "low to high"){
            sortedArray.sort((a, b) => a.price - b.price)
           }else if(order === "high to low"){
            sortedArray.sort((a, b) => b.price - a.price)
           }

           setFilteredProduct(sortedArray)
    }

    const handleCategory = (category) => {
      setSelectedCategory(category);
      let filtered = category === "all" ? productsArray
      : productsArray.filter((item)=>item.category === category)

      setFilteredProduct(filtered)
    }


  
  return (
    <div className='p-6 bg-gray-200'>
      <h1 className="text-2xl font-bold mb-6">E-Commerce Product Listing</h1>
    <div className="flex gap-4 mb-6">
        <select value={sortOrder} onChange={(e)=>handleSort(e.target.value)} className="px-3 py-2 border rounded">
            <option value="">Sort By</option>
            <option value="low to high">Price : Low to High</option>
            <option value="high to low">Price : High to Low</option>
        </select>

        <select value={selectedCategory} onChange={(e)=>handleCategory(e.target.value)} className="px-3 py-2 border rounded">
            {categories.map((item, index)=> <option value={item} key={index}>{item}</option>)}
        </select>
      </div>
    <div className="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProduct.map((item)=><ProductCard key={item.id} productsArray = {item} />)}
    </div>
    </div>
  )
}

export default ProductList
