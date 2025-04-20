import RestaurantCard from "./RestaurantCard";
import reslist from "../utils.js/mData";
import { useState } from "react";


const BodyComponent = () => {
    const [listOfres, setListofres] = useState(reslist);
    return(
        <div className = "body">
            <div className = "filter">
                <button 
                className = "fil-btn"
                onClick={() => {
                    const filteredList = listOfres.filter(
                    (restaurant => restaurant.info.avgRating > 4.3)
                    );
                    setListofres(filteredList);    
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className = "restaurant-container">
                {listOfres.map((restaurant) =>(
                    <RestaurantCard key = {restaurant.info.id} resdata={restaurant}/>
            )) }            
            </div>
        </div>
    )
};

export default BodyComponent;