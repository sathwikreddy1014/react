import useState from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CORSAPI_URL, API_URL, CDN_URL} from "../utils.js/Ct.js";

const usecustomRestaurentMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(CORSAPI_URL + API_URL + resId);
        const json = await data.json();
        setresInfo(json.data);
        // console.log("resInfoold", json.data);
    }

    return resInfo;

};

export default usecustomRestaurentMenu;