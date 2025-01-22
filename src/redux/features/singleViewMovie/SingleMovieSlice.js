import { createSlice } from "@reduxjs/toolkit";

const singleMovieSlice = createSlice({
    name: "singleMovieSlice",
    initialState: ({
        singleMovie: [],
        loading: false
    }),
    reducers: {
        singleMovieSelect: (state, action) => {
            state.singleMovie = action.payload
        }
    }
})
export const { singleMovieSelect } = singleMovieSlice.actions
export default singleMovieSlice.reducer