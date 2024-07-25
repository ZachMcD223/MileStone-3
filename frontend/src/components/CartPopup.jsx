import React from "react";

const CartPopup = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <div className="p-4">
          <p>Your cart is currently empty.</p>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;