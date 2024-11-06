import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => (
  <nav className="flex justify-between items-center p-4 bg-orange-500 text-white">
    <h1 className="text-2xl font-bold pl-10 text-violet-900">Ozbourne"</h1>
    <input className="rounded-lg pl-10 hidden md:block lg: w-2/4 h-10 text-gray-600  text-lg" type="text" placeholder='         Search ' />
    <button onClick={onCartClick} className="relative bg-violet-800 p-3 rounded-xl">
      Cart
      <span className="ml-2 bg-green-600 rounded-3xl px-2 py-1 text-xs">
        {cartCount}
      </span>
    </button>
  </nav>
);

export default Navbar;
