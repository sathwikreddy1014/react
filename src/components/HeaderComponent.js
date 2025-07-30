import { LOGO_URL } from "../utils.js/Ct";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Wifi, WifiOff, Home, Info, Phone, Search, Menu, X } from "lucide-react";
import useonlineStatus from "../utils.js/customonlineStatus.js";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const [btnName, setbtnName] = useState("Login");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isonlineStatus = useonlineStatus();
    const location = useLocation();

    const isActiveLink = (path) => location.pathname === path;

    const totalCartItems = cartItems.reduce((total, item) => total + (item.card?.info?.quantity || 1), 0);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-orange-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img 
                                className="relative h-12 w-12 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-200 object-cover" 
                                src={LOGO_URL} 
                                alt="FoodHub Logo"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                FoodHub
                            </h1>
                            <p className="text-xs text-gray-500 -mt-1">Delicious delivered</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                                isActiveLink('/') 
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                            }`}
                        >
                            <Home size={18} />
                            <span className="font-medium">Home</span>
                        </Link>

                        <Link 
                            to="/about" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                                isActiveLink('/about') 
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                            }`}
                        >
                            <Info size={18} />
                            <span className="font-medium">About</span>
                        </Link>

                        <Link 
                            to="/contact" 
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                                isActiveLink('/contact') 
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                            }`}
                        >
                            <Phone size={18} />
                            <span className="font-medium">Contact</span>
                        </Link>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Online Status */}
                        <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100">
                            {isonlineStatus ? (
                                <Wifi size={16} className="text-green-500" />
                            ) : (
                                <WifiOff size={16} className="text-red-500" />
                            )}
                            <span className="text-sm font-medium text-gray-600">
                                {isonlineStatus ? 'Online' : 'Offline'}
                            </span>
                        </div>

                        {/* Cart */}
                        <Link 
                            to="/cart" 
                            className="relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <ShoppingCart size={18} />
                            <span className="font-medium hidden sm:inline">Cart</span>
                            {totalCartItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                                    {totalCartItems}
                                </span>
                            )}
                        </Link>

                        {/* Login Button */}
                        <button 
                            className="flex items-center space-x-2 px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 font-medium"
                            onClick={() => {
                                setbtnName(btnName === "Login" ? "Logout" : "Login");
                            }}
                        >
                            <User size={18} />
                            <span className="hidden sm:inline">{btnName}</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
                        <nav className="flex flex-col space-y-2">
                            <Link 
                                to="/" 
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                    isActiveLink('/') 
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                                        : 'text-gray-700 hover:bg-orange-50'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Home size={20} />
                                <span className="font-medium">Home</span>
                            </Link>

                            <Link 
                                to="/about" 
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                    isActiveLink('/about') 
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                                        : 'text-gray-700 hover:bg-orange-50'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Info size={20} />
                                <span className="font-medium">About</span>
                            </Link>

                            <Link 
                                to="/contact" 
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                    isActiveLink('/contact') 
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                                        : 'text-gray-700 hover:bg-orange-50'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Phone size={20} />
                                <span className="font-medium">Contact</span>
                            </Link>

                            <div className="flex items-center space-x-3 px-4 py-3 text-gray-600">
                                {isonlineStatus ? (
                                    <Wifi size={20} className="text-green-500" />
                                ) : (
                                    <WifiOff size={20} className="text-red-500" />
                                )}
                                <span className="font-medium">
                                    Status: {isonlineStatus ? 'Online' : 'Offline'}
                                </span>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderComponent;