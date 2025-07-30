// utils/useRestaurantData.js
import { useState, useEffect, useRef } from "react";

const useRestaurantData = () => {
    const [listOfRestaurent, setListofRestaurent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loadedRestaurantIds, setLoadedRestaurantIds] = useState(new Set());
    const [availableCuisines, setAvailableCuisines] = useState([]);
    const [stats, setStats] = useState({
        totalRestaurants: 0,
        avgRating: 0,
        avgDeliveryTime: 0,
        topCuisines: []
    });

    const apiEndpoints = useRef([
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`, // Hyderabad (Initial)
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&page_type=DESKTOP_WEB_LISTING&offset=`, // Hyderabad (Paginated)
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING&offset=`, // Bangalore
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING&offset=`, // Mumbai
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING&offset=`, // Delhi
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.363895&page_type=DESKTOP_WEB_LISTING&offset=`, // Kolkata
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING&offset=`, // Chennai
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0204978&lng=72.4396548&page_type=DESKTOP_WEB_LISTING&offset=` // Ahmedabad
    ]);

    const fetchRestaurants = async (currentPage = 1, isInitial = false) => {
        if (isLoadingMore && !isInitial) return;

        try {
            if (isInitial) {
                setIsLoading(true);
                setLoadedRestaurantIds(new Set());
                setListofRestaurent([]); // Clear list on initial fetch
            } else {
                setIsLoadingMore(true);
            }

            const targetUrl = apiEndpoints.current[Math.min(currentPage - 1, apiEndpoints.current.length - 1)];
            const offset = (currentPage === 1) ? '' : (currentPage - 1) * (currentPage === 1 ? 0 : (currentPage === 2 ? 16 : 20)); // Adjust offset logic for different pages
            const finalUrl = currentPage === 1 ? targetUrl : `${targetUrl}${offset}`;
            
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Consider a more robust proxy or direct API
            const data = await fetch(proxyUrl + finalUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (!data.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await data.json();

            const cards = json?.data?.cards || [];
            let restaurantCards = [];

            for (const card of cards) {
                if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    restaurantCards = card.card.card.gridElements.infoWithStyle.restaurants;
                    break;
                } else if (card?.card?.card?.restaurants) {
                    restaurantCards = card.card.card.restaurants;
                    break;
                } else if (card?.restaurants) {
                    restaurantCards = card.restaurants;
                    break;
                }
            }

            //console.log('Restaurant cards found:', restaurantCards.length);

            if (restaurantCards.length === 0) {
                if (currentPage > apiEndpoints.current.length) { // Stop fetching if we tried all endpoints
                    setHasMore(false);
                } else {
                    // Try fetching from the next available location/endpoint if current one yields no results
                    setPage(prevPage => prevPage + 1);
                    setTimeout(() => fetchRestaurants(currentPage + 1, false), 100);
                }
                return;
            }

            const newRestaurants = [];
            const currentIds = new Set(loadedRestaurantIds);

            restaurantCards.forEach(restaurant => {
                const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
                const restaurantId = restaurantInfo?.id;
                if (restaurantId && !currentIds.has(restaurantId)) {
                    newRestaurants.push(restaurant);
                    currentIds.add(restaurantId);
                }
            });

            //console.log('New unique restaurants to add:', newRestaurants.length);

            setLoadedRestaurantIds(currentIds);

            setListofRestaurent(prevList => {
                const updatedList = [...prevList, ...newRestaurants];
                if (isInitial) {
                    extractCuisinesAndCalculateStats(updatedList);
                }
                calculateStats(updatedList); // Recalculate stats with new data
                return updatedList;
            });
            
            setPage(currentPage + 1);

            if (newRestaurants.length < (currentPage === 1 ? 16 : 20) && currentPage < apiEndpoints.current.length + 3) { // Fetch more if current batch is small
                 setTimeout(() => fetchRestaurants(currentPage + 1, false), 500);
            }
            
            setHasMore(newRestaurants.length > 0 || currentPage < apiEndpoints.current.length); // Continue fetching if new restaurants were found or we haven't exhausted endpoints

        } catch (error) {
            console.error("Error fetching restaurants:", error);
            if (currentPage <= apiEndpoints.current.length + 1) { // Retry with next endpoint if an error occurs
                setTimeout(() => fetchRestaurants(currentPage + 1, false), 1000);
            } else {
                setHasMore(false);
            }
        } finally {
            setIsLoading(false);
            setIsLoadingMore(false);
        }
    };

    const extractCuisinesAndCalculateStats = (restaurants) => {
        const cuisines = new Set();
        restaurants.forEach(r => {
            const restaurantInfo = r?.info || r?.card?.card?.info;
            restaurantInfo?.cuisines?.forEach(c => cuisines.add(c));
        });
        setAvailableCuisines(Array.from(cuisines).sort());
    };

    const calculateStats = (restaurants) => {
        if (restaurants.length === 0) {
            setStats({ totalRestaurants: 0, avgRating: 0, avgDeliveryTime: 0, topCuisines: [] });
            return;
        }

        const validRatings = restaurants
            .map(r => {
                const restaurantInfo = r?.info || r?.card?.card?.info;
                return restaurantInfo?.avgRating;
            })
            .filter(rating => rating && rating > 0);

        const validDeliveryTimes = restaurants
            .map(r => {
                const restaurantInfo = r?.info || r?.card?.card?.info;
                return restaurantInfo?.sla?.deliveryTime;
            })
            .filter(time => time && time > 0);

        const cuisineCount = {};
        restaurants.forEach(restaurant => {
            const restaurantInfo = restaurant?.info || restaurant?.card?.card?.info;
            restaurantInfo?.cuisines?.forEach(cuisine => {
                cuisineCount[cuisine] = (cuisineCount[cuisine] || 0) + 1;
            });
        });

        const topCuisines = Object.entries(cuisineCount)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([cuisine]) => cuisine);

        setStats({
            totalRestaurants: restaurants.length,
            avgRating: validRatings.length > 0 ? (validRatings.reduce((a, b) => a + b, 0) / validRatings.length).toFixed(1) : 0,
            avgDeliveryTime: validDeliveryTimes.length > 0 ? Math.round(validDeliveryTimes.reduce((a, b) => a + b, 0) / validDeliveryTimes.length) : 0,
            topCuisines
        });
    };

    useEffect(() => {
        fetchRestaurants(1, true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isLoadingMore || !hasMore) return;

            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 1000) {
                fetchRestaurants(page, false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoadingMore, hasMore, page]); // Removed fetchRestaurants from dependencies to prevent infinite loop

    return {
        listOfRestaurent,
        isLoading,
        isLoadingMore,
        hasMore,
        availableCuisines,
        stats,
        fetchRestaurants // Expose fetchRestaurants if needed for manual triggering
    };
};

export default useRestaurantData;