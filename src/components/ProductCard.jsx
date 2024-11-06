import React from 'react';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="border p-4 rounded shadow-xl flex flex-col">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
      <p className="text-gray-600 mt-2">₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className={`mt-auto px-4 py-2 rounded ${
          isInCart
            ? 'bg-violet-600 hover:bg-violet-800'
            : 'bg-orange-500 hover:bg-orange-600'
        } text-white`}
        disabled={isInCart}
      >
        {isInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
