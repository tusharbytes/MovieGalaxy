import { createSlice } from "@reduxjs/toolkit";

 const movieAddSlice  = createSlice({
    name:"movieAddSlice",
    initialState:({
        movieAdd : null,
        loading:false
    }),
    reducers:{
        addToWish :(state,action)=>{

            console.log(state,"stateAddlist")
            console.log(action,"ActionAddlist")



        }
    }

 }) 
export const {addToWish} = movieAddSlice.actions
 export default movieAddSlice.reducer