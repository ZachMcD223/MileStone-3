import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import CartPopup from "./CartPopup";
import { useCart } from "./CartProvider";
import { CurrentCustomer } from "./users/CurrentCustomer"; 

interface NavLinksProps {
  handleCartClick: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleCartClick }) => {
  const { currentCustomer } = useContext(CurrentCustomer); 

  return (
    <>
      <NavLink
        to="/menu"
        className="text-black text-2xl p-6 transition duration-300 hover:text-white"
        style={{ marginRight: "50px" }}
      >
        Menu
      </NavLink>
      <NavLink
        to={currentCustomer ? "/customers/profile" : "/customers/sign-in"} 
        className="text-black text-2xl p-6 transition duration-300 hover:text-white flex items-center"
        style={{ marginRight: "50px" }}
      >
        <img
          src="/images/user-solid.svg"
          alt="User icon"
          className="h-8 w-8 mr-3 inline-block align-middle"
        />
        {currentCustomer ? "Profile" : "Sign-In/Join"} 
      </NavLink>
      <button
        className="text-black text-2xl p-6 transition duration-300 hover:text-white"
        style={{ marginRight: "50px" }}
        onClick={handleCartClick}
      >
        <img
          src="/images/shopping-cart-solid.svg"
          alt="Shopping cart icon"
          className="h-8 w-8 inline-block align-middle"
        />
      </button>
    </>
  );
};

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleCloseNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden md:flex w-full justify-between">
          <NavLinks handleCartClick={handleCartClick} />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <MenuIcon />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks handleCartClick={handleCartClick} />
        </div>
      )}
      <CartPopup isOpen={isCartOpen} onClose={closeCart} items={cartItems} />
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={handleCloseNavbar}></div>
      )}
    </>
  );
};

export default Nav;
