import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const wishList = useSelector((state) => state.addListMovie);
  const shoppingList = useSelector((state) => state.addProduct.items);
  const countProduct = shoppingList.length;
  const totalCount = wishList.movieAdd.length + countProduct;

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Movies", path: "/movies" },
    { label: "Games", path: "/games" },
    { label: "Shopping", path: "/shopping" },
    { label: "Jobs", path: "/jobs" },
  ];

  return (
    <nav className=" bg-[#1a565a] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl      text-white hover:text-red-500 transition"
        >
          🎥 MovieGalaxy
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-base lg:text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="  hover:text-red-400 transition duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link
            to="/wishlist"
            className="flex items-center gap-2 relative group"
          >
            <MdShoppingCartCheckout className="text-2xl group-hover:text-yellow-400 transition" />
            {(totalCount > 0) && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 animate-pulse">
                {totalCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <CiMenuBurger className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white shadow-inner transition-all duration-300">
          <div className="flex flex-col items-center py-6 space-y-5 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-red-400 transition duration-300"
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}

            {/* Cart Icon (Mobile) */}
            <Link
              to="/wishlist"
              onClick={handleNavClick}
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <MdShoppingCartCheckout className="text-2xl" />
              {(totalCount > 0) && (
                <span className="bg-red-600 text-white text-xs rounded-full px-2 py-0.5 animate-pulse">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
