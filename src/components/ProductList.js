import { useState } from 'react';
import ProductCard from './ProductCard';
import useProductData from '../utils/useProductData';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { productsArray, filteredProduct, setFilteredProduct, categories } = useProductData();
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedArray = [...filteredProduct];
    if (order === "low to high") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (order === "high to low") {
      sortedArray.sort((a, b) => b.price - a.price);
    }
    setFilteredProduct(sortedArray);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    let filtered =
      category === "all"
        ? productsArray
        : productsArray.filter((item) => item.category === category);

    setFilteredProduct(filtered);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        🛒 E-Commerce Product Listing
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="low to high">Price: Low → High</option>
          <option value="high to low">Price: High → Low</option>
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => handleCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((item, index) => (
            <option value={item} key={index}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProduct.map((item) => (
          <Link to={"/product/" + item.id} key={item.id}>
            <ProductCard productsArray={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;