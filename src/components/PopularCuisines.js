import React from 'react';
import { ChefHat } from "lucide-react";

const PopularCuisines = ({ topCuisines, cuisineFilter, setCuisineFilter }) => {
    if (topCuisines.length === 0) {
        return null;
    }

    return (
        <div className="mb-12 hidden md:inline">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ChefHat className="mr-3 text-orange-500" size={28} />
                🔥 Trending Cuisines
            </h3>
            <div className="flex flex-wrap gap-3">
                {topCuisines.map(cuisine => (
                    <button
                        key={cuisine}
                        onClick={() => setCuisineFilter(cuisine)}
                        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                            cuisineFilter === cuisine
                                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                    >
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
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PopularCuisines;