import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Appointment } from "@/types/appointment";

interface Appointments {
    appointents: Array<Appointment>,
    currentId: number | null
}

const initialState: Appointments ={
    appointents:[],
    currentId:null,
}

export const appointmentSlice = createSlice({
    name:'appointments',
    initialState,
    reducers: {
        setActualAppointments: (state, action: PayloadAction<Appointment[] | undefined>) =>{
            state.appointents = action.payload ?? []
        },
        deleteFilledAppointment:(state, action: PayloadAction<number | undefined>) =>{
            state.appointents = state.appointents.filter((app) => app.idAppoitment !== action.payload) 
        }
    },
})

export const {setActualAppointments, deleteFilledAppointment} = appointmentSlice.actions
export default appointmentSlice.reducer