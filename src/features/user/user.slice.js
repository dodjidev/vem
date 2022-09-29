import { createAction , createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { Data } from "../../api";
const USER_SLICE = "users"


console.log('USER_SLICE:', USER_SLICE)

export const login = createAsyncThunk(`${USER_SLICE}/login` , async (_args, { dispatch})=>{
    console.log('_args:', _args)
    let data = await Data.login(_args);
     console.log('data:', data)
     if(!data.error)
       dispatch(setUser(data.result))
    
    return data
})

export const signIn = createAsyncThunk(`${USER_SLICE}/signIn` , async (_args, { dispatch})=>{
    console.log('_args:', _args)
    let data = await Data.signIn(_args);
    console.log('data:', data)
    if(!data.error)
     dispatch(setUser(data.result))
    
    return data
})



export const setUser = createAction(`${USER_SLICE}/setUser`)
export const setIsAdmin = createAction(`${USER_SLICE}/setIsAdmin`)


export const getUser = state => state.users.user
export const getIsAdmin = state => state.users.isAdmin

const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
        isAdmin: false
    },
    reducers: {},
    extraReducers: {
        [setUser]: (state , { payload })=>{
               state.user = payload
               state.isAdmin = state.user?.email == "admin@example.com"
        }
    }, 
    
})


export default userSlice.reducer