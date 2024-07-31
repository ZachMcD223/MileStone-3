import React from "react";
import { useCart } from "./CartProvider";
import { CartItem } from "./CartPopup";
import '../App.css'; 

const Menu: React.FC = () => {
  const { addToCart } = useCart();

  const items: CartItem[] = [
    { id: 1, name: "Chicken", price: 7.99, quantity: 1 },
    { id: 2, name: "Fries", price: 3.99, quantity: 1 },
    { id: 3, name: "Soda", price: 2.99, quantity: 1 },
    { id: 4, name: "Combo", price: 12.99, quantity: 1 },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-8 bg-white-100 ">Menu</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-md shadow-sm bg-white">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

