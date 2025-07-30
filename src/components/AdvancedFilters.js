import React from 'react';

const AdvancedFilters = ({ sortBy, setSortBy, priceRange, setPriceRange, cuisineFilter, setCuisineFilter, availableCuisines, searchText, activeFilter, resetFilters }) => {
    return (
        <div className="grid grid-cols-3 gap-3 mb-6 -mt-8 md:-mt-0  md:text-lg text-[12px] ">
            {/* Sort By */}
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 md:px-6 py-4 border-0 rounded-2xl focus:ring-4 focus:ring-white/30 outline-none transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg font-medium"
            >
                <option value="relevance">🎯 Sort by Relevance</option>
                <option value="rating">⭐ Highest Rated First</option>
                <option value="deliveryTime">⚡ Fastest Delivery</option>
                <option value="costLowToHigh">💰 Price: Low to High</option>
                <option value="costHighToLow">💎 Price: High to Low</option>
            </select>

            {/* Price Range */}
            <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-2 md:px-6  py-4 border-0 rounded-2xl focus:ring-4 focus:ring-white/30 outline-none transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg font-medium"
            >
                <option value="all">💸 All Price Ranges</option>
                <option value="budget">🍕 Budget Friendly (Under ₹300)</option>
                <option value="mid">🍔 Mid-Range (₹300-₹600)</option>
                <option value="premium">🥘 Premium Dining (Above ₹600)</option>
            </select>

            {/* Cuisine Filter */}
            <select
                value={cuisineFilter}
                onChange={(e) => setCuisineFilter(e.target.value)}
                className="px-2 md:px-6 py-4 border-0 rounded-2xl focus:ring-4 focus:ring-white/30 outline-none transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg font-medium"
            >
                <option value="all">🌍 All Cuisines</option>
                {availableCuisines.slice(0, 20).map(cuisine => (
                    <option key={cuisine} value={cuisine}>
                        {cuisine === 'North Indian' ? '🍛' :
                            cuisine === 'Chinese' ? '🥢' :
                                cuisine === 'South Indian' ? '🥥' :
                                    cuisine === 'Italian' ? '🍝' :
                                        cuisine === 'Pizza' ? '🍕' :
                                            cuisine === 'Burger' ? '🍔' :
                                                cuisine === 'Biryani' ? '🍚' :
                                                    cuisine === 'Desserts' ? '🍰' :
                                                        cuisine === 'Ice Cream' ? '🍦' :
                                                            '🍽️'} {cuisine}
                    </option>
                ))}
            </select>

            {(searchText || activeFilter !== 'all' || sortBy !== 'relevance' || priceRange !== 'all' || cuisineFilter !== 'all') && (
                <div className="text-center md:col-span-3 mt-4 ">
                    <button
                        onClick={resetFilters}
                        className="px-8 py-3 bg-white/20 text-black rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        🔄 Reset All Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdvancedFilters;