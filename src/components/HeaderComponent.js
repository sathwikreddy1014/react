import  {LOGO_URL} from "../utils.js/Ct";

const HeaderComponent = () => {
    return (
        <div className = "header">
            <div className = "logo-container">
                <img  className = "logo" src ={LOGO_URL} />
            </div>
            <div className = "nav-items">
                <ul> 
                    <li>Home</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
};

export default HeaderComponent;