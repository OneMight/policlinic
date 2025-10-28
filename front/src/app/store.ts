import { appointmentSlice } from '@/features/appointmentSlice'
import { reportSlice } from '@/features/reportSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
        appointment: appointmentSlice.reducer,
        report: reportSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
