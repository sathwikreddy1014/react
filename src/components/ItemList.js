// components/ItemList.js
import { CDN_URL } from "../utils.js/Ct";
import { useDispatch } from "react-redux";
import { addItem } from "../utils.js/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="m-2 p-2">
            {items.map((item) => (
                <div key={item.card.info.id} className="h-42 border-b-2 flex m-0 p-0">
                    <div className="w-10/12 text-left">
                        <span>{item.card.info.name}</span>
                        <div>₹ {item.card.info.price / 100}</div>
                        <p>{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12 my-3">
                        <img
                            className="transform transition-transform duration-200 ease-in-out hover:scale-105"
                            src={CDN_URL + item.card.info.imageId}
                            alt={item.card.info.name}
                        />
                        <button
                            className="bg-zinc-400 text-white rounded-sm w-16 relative shadow-lg"
                            onClick={() => handleAddItem(item)}
                        >
                            + Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
