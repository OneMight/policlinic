import { appointmentSlice } from '@/features/appointmentSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
        appointment: appointmentSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
