import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shoppingApi = createAsyncThunk("shoppingApi", async () => {
    try {
        const response = await axios.get(`https://jsonfakery.com/carts`)
        return response.data

    }

    catch (error) {
        console.log(error)
    }
})

const shoppingCart = createSlice({
    name: "shoppingCart",
    initialState: ({
        items: [],
        loading: false
    }),
    reducers: {},
    extraReducers: (builders) => {
        builders
            .addCase(shoppingApi.pending, (state) => {
                state.loading = true
            })
            .addCase(shoppingApi.fulfilled, (state, action) => {
                state.items = action.payload
                state.loading = false
            })
            .addCase(shoppingApi.rejected, (state) => {
                state.loading = false
            })
    }

})
export default shoppingCart.reducer
