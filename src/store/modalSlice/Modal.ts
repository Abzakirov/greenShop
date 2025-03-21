import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    ModalAutchorization: boolean
}

const initialState: initialStateType = {
    ModalAutchorization: false
}


const ModalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        setModalAutchorization(state,) {
            state.ModalAutchorization = !state.ModalAutchorization
        }
    }
})

export const { setModalAutchorization } = ModalSlice.actions
export default ModalSlice.reducer