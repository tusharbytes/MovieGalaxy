import { createSlice } from "@reduxjs/toolkit";

const ProductWishSlice = createSlice({
  name: "productWish",
  initialState: {
    items: [],
    loading: false,
    error: "",
  },
  reducers: {
    addToProductWish: (state, action) => {
      console.log(state, "state");
      console.log(action, "action");


      const exists = state.items.some(item => item.id === action.payload.id);
      console.log(exists, "existsproduct");

      if (exists) {
        // Remove the item if it already exists (toggle behavior)
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        // Add the item if it doesn't exist
        state.items.push(action.payload);
      }
    },
  },
});

export const { addToProductWish } = ProductWishSlice.actions;
export default ProductWishSlice.reducer;
