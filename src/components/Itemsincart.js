import { CDN_URL } from "../utils.js/Ct";
import { useDispatch, useSelector } from "react-redux";
import { addinsidecart } from "../utils.js/cartSlice";

const Itemsincart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store

    const handleAddItem = (id) => {
        dispatch(addinsidecart({ id }));
    };

    return (
        <div className="m-2 p-2">
            {cartItems.map((item) => (
                <div key={item.card?.info?.id} className="h-42 border-b-2 flex m-0 p-0">
                    <div className="w-10/12 text-left">
                        <span className="font-semibold text-lg">{item?.card?.info.name}</span>
                        {/* Display the quantity and dynamically updated price */}
                        <div>
                            Quantity: {item.card?.info?.quantity} <br />
                            Price: ₹ {item.card?.info?.price/100} {/* This is the updated price */}
                        </div>
                    </div>

                    <div className="w-2/12 my-3 text-center">
                        <img
                            className="w-20 h-20 object-cover rounded transform transition-transform duration-200 ease-in-out hover:scale-105"
                            src={CDN_URL + item.card?.info?.imageId}
                            alt={item.name}
                        />
                        <button
                            className="mt-2 bg-zinc-600 text-white rounded-sm px-3 py-1 text-sm shadow-lg"
                            onClick={() => handleAddItem(item.card?.info?.id)} // Add item from cart again
                        >
                            + Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Itemsincart;
