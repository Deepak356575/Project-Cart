import React from 'react';

const CartModal = ({ cart, onClose, onRemoveFromCart }) => {
  const totalCartValue = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>₹{item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold">Total: ₹{totalCartValue.toFixed(2)}</h3>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button onClick={onClose} className="mt-4 bg-red-500 px-4 py-2 rounded text-white ">
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
