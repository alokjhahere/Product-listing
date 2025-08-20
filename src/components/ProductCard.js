
const ProductCard = ({productsArray}) => {
    const {image, id, description, title, price, category
} = productsArray;
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition">
      <img className="h-40 mx-auto object-contain" src={image}/>
      <h2 className="mt-2 font-semibold text-sm truncate">{title}</h2>
      <p className="text-gray-600 text-xs">{category}</p>
      <p className="font-bold mt-1">{price}</p>
      
      
    </div>
  )
}

export default ProductCard
