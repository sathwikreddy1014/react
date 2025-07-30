import { CDN_URL } from "../utils.js/Ct";
import { Star, Clock, MapPin, Crown, Percent, Award, Truck, Heart } from "lucide-react";

const RestaurantCard = ({ restaurant }) => {
    // Handle both new API structure (restaurant.info) and old structure (restaurant.card.card.info)
    const info = restaurant?.info || restaurant?.card?.card?.info;
    const deliveryTime = info?.sla?.deliveryTime;

    if (!info) return null;

    const getRatingColor = (rating) => {
        if (rating >= 4.5) return 'bg-green-500';
        if (rating >= 4.0) return 'bg-yellow-500';
        if (rating >= 3.5) return 'bg-orange-500';
        return 'bg-red-500';
    };

    const getDeliveryFee = () => {
        const feeDetails = info?.feeDetails;
        if (feeDetails?.fees?.length > 0) {
            const deliveryFee = feeDetails.fees.find(fee => fee.name === "DELIVERY_FEE");
            return deliveryFee ? `₹${deliveryFee.fee / 100}` : "FREE";
        }
        return info?.sla?.lastMileTravelString || "FREE";
    };

    const hasOffer = info?.aggregatedDiscountInfoV3?.header || info?.aggregatedDiscountInfoV2?.header;
    const isNew = info?.isNewlyOnboarded || info?.ribbon?.text?.toLowerCase().includes('new');
    const isPureVeg = info?.veg;

    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 relative h-[420px] flex flex-col">
            {/* Special Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {isNew && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold py-1 px-2 rounded-lg flex items-center space-x-1">
                        <Award size={10} />
                        <span>NEW</span>
                    </div>
                )}
                {isPureVeg && (
                    <div className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded-lg flex items-center space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>PURE VEG</span>
                    </div>
                )}
            </div>

            {/* Image Container - Fixed Height */}
            <div className="relative overflow-hidden h-48 flex-shrink-0">
                {info.cloudinaryImageId ? (
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        alt={info.name}
                        src={CDN_URL + info.cloudinaryImageId}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                            <Truck size={32} className="mx-auto mb-2" />
                            <span className="text-sm">No Image</span>
                        </div>
                    </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Top Right Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {/* Rating Badge */}
                    {info.avgRating && (
                        <div className={`${getRatingColor(info.avgRating)} text-white rounded-lg px-2 py-1 flex items-center space-x-1 shadow-lg`}>
                            <Star size={12} fill="currentColor" />
                            <span className="text-sm font-medium">{info.avgRating}</span>
                        </div>
                    )}
                    
                    {/* Delivery Time Badge */}
                    {deliveryTime && (
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1 shadow-lg">
                            <Clock size={12} className="text-green-600" />
                            <span className="text-sm font-medium text-gray-700">{deliveryTime} min</span>
                        </div>
                    )}
                </div>

                {/* Offer Banner */}
                {hasOffer && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2">
                        <div className="flex items-center space-x-1">
                            <Percent size={14} />
                            <span className="text-sm font-bold truncate">
                                {info.aggregatedDiscountInfoV3?.header || info.aggregatedDiscountInfoV2?.header}
                                {(info.aggregatedDiscountInfoV3?.subHeader || info.aggregatedDiscountInfoV2?.subHeader) && 
                                    ` ${info.aggregatedDiscountInfoV3?.subHeader || info.aggregatedDiscountInfoV2?.subHeader}`
                                }
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Content - Flexible Height */}
            <div className="p-4 flex-1 flex flex-col">
                {/* Restaurant Name - Fixed Height */}
                <div className="h-14 mb-2">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2 leading-tight">
                        {info.name}
                    </h3>
                </div>

                {/* Cuisines - Fixed Height */}
                <div className="h-10 mb-3">
                    <p className="text-gray-600 text-sm line-clamp-2 leading-tight">
                        {info.cuisines?.join(", ") || "Various Cuisines"}
                    </p>
                </div>

                {/* Restaurant Details Grid - Fixed Height */}
                <div className="grid grid-cols-2 gap-3 text-sm mb-3 h-12">
                    {/* Cost and Rating */}
                    <div className="space-y-1">
                        <div className="font-semibold text-gray-700 truncate">
                            {info.costForTwo || "₹300 for two"}
                        </div>
                        {info.totalRatingsString && (
                            <div className="text-gray-500 text-xs truncate">
                                {info.totalRatingsString} ratings
                            </div>
                        )}
                    </div>
                    
                    {/* Delivery Info */}
                    <div className="space-y-1 text-right">
                        <div className="flex items-center justify-end space-x-1">
                            <Truck size={12} className="text-blue-500" />
                            <span className="text-gray-600 text-xs">{getDeliveryFee()}</span>
                        </div>
                        {info.sla?.lastMileTravelString && (
                            <div className="text-gray-500 text-xs truncate">
                                {info.sla.lastMileTravelString}
                            </div>
                        )}
                    </div>
                </div>

                {/* Location - Fixed Height */}
                <div className="h-6 mb-3">
                    {(info.locality || info.areaName) && (
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                            <MapPin size={12} className="flex-shrink-0" />
                            <span className="truncate">
                                {info.locality || info.areaName}
                            </span>
                        </div>
                    )}
                </div>

                {/* Additional Info - Fixed Height */}
                <div className="flex items-center justify-between text-xs text-gray-500 h-6 mb-3">
                    <div className="flex items-center space-x-2">
                        {info.promoted && (
                            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-medium">
                                Promoted
                            </span>
                        )}
                        {info.isOpen === false && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                                Closed
                            </span>
                        )}
                    </div>
                    
                    {/* Favorite Button */}
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0">
                        <Heart size={14} className="text-gray-400 hover:text-red-500" />
                    </button>
                </div>

                {/* Additional Offers */}
                {info.ribbon?.text && !isNew && (
                    <div className="p-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 mb-3">
                        <p className="text-orange-600 font-medium text-sm truncate">
                            🎉 {info.ribbon.text}
                        </p>
                    </div>
                )}

                {/* Spacer to push button to bottom */}
                <div className="flex-1"></div>

                {/* Hover Action - Always at bottom */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md">
                        View Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <div className="absolute top-2 left-2 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold py-2 px-3 rounded-lg shadow-lg flex items-center space-x-1 animate-pulse">
                    <Crown size={12} fill="currentColor" />
                    <span>PROMOTED</span>
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;