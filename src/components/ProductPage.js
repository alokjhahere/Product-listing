import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await data.json();
    setProductDetail(json);
  };

  if (!productDetail) return <div className="text-center mt-10">Loading...</div>;

  const { title, description, price, image, rating, category } = productDetail;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
      >
        ← Back
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-4">
          <img src={image} alt={title} className="h-80 object-contain" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="text-gray-500 mb-2 capitalize">Category: {category}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-lg">⭐ {rating?.rate}</span>
            <span className="text-gray-600 ml-2 text-sm">({rating?.count} reviews)</span>
          </div>
          <h2 className="text-3xl font-semibold text-green-600 mb-6">${price}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
