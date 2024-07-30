import React, { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  updateItemQuantity: (id: number, quantity: number) => void;
}

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose, items, updateItemQuantity, }) => {
  const { removeFromCart, clearCart } = useCart();
  const popupRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

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
    clearCart(); 
    navigate("/");
    onClose();
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40" onClick={onClose}></div>
      <div
        ref={popupRef}
        className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 flex flex-col"
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="text-xl font-bold">
            &times;
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {items.length === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id} className="mb-4 flex justify-between items-center">
                  <div className="w-full flex justify-between">
                    <p className="w-2/3 text-left ml-3">{item.name}</p>
                    <p className="text-left w-1/3 tabular-nums">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded-lg shadow-md bg-gray-200 hover:bg-gray-300 transition duration-300"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded-lg shadow-md bg-gray-200 hover:bg-gray-300 transition duration-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-2 py-1 text-white border rounded-lg shadow-md bg-red-700 hover:bg-red-500 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
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
