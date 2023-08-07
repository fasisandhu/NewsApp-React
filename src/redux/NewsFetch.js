import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    articles:[],
    totalResults: 10,
}

export const newsFetch = createSlice({
    name:'news',
    initialState,
    reducers:{
        getNewsFromApi:(state,action) =>{
            // state.cartItems.push(action.payload)
                state.articles = [...action.payload.articles] 
                state.totalResults = action.payload.totalResults
                //console.log(state.articles)
        },
    }
})

export const {getNewsFromApi} = newsFetch.actions
export default newsFetch.reducer