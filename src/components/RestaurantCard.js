import {CDN_URL} from "../utils.js/Ct";

const RestaurantCard = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resdata?.info;
    const {deliveryTime} = sla;
    return (
        <div className= "restaurant-card">
            <img 
            className = "restaurant-image"
            alt="restaurant-image"
            src = {CDN_URL + cloudinaryImageId}/> 
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
};

export default RestaurantCard;
// Compare this snippet from src/components/FooterComponent.js: