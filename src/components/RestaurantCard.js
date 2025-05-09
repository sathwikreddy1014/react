import { CDN_URL } from "../utils.js/Ct";

const RestaurantCard = ({ restaurant }) => {
  // console.log("props", restaurant);

  const { card } = restaurant.card || {};
  const info = card?.info;
  const deliveryTime = info?.sla?.deliveryTime;

  if (!info) return null; // Guard clause

  return (
    <div className="restaurant-card">
      {info.cloudinaryImageId && (
        <img
          className="restaurant-image"
          alt="restaurant"
          src={CDN_URL + info.cloudinaryImageId}
        />
      )}
      <h3>{info.name}</h3>
      <h4>{info.cuisines?.join(", ")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
