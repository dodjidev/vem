import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

import { _axios } from "../../api/axios";
const initialState = {
    list: []
}
const SLICE_NAME = 'schools'


export const fetchSchools = createAsyncThunk(`${SLICE_NAME}/fetchSchools` , async (_args , {dispatch})=>{
    let data = await _axios.get('/schools');
    console.log('data:', data.data.result)
    dispatch(setSchools(data.data.result))
})

export const fetchOneSchool = createAsyncThunk(`${SLICE_NAME}/fetchOneSchool` , async (_args , {dispatch})=>{
 let data = await _axios.get('/schools/'+_args);
 console.log('data:', data.data.result)
 return data.data.result
})

export const createOrUpdateSchool = createAsyncThunk(`${SLICE_NAME}/createOrUpdateSchool` , async (_args , {dispatch})=>{
 console.log('_arggs:', _args)
 let url = !isNaN(_args.id) && +_args.id > 0 ? '/schools/update/'+_args.id : '/schools' ;
 delete _args.id
 let data = await _axios.post(url,_args);
 console.log('data:', data.data.result)
 dispatch(fetchSchools())
})


export const removeSchool = createAsyncThunk(`${SLICE_NAME}/removeSchool` , async (_args , {dispatch})=>{
 console.log('_arggs:', _args)
 let data = await _axios.post('/schools/destroy/'+_args);
 console.log('data:', data.data.result)
 dispatch(fetchSchools())
})



let schoolsSlice = createSlice({
    initialState,
    name: "schools",
    reducers: {
        setSchools: (state , action) => {
            state.list = action.payload
        },
        addSchool: (state , action) => {
            state.list.push(action.payload) //= [...state.list , action.payload]
        }
    }
})

export const schoolsList = state => state.schools.list
export const { setSchools , addSchool } = schoolsSlice.actions

export default schoolsSlice.reducer