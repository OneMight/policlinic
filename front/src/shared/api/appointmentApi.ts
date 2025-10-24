import type { Appointment } from "@/types/appointment";
import { axiosInstance } from "./index";

export const createAppointment = async(diagnose: string, idTicket: number, FIO_Employee:string):
 Promise<Appointment | unknown> =>{
    try{
        await axiosInstance.post('api/appointment/create',{
            diagnose, idTicket, FIO_Employee,
        })

    }
     catch(error){
        return error
    }
}