import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    showModal: false
}


const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setShowModal: (state , action) => state.showModal = action.payload
    }
})

export const getShowModal = state => state.ui.showModal

export const { setShowModal } = uiSlice.actions

export default uiSlice.reducer