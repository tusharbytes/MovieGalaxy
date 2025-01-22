import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Left Side - Brand Name */}
                <div className="text-3xl hover:text-red-600 justify-center items-center gap-1  flex font-bold">
                    <Link className="hover:text-gray-300">
                        <img src="images/Logo.jpg" className=" h-[50px] w-[80px]" />
                    </Link>
                    MovieGalaxy
                </div>

                {/* Right Side - Navigation Links (Desktop) */}
                <div className="hidden md:flex text-2xl space-x-6">
                    <Link to={"/"} className="hover:text-red-600 transition duration-200">
                        Home
                    </Link>
                    <Link to={"/movies"} className="hover:text-red-600 transition duration-200">
                        Movies
                    </Link>
                    <Link className="hover:text-red-600 transition duration-200">
                        Music
                    </Link>
                    <Link to={"/games"} className="hover:text-red-600 transition duration-200">
                        Games
                    </Link>
                    <Link className="hover:text-red-600 transition duration-200">
                        TV Show
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle mobile menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 transform translate-y-0 transition-transform duration-300 ease-in-out">
                    <div className="flex flex-col items-start px-6 py-4 space-y-2">
                        <Link to={"/"} className="hover:text-gray-300">Home</Link>
                        <Link to={"/movies"} className="hover:text-gray-300">Movies</Link>
                        <Link className="hover:text-gray-300">Music</Link>
                        <Link   to={"/games"} className="hover:text-gray-300">Games</Link>
                        <Link className="hover:text-gray-300">TV Show</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
