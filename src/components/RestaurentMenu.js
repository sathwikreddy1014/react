import { useParams } from 'react-router-dom';
import usecustomRestaurentMenu from "../utils.js/customRestaurentMenu.js";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { ArrowLeft, Star, Clock, MapPin, Phone, Globe, Filter, Leaf, Drumstick } from "lucide-react";
import { Link } from "react-router-dom";
import Shimmermenu from './Shimmermenu';

const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo = usecustomRestaurentMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'

    if (resInfo === null) {
        return <Shimmermenu />;
    }

    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info || {};
    const {
        name,
        totalRatingsString,
        cuisines,
        avgRating,
        costForTwoMessage,
        sla,
        city,
        locality,
        areaName
    } = restaurantInfo;

   const regularCard = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
);

const allCategories = regularCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (categ) => categ?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
) || [];


    // Filter categories based on diet preference
    const getFilteredCategories = () => {
        if (dietFilter === 'all') return allCategories;
        
        return allCategories.map(category => {
            const filteredItems = category?.card?.card?.itemCards?.filter(item => {
                const isVeg = item?.card?.info?.itemAttribute?.vegClassifier === "VEG";
                return dietFilter === 'veg' ? isVeg : !isVeg;
            }) || [];
            
            return {
                ...category,
                card: {
                    ...category.card,
                    card: {
                        ...category.card.card,
                        itemCards: filteredItems
                    }
                }
            };
        }).filter(category => category?.card?.card?.itemCards?.length > 0);
    };

    const filteredCategories = getFilteredCategories();

    // Count veg and non-veg items
    const getItemCounts = () => {
        let vegCount = 0;
        let nonVegCount = 0;
        
        allCategories.forEach(category => {
            category?.card?.card?.itemCards?.forEach(item => {
                const isVeg = item?.card?.info?.itemAttribute?.vegClassifier === "VEG";
                if (isVeg) vegCount++;
                else nonVegCount++;
            });
        });
        
        return { vegCount, nonVegCount, totalCount: vegCount + nonVegCount };
    };

    const { vegCount, nonVegCount, totalCount } = getItemCounts();

    const getRatingColor = (rating) => {
        if (rating >= 4.5) return 'bg-green-500';
        if (rating >= 4.0) return 'bg-yellow-500';
        if (rating >= 3.5) return 'bg-orange-500';
        return 'bg-red-500';
    };

    const FilterButton = ({ type, count, isActive, onClick, icon: Icon, label, bgColor, activeColor }) => (
        <button
            onClick={onClick}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                isActive 
                    ? `${activeColor} text-white scale-105` 
                    : `${bgColor} text-gray-700 hover:${activeColor} hover:text-white`
            }`}
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                isActive ? 'bg-white/20' : 'bg-gray-200'
            }`}>
                {count}
            </span>
        </button>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 mb-6"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Restaurants</span>
                </Link>

                {/* Restaurant Header */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            {avgRating && (
                                <div className={`${getRatingColor(avgRating)} text-white px-4 py-2 rounded-xl flex items-center space-x-2 shadow-lg`}>
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="font-semibold">{avgRating}</span>
                                    <span className="text-sm opacity-90">({totalRatingsString})</span>
                                </div>
                            )}
                            
                            {sla?.slaString && (
                                <div className="bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center space-x-2 shadow-lg">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-semibold">{sla.slaString}</span>
                                </div>
                            )}
                            
                            {costForTwoMessage && (
                                <div className="bg-purple-500 text-white px-4 py-2 rounded-xl shadow-lg">
                                    <span className="font-semibold">{costForTwoMessage}</span>
                                </div>
                            )}
                        </div>

                        {cuisines && (
                            <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
                                {cuisines.join(", ")}
                            </p>
                        )}

                        {(locality || areaName || city) && (
                            <div className="flex items-center justify-center space-x-2 text-gray-500">
                                <MapPin className="w-5 h-5" />
                                <span>
                                    {[locality, areaName, city].filter(Boolean).join(", ")}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 mb-1">
                                {avgRating || 'N/A'}
                            </div>
                            <div className="text-sm text-gray-600">Rating</div>
                        </div>
                        
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                                {sla?.deliveryTime || 'N/A'}
                            </div>
                            <div className="text-sm text-gray-600">Minutes</div>
                        </div>
                        
                        <div className="text-center p-4 bg-purple-50 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 mb-1">
                                {allCategories.length}
                            </div>
                            <div className="text-sm text-gray-600">Categories</div>
                        </div>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Menu</h2>
                        <p className="text-gray-600">Explore our delicious offerings</p>
                    </div>

                    {/* Diet Filter */}
                    {totalCount > 0 && (
                        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
                            <div className="flex items-center justify-center mb-6">
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <Filter className="w-6 h-6" />
                                    <h3 className="text-xl font-semibold">Filter by Diet</h3>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-4">
                                <FilterButton
                                    type="all"
                                    count={totalCount}
                                    isActive={dietFilter === 'all'}
                                    onClick={() => setDietFilter('all')}
                                    icon={Globe}
                                    label="All Items"
                                    bgColor="bg-gray-100"
                                    activeColor="bg-gray-600"
                                />
                                
                                {vegCount > 0 && (
                                    <FilterButton
                                        type="veg"
                                        count={vegCount}
                                        isActive={dietFilter === 'veg'}
                                        onClick={() => setDietFilter('veg')}
                                        icon={Leaf}
                                        label="Vegetarian"
                                        bgColor="bg-green-100"
                                        activeColor="bg-green-600"
                                    />
                                )}
                                
                                {nonVegCount > 0 && (
                                    <FilterButton
                                        type="non-veg"
                                        count={nonVegCount}
                                        isActive={dietFilter === 'non-veg'}
                                        onClick={() => setDietFilter('non-veg')}
                                        icon={Drumstick}
                                        label="Non-Vegetarian"
                                        bgColor="bg-red-100"
                                        activeColor="bg-red-600"
                                    />
                                )}
                            </div>

                            {/* Filter Stats */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="text-center text-sm text-gray-600">
                                    Showing <span className="font-semibold text-gray-800">{filteredCategories.length}</span> categories
                                    {dietFilter !== 'all' && (
                                        <span> with <span className="font-semibold text-gray-800">
                                            {dietFilter === 'veg' ? vegCount : nonVegCount}
                                        </span> {dietFilter === 'veg' ? 'vegetarian' : 'non-vegetarian'} items</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Menu Categories */}
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, index) => (
                            <RestaurantCategory
                                key={`${category.card?.card?.title}-${dietFilter}-${index}`}
                                data={category.card?.card}
                                showItems={index === showIndex}
                                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                                isLast={index === filteredCategories.length - 1}
                                dietFilter={dietFilter}
                            />
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                {dietFilter === 'veg' ? (
                                    <Leaf className="w-16 h-16 text-green-400" />
                                ) : dietFilter === 'non-veg' ? (
                                    <Drumstick className="w-16 h-16 text-red-400" />
                                ) : (
                                    <Globe className="w-16 h-16 text-gray-400" />
                                )}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                                {dietFilter === 'veg' 
                                    ? 'No Vegetarian Items' 
                                    : dietFilter === 'non-veg' 
                                    ? 'No Non-Vegetarian Items' 
                                    : 'Menu Not Available'
                                }
                            </h3>
                            <p className="text-gray-500">
                                {dietFilter === 'veg' 
                                    ? 'This restaurant doesn\'t have vegetarian options in our records.' 
                                    : dietFilter === 'non-veg' 
                                    ? 'This restaurant doesn\'t have non-vegetarian options in our records.' 
                                    : 'We\'re working on getting the menu for this restaurant.'
                                }
                            </p>
                            {dietFilter !== 'all' && (
                                <button
                                    onClick={() => setDietFilter('all')}
                                    className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors duration-200"
                                >
                                    Show All Items
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestaurentMenu;