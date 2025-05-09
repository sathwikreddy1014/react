import {useEffect, useState} from 'react';
import Shimmer from './Shimmer.js';
import {useParams} from "react-router-dom";
import {CORSAPI_URL, API_URL, CDN_URL} from "../utils.js/Ct.js";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';




const RestaurentMenu = () =>{

    const [resInfo, setresInfo] = useState(null);
    const {resId} = useParams();
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () =>{
        const Data =  await fetch(CORSAPI_URL + API_URL + resId + "&catalog_qa=undefined&query=Cakes&submitAction=ENTER");;
        
        const data = await Data.json();    
        setresInfo(data);
        // console.log("data",data);
    };

    if (resInfo === null) {
        return <Shimmer/>
    }


    const {name, totalRatingsString, cuisines, avgRating, costForTwoMessage, sla, city} = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const allMenuCards = resInfo?.data?.cards || [];   
    // console.log("allMenuCards", allMenuCards); 
    const newMenuCard = allMenuCards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const newItems = newMenuCard.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];
    const menuCards = newItems[0]?.card?.card?.itemCards || []; 
    // console.log("menuCards", menuCards);
    return  (
            <div className="restaurent-menu">
            <div className="title">
            <h1 className="menu-title">{name}</h1>
            <div className="menu-details">
            <div className="menu-ratings">
            <div>{<FontAwesomeIcon icon={faStar} />}{avgRating}</div>
            <div>({totalRatingsString})</div>
            <div>{costForTwoMessage}</div>
            </div>
            <div className="cuisines"><b>{cuisines.join(", ")}</b></div>
            <div className="sla-info">{sla?.slaString}</div>
            </div>
            <h2>Menu:</h2>
            <ul className="menu-list">
                {menuCards.map((item) => (
                    <div key={item?.card?.info?.id}>
                        <div className="menu-card" >
                        <div className="item-name"><b>{item?.card?.info?.name}
                            <br/>
                        {<FontAwesomeIcon icon={faIndianRupeeSign} />}{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                            </b><br/><br/>
                        {item?.card?.info?.description}</div>
                        <div className="item-image1">
                            <img src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name}  className = "item-image"/>
                            </div>
                        </div>
                    </div>
                    ))}
            </ul>
            {/* <h2>Total Amount: {menuCards.reduce((total, item) => total + (item?.card?.info?.price || 0), 0) / 100}</h2> */}
            </div>
        </div>    
    )
};

export default RestaurentMenu;