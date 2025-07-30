import React from 'react';
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

const RestaurantGrid = ({ restaurants }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {restaurants.map((restaurant, index) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                const restaurantId = restaurantInfo?.id;

                // Append index to make key unique even if IDs duplicate
                const key = restaurantId ? `${restaurantId}-${index}` : index;

                return (
                    <Link
                        key={key}
                        to={`/restaurant/${restaurantId}`}
                        className="transform hover:scale-105 transition-all duration-300 hover:z-10 relative"
                    >
                        {restaurantInfo?.promoted ? (
                            <RestaurantCardPromoted restaurant={restaurant} />
                        ) : (
                            <RestaurantCard restaurant={restaurant} />
                        )}
                    </Link>
                );
            })}
        </div>
    );
};

export default RestaurantGrid;