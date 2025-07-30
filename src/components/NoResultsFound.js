import React from 'react';
import { Search } from "lucide-react";

const NoResultsFound = ({ resetFilters }) => {
    return (
        <div className="text-center py-20">
            <div className="w-40 h-40 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="text-center">
                    <Search className="w-16 h-16 text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl">🍽️</div>
                </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-700 mb-4">No delicious options found!</h3>
            <p className="text-gray-500 mb-8 text-lg">Don't worry, let's find something tasty for you</p>
            <button
                onClick={resetFilters}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                🍕 Show All Restaurants
            </button>
        </div>
    );
};

export default NoResultsFound;