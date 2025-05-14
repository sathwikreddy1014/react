import Shimmer from './Shimmer.js';
import {CDN_URL} from "../utils.js/Ct.js";
import { useParams } from 'react-router-dom';
import usecustomRestaurentMenu from "../utils.js/customRestaurentMenu.js";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import RestaurantCategory from "./RestaurantCategory"
import {useState} from "react"


const RestaurentMenu = () =>{
    const {resId} = useParams();
    const resInfo = usecustomRestaurentMenu(resId);

    const [showIndex, setShowIndex ] = useState(0)
    //console.log("newresInfo", resInfo);
    if (resInfo === null) {
        return <Shimmer/>
    }
    const {name, totalRatingsString, cuisines, avgRating, costForTwoMessage, sla, city} = resInfo?.cards[2]?.card?.card?.info || [];

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((categ) => categ?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(category);
    


    
    return  (
            <div className=" text-center">
                <div className="title">
                    <h1 className="font-bold mt-5 text-xl" >{name}</h1>
                    <div className="menu-details">
                        <div className="menu-ratings">
                            <p>{<FontAwesomeIcon icon={faStar} />}{avgRating}</p>
                            <p>({totalRatingsString})</p>
                            <p>{costForTwoMessage}</p>
                        </div>
                        <p className="cuisines font-bold">{cuisines}</p>
                        <div className="sla-info">{sla?.slaString}</div>
                    </div>
                </div>
                {categories.map((category, index) => <RestaurantCategory 
                key = {category.card?.card?.title} 
                data = {category.card?.card}
                showItems = {index === showIndex ? true : false }
                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                />)}
            </div> 

            
               
    )
};

export default RestaurentMenu;