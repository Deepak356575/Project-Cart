import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart, cartItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          isInCart={cartItems.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
