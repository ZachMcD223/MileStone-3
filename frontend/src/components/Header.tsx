// with some help from https://www.youtube.com/watch?v=78YM00SO6uk
import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="bg-red-background sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-6">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;