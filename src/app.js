import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent"; 

const AppLayout = () =>{
    return(
        <div className = "app">
            {HeaderComponent()}
            {BodyComponent()}
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);