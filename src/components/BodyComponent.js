import RestaurantCard , { withPromotedLabel }from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom";
import useonlineStatus from "../utils.js/customonlineStatus.js";



const BodyComponent = () => {
    //state variable to store the restaurant data
    const [listOfRestaurent, setListofRestaurent] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("")
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log("body", listOfRestaurent);
    

    useEffect( () =>{
        response();
    },[]);
    
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null';
       
    const response = async() =>{
        const data = await fetch(proxyUrl + targetUrl);
        const json = await data.json();
        const allCards = json.data?.cards || [];
        const restaurantCards = allCards.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
        setListofRestaurent(restaurantCards);
        setFilteredRestaurant(restaurantCards);
};

const isonlinestatus = useonlineStatus();
if (!isonlinestatus) {
    return <h1>Offline, Please check your internet connection</h1>;
}


    return listOfRestaurent.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex items-center ">
                <div className="search m-4 p-4 ">
                     <input className="border border-solid border-black"
                     type = "text" 
                     value = {searchText} 
                     onChange = {(e)=>{setsearchText(e.target.value)}}
                     />
                     <button
                     className = "search-button px-4 bg-orange-500 py-2 mx-5 h-10  rounded-lg"
                     onClick = {() =>{
                        const filteredRest = listOfRestaurent.filter((restaurant) => restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRest );
                        }}>
                            Search
                    </button>
                </div>    
                <div className = "top res px-4 bg-orange-500 py-2  h-10 rounded-lg">
                    <button 
                    className = "fil-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurent.filter(
                            (restaurant => restaurant.card.card.info.avgRating > 4.3)
                        );
                        setFilteredRestaurant(filteredList);  
                        setListofRestaurent(listOfRestaurent);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant, index) =>{
                        return (
                            <Link
                            key = {restaurant.card.card.info.id}
                            to = {`/restaurant/${restaurant.card.card.info.id}`}>
                                { restaurant.card.card.info.promoted ? (  
                                    <RestaurantCardPromoted restaurant = {restaurant}/>
                                ) : (
                                    <RestaurantCard restaurant = {restaurant}/>
                                )}
                                
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
            
            
};


export default BodyComponent;





 