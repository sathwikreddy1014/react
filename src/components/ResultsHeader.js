import React from 'react';
import { TrendingUp } from "lucide-react";

const ResultsHeader = ({ searchText, activeFilter, filteredRestaurantLength, sortBy }) => {
    return (
        <div className="flex items-center justify-between mb-10">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                    {searchText
                        ? `🔍 Search results for "${searchText}"`
                        : activeFilter === 'top'
                            ? '⭐ Top Rated Restaurants'
                            : activeFilter === 'fast'
                                ? '⚡ Lightning Fast Delivery'
                                : activeFilter === 'offers'
                                    ? '🎉 Amazing Offers & Deals'
                                    : activeFilter === 'new'
                                        ? '🆕 Fresh New Restaurants'
                                        : '🍽️ All Restaurants'
                    }
                </h2>
                <p className="text-gray-600 text-lg">
                    {filteredRestaurantLength} delicious option{filteredRestaurantLength !== 1 ? 's' : ''} found
                </p>
            </div>

            {filteredRestaurantLength > 0 && (
                <div className="flex items-center space-x-2 text-xs md:text-lg text-gray-500 bg-white rounded-full px-4 py-2 shadow-md">
                    <TrendingUp size={16} />
                    <span>Sorted by {sortBy === 'rating' ? 'Highest Rated' : sortBy === 'deliveryTime' ? 'Fastest Delivery' : sortBy === 'costLowToHigh' ? 'Price: Low to High' : sortBy === 'costHighToLow' ? 'Price: High to Low' : 'Relevance'}</span>
                </div>
            )}
        </div>
    );
};

export default ResultsHeader;