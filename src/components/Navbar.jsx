import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cartCount = useSelector((state) => state.addListMovie)

    return (
        // Navbar.jsx
        <nav className="bg-black text-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Brand Name */}
                <div className="text-2xl md:text-3xl hover:text-red-600 flex items-center gap-2 font-bold">
                    <Link>
                        <img src="images/Logo.jpg" className="h-10 md:h-12 w-auto" alt="Logo" />
                    </Link>
                    MovieGalaxy
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex text-lg md:text-2xl space-x-4 md:space-x-6">
                    <Link to="/" className="hover:text-red-600">Home</Link>
                    <Link to="/movies" className="hover:text-red-600">Movies</Link>
                    <Link className="hover:text-red-600">Music</Link>
                    <Link to="/games" className="hover:text-red-600">Games</Link>
                    <Link className="hover:text-red-600">TV Show</Link>
                    <Link to={"/wishlist"} className="hover:text-red-600">Carts {cartCount.movieAdd.length === 0 ? "" : cartCount.movieAdd.length}</Link>


                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <RxCross2 />
                    ) : (
                        <CiMenuBurger />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="flex flex-col items-start p-4 space-y-2">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/movies" className="hover:text-gray-300">Movies</Link>
                        <Link className="hover:text-gray-300">Music</Link>
                        <Link to="/games" className="hover:text-gray-300">Games</Link>
                        <Link className="hover:text-gray-300">TV Show</Link>
                        <Link to={"/wishlist"} className="hover:text-red-600">Carts {cartCount.movieAdd.length === 0 ? "" : cartCount.movieAdd.length}</Link>



                    </div>
                </div>
            )}
        </nav>

    );
};

export default Navbar;
