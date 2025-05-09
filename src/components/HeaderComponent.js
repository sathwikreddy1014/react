import  {LOGO_URL} from "../utils.js/Ct";
import {useState} from "react"
import {Link} from "react-router-dom";

const HeaderComponent = () => {

    // let btnName = "login";

    const [btnName, setbtnName ] = useState("login")

    return (
        <div className = "header">
            <div className = "logo-container">
                <img  className = "logo" src ={LOGO_URL} />
            </div>
            <div className = "nav-items">
                <ul> 
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about" >About Us </Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li>
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