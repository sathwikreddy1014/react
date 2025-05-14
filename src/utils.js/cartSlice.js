import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        // Add item from product list
        addItem: (state, action) => {
           state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        // Clear the entire cart
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
