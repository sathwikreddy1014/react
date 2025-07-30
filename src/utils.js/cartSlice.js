import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(
                (i) => i.card.info.id === item.card.info.id
            );
            if (existing) {
                existing.card.info.quantity = (existing.card.info.quantity || 1) + 1;
            } else {
                item.card.info.quantity = 1;
                state.items.push(item);
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex(i => i.card.info.id === id);
            if (index > -1) {
                state.items.splice(index, 1);
            }
        },
        incrementItemQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.card.info.id === id);
            if (item) {
                item.card.info.quantity = (item.card.info.quantity || 1) + 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart, incrementItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
