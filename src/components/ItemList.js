import { CDN_URL } from "../utils.js/Ct";
import { useDispatch } from "react-redux";
import { addItem } from "../utils.js/cartSlice";
import { Plus, Star, Leaf } from "lucide-react";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    if (!items || items.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <p>No items available in this category</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {items.map((item) => {
                const info = item.card?.info;
                if (!info) return null;

                return (
                    <div key={info.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100">
                        <div className="flex items-start p-6">
                            {/* Item Details */}
                            <div className="flex-1 pr-4">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-lg text-gray-800 leading-tight">
                                        {info.name}
                                    </h3>
                                    {info.isVeg !== undefined && (
                                        <div className={`flex-shrink-0 w-4 h-4 border-2 flex items-center justify-center ${
                                            info.isVeg ? 'border-green-500' : 'border-red-500'
                                        }`}>
                                            <div className={`w-2 h-2 rounded-full ${
                                                info.isVeg ? 'bg-green-500' : 'bg-red-500'
                                            }`}></div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="text-xl font-bold text-gray-800">
                                        ₹{((info.price || info.defaultPrice || 0) / 100).toFixed(2)}
                                    </div>
                                    
                                    {info.ratings?.aggregatedRating?.rating && (
                                        <div className="flex items-center space-x-1 text-sm">
                                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                            <span className="text-gray-600">
                                                {info.ratings.aggregatedRating.rating}
                                            </span>
                                            <span className="text-gray-400">
                                                ({info.ratings.aggregatedRating.ratingCountV2})
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {info.description && (
                                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                                        {info.description}
                                    </p>
                                )}

                                {info.ribbon?.text && (
                                    <div className="mt-2 inline-block">
                                        <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                                            {info.ribbon.text}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Image and Add Button */}
                            <div className="flex-shrink-0 relative">
                                {info.imageId && (
                                    <div className="relative">
                                        <img
                                            className="w-32 h-24 object-cover rounded-xl shadow-md"
                                            src={CDN_URL + info.imageId}
                                            alt={info.name}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 rounded-xl"></div>
                                    </div>
                                )}
                                
                                <div className="mt-3 flex justify-center">
                                    <button
                                        className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                                        onClick={() => handleAddItem(item)}
                                    >
                                        <Plus className="w-4 h-4" />
                                        <span>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;