import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { _axios } from "../../api/axios";
const SLICE_NAME = 'degrees'

export const fetchDegrees = createAsyncThunk(`${SLICE_NAME}/fetchDegrees` , async (_args , {dispatch})=>{
    let data = await _axios.get('/degrees');
    console.log('data:', data.data.result)
    dispatch(setDegrees(data.data.result))
})

export const fetchOneDegree = createAsyncThunk(`${SLICE_NAME}/fetchOneDegree` , async (_args , {dispatch})=>{
 let data = await _axios.get('/degrees/'+_args);
 console.log('data:', data.data.result)
 return data.data.result
})

export const createOrUpdateDegree = createAsyncThunk(`${SLICE_NAME}/createOrUpdateDegree` , async (_args , {dispatch})=>{
 console.log('_arggs:', _args)
 let url = !isNaN(_args.id) && +_args.id > 0 ? '/degrees/update/'+_args.id : '/degrees' ;
 delete _args.id
 let data = await _axios.post(url,_args);
 console.log('data:', data.data.result)
 dispatch(fetchDegrees())
})


export const removeDegree = createAsyncThunk(`${SLICE_NAME}/removeDegree` , async (_args , {dispatch})=>{
 console.log('_arggs:', _args)
 let data = await _axios.post('/degrees/destroy/'+_args);
 console.log('data:', data.data.result)
 dispatch(fetchDegrees())
})

const initialState = {
    list: []
}
let degreesSlice = createSlice({
    initialState,
    name: "degrees",
    reducers: {
        setDegrees: (state , action) => {
            state.list = action.payload
        },
        addDegree: (state , action) => {
            state.list.push(action.payload) //= [...state.list , action.payload]
        }
    }

})

export const degreesList = state => state.degrees.list
export const { setDegrees , addDegree} = degreesSlice.actions

export default degreesSlice.reducer