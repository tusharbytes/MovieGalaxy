
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getMovies = createAsyncThunk("getMovies", async () => {
    try {
        const response = await axios.get('https://jsonfakery.com/movies/paginated');
        return response.data;
    } catch (error) {

        throw new Error(error.response ? error.response.data : 'Something went wrong');
    }
});


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movieGet: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
               

                state.loading = false
                state.movieGet = action.payload;
                state.error = null;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default movieSlice.reducer;
