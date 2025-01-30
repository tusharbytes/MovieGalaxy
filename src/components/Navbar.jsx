import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartCount = useSelector((state) => state.addListMovie);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Brand Name */}
                <div className="flex items-center gap-2 font-semibold  text-3xl">
                 
                    <Link to="/" className="font-serif hover:text-red-500">MovieGalaxy</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8 text-lg ">
                    <Link to="/" className="hover:text-red-500 font-serif transition duration-300">Home</Link>
                    <Link to="/movies" className="hover:text-red-500 font-serif transition duration-300">Movies</Link>
                    <Link to="/music" className="hover:text-red-500 font-serif transition duration-300">Music</Link>
                    <Link to="/games" className="hover:text-red-500 font-serif transition duration-300">Games</Link>
                    <Link to="/shopping" className="hover:text-red-500 font-serif transition duration-300">Shopping</Link>
                    <Link to="/jobs" className="hover:text-red-500 font-serif transition duration-300">Jobs</Link>

                    {/* Cart Link */}
                    <Link to="/wishlist" className="  flex justify-center items-center hover:text-yellow-300 transition duration-300">
                     
                        {cartCount.movieAdd.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-600   text-xs rounded-full px-2 py-1 animate-pulse">
                                {cartCount.movieAdd.length}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden   focus:outline-none"
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
                <div className="md:hidden  ">
                    <div className="flex flex-col items-center py-4 space-y-4 ">
                        <Link to="/" className="hover:text-red-500 transition duration-300">Home</Link>
                        <Link to="/movies" className="hover:text-red-500 transition duration-300">Movies</Link>
                        <Link to="/music" className="hover:text-red-500 transition duration-300">Music</Link>
                        <Link to="/games" className="hover:text-red-500 transition duration-300">Games</Link>
                        <Link to="/shopping" className="hover:text-red-500 transition duration-300">Shopping</Link>
                        <Link to="/jobs" className="hover:text-red-500 transition duration-300">Jobs</Link>

                        {/* Cart Link */}
                        <Link to="/wishlist" className="relative flex items-center hover:text-yellow-300 transition duration-300">
                         
                            {cartCount.movieAdd.length > 0 && (
                                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1 animate-pulse">
                                    {cartCount.movieAdd.length}
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
