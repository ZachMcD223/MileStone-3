// with some help from https://www.youtube.com/watch?v=78YM00SO6uk
import React from "react";
import Logo from "./Logo";


export const Header = () => {
  return (
    <header className="bg-DarkRed sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-6">
      <Logo />
 
    </header>
  );
};

export default Header;