import { createAction , createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { Data } from "../../api";
const MESSAGE_SLICE = "message"



export const fetchMessages = createAsyncThunk(`${MESSAGE_SLICE}/fetchMessages` , async (_args, { dispatch})=>{
    console.log('_args:', _args)
    let data = await Data.fetchMessages();
     console.log('data:', data)
     if(!data.error)
       dispatch(setMessages(data.result))
    
    return data
})

export const sendMessage = createAsyncThunk(`${MESSAGE_SLICE}/sendMessage` , async (_args, { dispatch})=>{
    console.log('_args:', _args)
    let data = await Data.sendMessage(_args);

    console.log('data:', data)
    if(!data.error)
     dispatch(setMessages(data.result))
    
    return data
})



export const setMessages = createAction(`${MESSAGE_SLICE}/setMessage`)
export const setIsAdmin = createAction(`${MESSAGE_SLICE}/setIsAdmin`)


export const getMessages = state => state.messages.message

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: null,
    },
    reducers: {},
    extraReducers: {
        [setMessages]: (state , { payload })=>{
               state.messages = payload
        }
    }, 
    
})


export default messageSlice.reducer