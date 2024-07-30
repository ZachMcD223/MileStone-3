import React, { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  // Add other necessary fields
}

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose, items }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  if (!isOpen) return null;

  const handleCheckoutClick = () => {
    navigate("/checkout");
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40" onClick={onClose}></div>
      <div ref={popupRef} className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {items.length === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id} className="mb-4">
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4">
          <button
            onClick={handleCheckoutClick}
            className="w-full py-3 bg-red-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-500 transition duration-300"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
