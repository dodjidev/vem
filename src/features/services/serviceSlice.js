import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { _axios } from "../../api/axios";
import { Data } from '../../api'

let initialState = {
    list: []
}

export const fetchServices = createAsyncThunk('services/fetchServices' , async (_args , {dispatch})=>{
       let data = await Data.fetchServices();
       if(!data.error)
        dispatch(setServices(data.result))
})

export const fetchOneServices = createAsyncThunk('services/fetchOneServices' , async (_args , {dispatch})=>{
    let data = await _axios.get('/services/'+_args);
    console.log('data:', data.data.result)
    return data.data.result
})

export const createOrUpdateService = createAsyncThunk('services/createOrUpdateService' , async (_args , {dispatch})=>{
    console.log('_arggs:', _args)
    let url = !isNaN(_args.id) && +_args.id > 0 ? '/services/update/'+_args.id : '/services' ;
    delete _args.id
    let data = await _axios.post(url,_args);
    console.log('data:', data.data.result)
    dispatch(fetchServices())
})


export const removeService = createAsyncThunk('services/removeService' , async (_args , {dispatch})=>{
    console.log('_arggs:', _args)
    let data = await _axios.post('/services/destroy/'+_args);
    console.log('data:', data.data.result)
    dispatch(fetchServices())
})



const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setServices: (state , action) => {
            state.list = action.payload
        }
        ,
        addService: (state , action) => {
            state.list.push(action.payload) //= [...state.list , action.payload]
        }
    }
})


export const servicesList = state => state.services.list

export const { setServices , addService} = serviceSlice.actions

export default serviceSlice.reducer