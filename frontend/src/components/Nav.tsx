// with some help from https://www.youtube.com/watch?v=78YM00SO6uk
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


const NavLinks = () => {
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
        to="/sign-in"
        className="text-black text-2xl p-6 transition duration-300 hover:text-white flex items-center"
        style={{ marginRight: "50px" }}
      >
        <img
          src="/images/user-solid.svg"
          alt="User icon from FontAwesome"
          className="h-8 w-8 mr-3 inline-block align-middle"
        />
        Sign-In/Join
      </NavLink>
      <NavLink
        to="/cart"
        className="text-black text-2xl p-6 transition duration-300 hover:text-white"
        style={{ marginRight: "50px" }}
      >
        <img
          src="/images/shopping-cart-solid.svg"
          alt="shopping cart icon from FontAwesome"
          className="h-8 w-8 inline-block align-middle"
        />
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden md:flex w-full justify-between ">
          <NavLinks />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
