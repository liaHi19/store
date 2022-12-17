import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IBasketState {
  items: IProduct[];
}

const initialState: IBasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFromBasket: (state, { payload }) => {
      state.items = state.items.filter((item) => item._id !== payload);
    },
  },
});

export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: IProduct) => item._id === id);
};
export const selectBasketTotal = (state: RootState) => {
  state.basket.items.reduce(
    (total: number, item: IProduct) => (total += item.price),
    0
  );
};

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
