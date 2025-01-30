import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const jobsApi = createAsyncThunk("jobsApi", async () => {
    try {
        const response = await axios.get(`https://jsonfakery.com/jobs`)
        return response.data

    }

    catch (error) {
        console.log(error)
    }
})

const jobSlice = createSlice({
    name: "jobSlice",
    initialState: ({
        jobsOffers: [],
        loading: false
    }), reducers: {},
    extraReducers: (builders) => {
        builders
            .addCase(jobsApi.pending, (state) => {
                state.loading = true
            })
            .addCase(jobsApi.fulfilled, (state, action) => {
                state.jobsOffers = action.payload
                state.loading = false
            })
            .addCase(jobsApi.rejected, (state) => {
                state.loading = false
            })
    }
})
export default jobSlice.reducer
