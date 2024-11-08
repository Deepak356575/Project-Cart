import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

 
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      if (!prevCart.find(item => item.id === product.id)) {
        return [...prevCart, { ...product, quantity: 1 }];
      }
      return prevCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={openModal} />
      <ProductList 
        products={products} 
        onAddToCart={addToCart} 
        cartItems={cart}
      />

      {isModalOpen && (
        <CartModal
        cart={cart}
          onClose={() => setIsModalOpen(false)}
          onRemoveFromCart={removeFromCart}
          />
                   )}
    </div>
  );
}

export default App;
