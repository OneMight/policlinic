import type { Appointment } from "@/types/appointment";
import { axiosInstance } from "./index";
import { useQuery } from "@tanstack/react-query";
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

export const useGetAppointments = (idEmployee: number) => {
    return useQuery({
        queryKey: ['appointments', idEmployee],
        queryFn: () => getAppointments(idEmployee),
        enabled: !!idEmployee
    })
}

const getAppointments = async (idEmployee: number): Promise<Appointment[]> => {
    const response = await axiosInstance.post('api/appointment/byId', {
        idEmployee
    })
    return response.data
}