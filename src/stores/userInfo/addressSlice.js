import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: {}
   
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        //set the address and then at the end when the form is submitted we want to remove that information.
        setAddress: (state, action) => {
            return {address: action.payload}
        },
        clearAddress: (state) => {
            return { address: {}}
        }
    },
})

export const getAddress = (state, action) => state.address.address

export const { setAddress, clearAddress } = addressSlice.actions

export default addressSlice.reducer

