import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils.js/cartSlice";
import { CDN_URL } from "../utils.js/Ct";
import { ShoppingCart, Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartedItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const calculateTotal = () => {
        return cartedItems.reduce((total, item) => {
            const price = item.card?.info?.price || 0;
            const quantity = item.card?.info?.quantity || 1;
            return total + (price * quantity) / 100;
        }, 0);
    };

    const totalItems = cartedItems.reduce((total, item) => total + (item.card?.info?.quantity || 1), 0);

    if (cartedItems.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-3xl shadow-2xl max-w-md border border-gray-100">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingCart className="w-12 h-12 text-gray-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Looks like you haven't added any delicious items to your cart yet. 
                        Explore our restaurants and find something amazing!
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Continue Shopping</span>
                    </Link>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Cart</h1>
                            <p className="text-gray-600">
                                {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart
                            </p>
                        </div>
                        
                        <button
                            onClick={handleClearCart}
                            className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <Trash2 className="w-5 h-5" />
                            <span>Clear Cart</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartedItems.map((item, index) => (
                            <div
                                key={`${item.card?.info?.id}-${index}`}
                                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-200"
                            >
                                <div className="flex items-center space-x-4">
                                    {/* Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            className="w-20 h-20 object-cover rounded-xl"
                                            src={CDN_URL + item.card?.info?.imageId}
                                            alt={item.card?.info?.name}
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                                            {item.card?.info?.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                            {item.card?.info?.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="text-lg font-bold text-gray-800">
                                                ₹{((item.card?.info?.price || 0) / 100).toFixed(2)}
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm text-gray-600">
                                                    Qty: {item.card?.info?.quantity || 1}
                                                </span>
                                                <button
                                                    onClick={() => handleRemoveItem(item.card?.info?.id)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({totalItems} items)</span>
                                    <span>₹{calculateTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery Fee</span>
                                    <span className="text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Taxes & Fees</span>
                                    <span>₹{(calculateTotal() * 0.18).toFixed(2)}</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between text-xl font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>₹{(calculateTotal() * 1.18).toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl mb-4">
                                Proceed to Checkout
                            </button>

                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-2">
                                    🎉 Free delivery on orders above ₹299
                                </p>
                                <p className="text-xs text-gray-400">
                                    Taxes and fees calculated at checkout
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;