import ItemList from "./ItemList";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const RestaurantCategory = ({ data, showItems, setShowIndex, isLast }) => {
    const clickHandler = () => {
        setShowIndex();
    };

    return (
        <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${!isLast ? 'mb-6' : ''}`}>
            <div
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={clickHandler}
            >
                <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-bold text-gray-800">
                        {data?.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {data?.itemCards?.length || 0}
                    </span>
                </div>
                
                <div className="flex items-center space-x-2">
                    {showItems ? (
                        <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                </div>
            </div>

            {showItems && (
                <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                        <ItemList items={data?.itemCards} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;