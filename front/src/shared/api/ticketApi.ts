import { useQuery } from "@tanstack/react-query";
import type { Ticket } from "../../types/ticket";
import { axiosInstance } from "./index";
import { createAppointment } from "./appointmentApi";

export const createTicket = async (FIO_Patience:string,
        FIO_Employee:string,
        date: Date,
        time:string,
        goal: string,
        cost:number,
        diagnose:string,
    ) : Promise<Ticket | unknown> =>{
    try{
        const response = await axiosInstance.post('api/ticket/create',{
            FIO_Patience, FIO_Employee, date, time, goal,
            cost
        })
        createAppointment(diagnose, response.data.idTicket, FIO_Employee)
        return response.data
        
    } catch(error){
        return error
    }
}

export const useGetTicket = () =>{
    const fetchTicket = async() =>{
        const response = await axiosInstance.get('api/ticket')
        return response.data
    };
    
    const{
        data:ticket,
        error,
        isLoading,
    } = useQuery({
        queryKey:['ticketFetch'],
        queryFn:fetchTicket,
        staleTime:0
    });

    return{
        ticket,
        error,
        isLoading
    }
}