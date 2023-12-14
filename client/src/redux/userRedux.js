import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true;
        },
        loginSuccses:(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure:(state)=>{
            state.isFetching = false
            state.error = true;
        },
        loginError:(state)=>{
            state.error = true;
        },
        logout:(state)=>{
            state.currentUser = null;
        },
    }
})

export const { logout, loginStart, loginSuccses, loginFailure, loginError } = userSlice.actions
export default userSlice.reducer;