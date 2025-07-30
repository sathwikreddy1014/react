import React from 'react';
import { Loader } from "lucide-react";

const LoadingMoreIndicator = () => {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="flex items-center space-x-3 text-gray-600 bg-white rounded-full px-6 py-3 shadow-lg">
                <Loader className="w-6 h-6 animate-spin text-orange-500" />
                <span className="font-medium">Loading more delicious options...</span>
                <div className="text-xl">🍽️</div>
            </div>
        </div>
    );
};

export default LoadingMoreIndicator;