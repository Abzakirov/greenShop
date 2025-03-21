import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from './modalSlice/Modal'

export const myStore = configureStore({
    reducer: {
        modalSlice: ModalSlice
    }
})

export type DispatchType = typeof myStore.dispatch
export type RootState = ReturnType<typeof myStore.getState>