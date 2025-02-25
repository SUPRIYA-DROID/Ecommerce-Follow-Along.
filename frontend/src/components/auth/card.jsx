// Reusable Card Component
const Card = ({ name, price, image, onAddToCart, onBuyNow }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src={image} alt={name} className="w-full h-50 mt-5 object-contain" />
        <div className="p-4">
          <h3 className="text-xl font-semibold  text-gray-800">{name}</h3>
          <p className="text-lg text-red-600 font-semibold">${price}</p>
  
          <div className="flex justify-between mt-4 mx-4">
            <button
              onClick={onAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add to Cart
            </button>
            <button
              onClick={onBuyNow}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;