import { createSlice } from "@reduxjs/toolkit";

export const privateReducer = createSlice({
    name: "private",
    initialState:{list:[],error:''},
    reducers: {
        getListFromAPI:(state, action) => {
            state.list = action.payload;
        },
        updateListFromAPI: (state, action) => {
            const {id, status, time } = action.payload; 
            const item = state.list.find(item => item.id === id);
            if(item){
                item.status = status;
                item.time = time;
            }
        },
        logError:(state,action) => {
            state.error = action.payload;
        }
    }
})

export const {getListFromAPI,updateListFromAPI,logError} = privateReducer.actions;
export default privateReducer.reducer;