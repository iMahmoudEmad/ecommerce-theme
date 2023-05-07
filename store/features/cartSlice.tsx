import { CardC } from "@/components/card/Card.constant";
import CardI from "@/components/card/Card.interface";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  items: CardI[];
}

const initialState: CartState = {
  items: [CardC],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { reset, addToCart } = cart.actions;
export default cart.reducer;
