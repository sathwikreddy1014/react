import {useSelector , useDispatch} from "react-redux"
import ItemList from "./ItemList"
import {clearCart} from "../utils.js/cartSlice"

const Cart  = () => {

    const cartedItems = useSelector((mystore) => mystore.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
    <div className = "m-5">
        <h1 className ="font-bold text-center m-3 p-3 text-2xl">Cart</h1>
        <div className=" mx-96">
            {cartedItems.length !=0 && <button className="bg-green-500 rounded-lg w-24 h-auto " onClick={handleClearCart}
            >Clearcart</button>}
        </div>
        {cartedItems.length === 0 && (<h1 className="text-center">Add items into cart</h1>)}
        <div className = "w-6/12 text-center m-auto pt-10 p-6">
            {<ItemList items = {cartedItems}/> }
        </div>
    </div>
)
}

export default Cart;