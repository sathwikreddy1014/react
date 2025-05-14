import { CDN_URL } from "../utils.js/Ct";

const RestaurantCard = ({ restaurant }) => {
  // console.log("props", restaurant);

  const { card } = restaurant.card || {};
  const info = card?.info;
  const deliveryTime = info?.sla?.deliveryTime;

  if (!info) return null; // Guard clause

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 " style={{backgroundColor: "#f0f0f0"}}>
      {info.cloudinaryImageId && (
        <img
          className="rounded-lg"
          alt="restaurant"
          src={CDN_URL + info.cloudinaryImageId}
        />
      )}
      <h3 className="font-bold py-1 text-lg " >{info.name}</h3>
      <h4>{info.cuisines?.join(", ")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-2 px-2 m-2 rounded-sm z-10 transform transition-transform duration-200 ease-in-out hover:scale-105 "> 
          Promoted 
        </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
