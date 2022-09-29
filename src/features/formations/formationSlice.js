import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { _axios } from "../../api/axios";
const initialState = {
    list:[]
}
const SLICE_NAME = 'formations'


export const fetchFormations = createAsyncThunk(`${SLICE_NAME}/fetchFormations` , async (_args , {dispatch})=>{
    let data = await _axios.get('/formations');
    console.log('formationnn:', data.data.result)
    dispatch(setFormations(data.data.result))
})

export const fetchOneFormation = createAsyncThunk(`${SLICE_NAME}/fetchOneFormation` , async (_args , {dispatch})=>{
 let data = await _axios.get('/formations/'+_args);
 console.log('data:', data.data.result)
 return data.data.result
})

export const createOrUpdateFormation = createAsyncThunk(`${SLICE_NAME}/createOrUpdateFormation` , async (_args , {dispatch})=>{
 console.log('_arggs:', _args)
 let url = !isNaN(_args.id) && +_args.id > 0 ? '/formations/update/'+_args.id : '/formations' ;
 delete _args.id
 let data = await _axios.post(url,_args);
 console.log('data:', data.data.result)
 dispatch(fetchFormations())
})


export const removeFormation = createAsyncThunk(`${SLICE_NAME}/removeFormation` , async (_args , {dispatch})=>{
 console.log('_arggs:', _args)
 let data = await _axios.post('/formations/destroy/'+_args);
 console.log('data:', data.data.result)
 dispatch(fetchFormations())
})



let formationSlice = createSlice({
    initialState,
    name: "formations",
    reducers: {
        setFormations: (state , {payload}) => {
            state.list = payload

            console.log('formations:', payload)
        },
        addFormation: (state , action) => {
            state.list.push(action.payload) //= [...state.list , action.payload]
        }
    }

})

export const formationsList = state => state.formations.list
export const { setFormations , addFormation } = formationSlice.actions

export default formationSlice.reducer