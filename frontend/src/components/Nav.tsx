// with some help from https://www.youtube.com/watch?v=78YM00SO6uk
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/menu" className="text-black text-2xl p-6" style={{ marginRight: '50px'}}>Menu</NavLink>
      <NavLink to="/sign-in" className="text-black text-2xl p-6" style={{ marginRight: '50px'}}>Sign-In/Join</NavLink>
      <NavLink to="/cart" className="text-black text-2xl p-6" style={{ marginRight: '50px'}}>Cart</NavLink>
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