// utils/useRestaurantFilters.js
import { useState, useEffect, useCallback } from "react";

const useRestaurantFilters = (restaurants) => {
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [activeFilter, setActiveFilter] = useState('all');
    const [sortBy, setSortBy] = useState('relevance');
    const [priceRange, setPriceRange] = useState('all');
    const [cuisineFilter, setCuisineFilter] = useState('all');

    const applyFilters = useCallback(() => {
        let filtered = [...restaurants];

        // Search filter
        if (searchText) {
            filtered = filtered.filter((restaurant) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                return restaurantInfo?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
                    restaurantInfo?.cuisines?.some(cuisine =>
                        cuisine.toLowerCase().includes(searchText.toLowerCase())
                    );
            });
        }

        // Active filter buttons
        if (activeFilter === 'top') {
            filtered = filtered.filter((restaurant) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                return restaurantInfo?.avgRating > 4.3;
            });
        }

        if (activeFilter === 'fast') {
            filtered = filtered.filter((restaurant) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                return restaurantInfo?.sla?.deliveryTime <= 30;
            });
        }

        if (activeFilter === 'offers') {
            filtered = filtered.filter((restaurant) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                return restaurantInfo?.aggregatedDiscountInfoV3?.header ||
                    restaurantInfo?.aggregatedDiscountInfoV2?.header;
            });
        }

        if (activeFilter === 'new') {
            filtered = filtered.filter((restaurant) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                return restaurantInfo?.isNewlyOnboarded ||
                    restaurantInfo?.ribbon?.text?.toLowerCase().includes('new');
            });
        }

        // Price range filter
        if (priceRange !== 'all') {
            filtered = filtered.filter((restaurant) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                const costForTwo = restaurantInfo?.costForTwo;
                if (!costForTwo) return true; // Include if price info is missing

                const price = parseInt(costForTwo.replace(/[^\d]/g, ''));
                switch (priceRange) {
                    case 'budget': return price <= 300;
                    case 'mid': return price > 300 && price <= 600;
                    case 'premium': return price > 600;
                    default: return true;
                }
            });
        }

        // Cuisine filter
        if (cuisineFilter !== 'all') {
            filtered = filtered.filter((restaurant) => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                return restaurantInfo?.cuisines?.includes(cuisineFilter);
            });
        }

        // Sorting
        filtered.sort((a, b) => {
            const aInfo = a?.info || a?.card?.card?.info;
            const bInfo = b?.info || b?.card?.card?.info;

            switch (sortBy) {
                case 'rating':
                    return (bInfo?.avgRating || 0) - (aInfo?.avgRating || 0);
                case 'deliveryTime':
                    return (aInfo?.sla?.deliveryTime || 999) - (bInfo?.sla?.deliveryTime || 999);
                case 'costLowToHigh':
                    const aCost = parseInt((aInfo?.costForTwo || '0').replace(/[^\d]/g, ''));
                    const bCost = parseInt((bInfo?.costForTwo || '0').replace(/[^\d]/g, ''));
                    return aCost - bCost;
                case 'costHighToLow':
                    const aCostH = parseInt((aInfo?.costForTwo || '0').replace(/[^\d]/g, ''));
                    const bCostH = parseInt((bInfo?.costForTwo || '0').replace(/[^\d]/g, ''));
                    return bCostH - aCostH;
                default:
                    return 0; // Maintain original order if relevance or no specific sort
            }
        });

        setFilteredRestaurant(filtered);
    }, [restaurants, searchText, activeFilter, sortBy, priceRange, cuisineFilter]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const handleSearch = () => {
        applyFilters();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const resetFilters = () => {
        setsearchText(""); // Changed from "all" to "" for an empty search field
        setActiveFilter('all');
        setSortBy('relevance');
        setPriceRange('all');
        setCuisineFilter('all');
    };

    return {
        filteredRestaurant,
        searchText,
        setsearchText,
        activeFilter,
        setActiveFilter,
        sortBy,
        setSortBy,
        priceRange,
        setPriceRange,
        cuisineFilter,
        setCuisineFilter,
        handleSearch,
        handleKeyPress,
        resetFilters,
        applyFilters // Expose applyFilters if needed for external triggers
    };
};

export default useRestaurantFilters;