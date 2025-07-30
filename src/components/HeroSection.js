import React from 'react';
import { Search, ChefHat, Utensils, Star, Zap, Percent, Award, Pizza, Coffee, Soup, Cookie, IceCream, Salad } from "lucide-react";

const HeroSection = ({ searchText, setsearchText, handleSearch, handleKeyPress, activeFilter, setActiveFilter }) => {
    return (
        <div className="relative bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-white">
                    <Pizza size={60} />
                </div>
                <div className="absolute top-20 right-20 text-white">
                    <Coffee size={40} />
                </div>
                <div className="absolute bottom-20 left-20 text-white">
                    <Soup size={50} />
                </div>
                <div className="absolute bottom-10 right-10 text-white">
                    <Cookie size={45} />
                </div>
                <div className="absolute top-1/2 left-1/4 text-white">
                    <IceCream size={35} />
                </div>
                <div className="absolute top-1/3 right-1/3 text-white">
                    <Salad size={55} />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <div className="flex justify-self-start items-center -mt-14 md:mt-0 mb-2 md:mb-6 ">
                        <ChefHat className="text-white mr-4 " size={50} />
                        <h1 className="text-3xl md:text-7xl font-bold text-white hidden md:inline">
                            FoodieHub
                        </h1>
                    </div>
                    <p className="hidden md:inline sm:inline text-2xl text-orange-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                        🍕 Craving something delicious? Discover mouth-watering dishes from the best restaurants in your city! 🍔
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced Search Bar */}
                    <div className="relative mb-8 -mt-24 md:-mt-0 ml-14 md:ml-0">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                            className="w-full pl-4 md:pl-16 pr-6 py-4 md:py-5 border-0 rounded-3xl focus:ring-4 focus:ring-white/30 outline-none transition-all duration-300 text-sm md:text-lg placeholder-gray-500 bg-white/95 backdrop-blur-sm shadow-2xl "
                            type="text"
                            placeholder="🔍 Search for pizza, burger, biryani, or your favorite restaurant..."
                            value={searchText}
                            onChange={(e) => setsearchText(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="absolute right-3 top-3 bottom-3 px-8 bg-gradient-to-r from-orange-500 to-red-500
                             text-white rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 "
                            onClick={handleSearch}
                        >
                        Search
                        </button>
                    </div>

                    {/* Enhanced Filter Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center text-sm md:text-lg">
                        <button
                            className={` flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                activeFilter === 'all'
                                    ? 'bg-white text-orange-600 shadow-2xl'
                                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                            }`}
                            onClick={() => setActiveFilter('all')}
                        >
                            <Utensils size={18} />
                            <span>All Restaurants</span>
                        </button>

                        <button
                            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                activeFilter === 'top'
                                    ? 'bg-white text-orange-600 shadow-2xl'
                                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                            }`}
                            onClick={() => setActiveFilter('top')}
                        >
                            <Star size={18} />
                            <span>⭐ Top Rated</span>
                        </button>

                        <button
                            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                activeFilter === 'fast'
                                    ? 'bg-white text-orange-600 shadow-2xl'
                                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                            }`}
                            onClick={() => setActiveFilter('fast')}
                        >
                            <Zap size={18} />
                            <span>⚡ Fast Delivery</span>
                        </button>

                        <button
                            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                activeFilter === 'offers'
                                    ? 'bg-white text-orange-600 shadow-2xl'
                                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                            }`}
                            onClick={() => setActiveFilter('offers')}
                        >
                            <Percent size={18} />
                            <span>🎉 Great Offers</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;