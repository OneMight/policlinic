import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Report, Reports } from "@/types/types";


const initialState: Reports ={
    rep: [],
    allRep:[],
}
export const reportSlice = createSlice({
    name:'report',
    initialState,
    reducers:{
       setAllAppointments: (state, action: PayloadAction<Report[]>) =>{
        state.rep = action.payload ?? [];
        state.allRep = action.payload ?? [];
       },
       filterByName: (state, action: PayloadAction<string>) =>{
        const name = action.payload.toLowerCase();
        state.rep = state.allRep.filter(report =>
            report.Employee.toLowerCase().includes(name)
        );
       }
       
    }
})

export const {setAllAppointments, filterByName} = reportSlice.actions
export default reportSlice.reducer