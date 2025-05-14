import  {LOGO_URL} from "../utils.js/Ct";
import {useState} from "react"
import {Link} from "react-router-dom";
import useonlineStatus from "../utils.js/customonlineStatus.js";
import {useSelector} from "react-redux";

const HeaderComponent = () => {

    // let btnName = "login";

    const cartItems = useSelector((store) => store.cart.items)

    const [btnName, setbtnName ] = useState("login")

    const isonlineStatus = useonlineStatus();

    return (
        <div className = "  flex justify-between  shadow-lg to-black">
            <div className = "h-28">
                <img  className = "h-28 shadow-lg" src ={LOGO_URL} />
            </div>
            <div className = "flex items-center">
                <ul className="flex p-4 m-4"> 
                    <li className = "px-4">
                        ONLINE STATUS : {isonlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="px-4">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/about" >About Us </Link>
                    </li >
                    <li className="px-4 font-bold ">
                        <Link to = "/cart"> Cart -({cartItems.length})</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <button className = "login-logout" onClick = {()=>{
                            btnName === ("login")
                            ? setbtnName("logout")
                            : setbtnName("login");
                        }}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default HeaderComponent;