import React from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils.js/customonlineStatus.js"; // Corrected path
import useRestaurantData from "../hooks/useRestaurantData.js";
import useRestaurantFilters from "../hooks/useRestaurantFilters.js";

// Import the new components
import OfflineStatus from "./OfflineStatus";
import HeroSection from "./HeroSection";
import AdvancedFilters from "./AdvancedFilters";
import ResultsHeader from "./ResultsHeader";
import PopularCuisines from "./PopularCuisines";
import NoResultsFound from "./NoResultsFound";
import RestaurantGrid from "./RestaurantGrid";
import LoadingMoreIndicator from "./LoadingMoreIndicator";
import EndOfResults from "./EndOfResults";

const BodyComponent = () => {
    const {
        listOfRestaurent,
        isLoading,
        isLoadingMore,
        hasMore,
        availableCuisines,
        stats
    } = useRestaurantData();

    const {
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
        resetFilters
    } = useRestaurantFilters(listOfRestaurent);

    const isOnlineStatus = useOnlineStatus();

    if (!isOnlineStatus) {
        return <OfflineStatus />;
    }

    if (isLoading) {
        return <Shimmer />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <HeroSection
                searchText={searchText}
                setsearchText={setsearchText}
                handleSearch={handleSearch}
                handleKeyPress={handleKeyPress}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <AdvancedFilters
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    cuisineFilter={cuisineFilter}
                    setCuisineFilter={setCuisineFilter}
                    availableCuisines={availableCuisines}
                    searchText={searchText} // Passed for conditional rendering of reset button
                    activeFilter={activeFilter} // Passed for conditional rendering of reset button
                    resetFilters={resetFilters}
                />

                <ResultsHeader
                    searchText={searchText}
                    activeFilter={activeFilter}
                    filteredRestaurantLength={filteredRestaurant.length}
                    sortBy={sortBy}
                />

                <PopularCuisines
                    topCuisines={stats.topCuisines}
                    cuisineFilter={cuisineFilter}
                    setCuisineFilter={setCuisineFilter}
                />

                {filteredRestaurant.length === 0 ? (
                    <NoResultsFound resetFilters={resetFilters} />
                ) : (
                    <>
                        <RestaurantGrid restaurants={filteredRestaurant} />

                        {isLoadingMore && <LoadingMoreIndicator />}

                        {!hasMore && !isLoadingMore && filteredRestaurant.length > 0 && (
                            <EndOfResults />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default BodyComponent;