import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent"; 
import { Outlet } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import  {RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import { Provider } from "react-redux";
import appStore from "./utils.js/appStore"
import Cart from "./components/Cart"



const AppLayout = () =>{
    return(
        <Provider store = {appStore}>
            <div className = "app">
            <HeaderComponent/>
            <Outlet/>
            </div>
        </Provider>
    )
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurentMenu/>
            }
            
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);