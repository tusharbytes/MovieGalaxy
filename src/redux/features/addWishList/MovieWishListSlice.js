import { createSlice } from "@reduxjs/toolkit";

const movieAddSlice = createSlice({
  name: "movieAddSlice/singlemovies",
  initialState: {
    movieAdd: [],
    loading: false,
  },
  reducers: {
    addToWish: (state, action) => {

      console.log(JSON.stringify(state.movieAdd), "Current movieAdd array");
      console.log(action.payload, "Payload");

      const exists = state.movieAdd.some(item => item.id === action.payload.id);

      if (exists) {
        // Remove the item if it already exists (toggle behavior)
        state.movieAdd = state.movieAdd.filter(item => item.id !== action.payload.id);
      } else {
        // Add the item if it doesn't exist
        state.movieAdd.push(action.payload);
      }
    }
  }
});

export const { addToWish } = movieAddSlice.actions;
export default movieAddSlice.reducer;
