import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `relative text-sm font-semibold transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300 ${isActive
            ? "text-indigo-600 after:w-full after:bg-indigo-600"
            : "text-gray-600 hover:text-indigo-600 after:w-0 hover:after:w-full after:bg-indigo-400"
        }`;

    return (
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform duration-200">
                            <img src={logo} alt="logo" />
                        </div>
                        <span className="text-xl font-black text-gray-900 tracking-tight">
                            Vista Mart<span className="text-indigo-600">.</span>
                        </span>
                    </NavLink>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/" end className={linkClass}>Home</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Search icon */}
                        <HashLink smooth to={'#search'} className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </HashLink>

                        {/* Cart */}
                        <NavLink to="/cart" className="relative p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
                        </NavLink>

                        {/* Wishlist */}
                        <NavLink to="/wishlist" className="p-2 text-gray-500 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </NavLink>

                        <div className="w-px h-6 bg-gray-200 mx-1" />

                        <NavLink
                            to="/login"
                            className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-200 hover:shadow-indigo-300 hover:scale-[1.02] active:scale-100 transition-all duration-200"
                        >
                            Sign Up
                        </NavLink>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
                <div className="px-4 py-4 space-y-1 bg-white">
                    {[
                        { to: "/", label: "Home", end: true },
                        { to: "/about", label: "About" },
                        { to: "/cart", label: "🛍️ Cart" },
                        { to: "/wishlist", label: "🤍 Wishlist" },
                    ].map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${isActive
                                    ? "bg-indigo-50 text-indigo-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    <div className="pt-3 border-t border-gray-100 flex gap-2">
                        <NavLink to="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-indigo-600 border border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors">Login</NavLink>
                        <NavLink to="/register" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;