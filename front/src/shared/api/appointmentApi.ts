import type { Appointment, UpdAppointmentProps } from "@/types/appointment";
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

export const updAppointment = async (idAppointment:number | undefined, idDiagnose:number, diagnose: string ): Promise<UpdAppointmentProps> =>{
    const response = await axiosInstance.post('/api/appointment/updAppo',{
        idAppoitment: idAppointment,
        idDiagnose: idDiagnose,
        diagnosis: diagnose
    })
    return response.data
}