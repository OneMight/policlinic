import { Title } from "../../../entity/title"
import { useGetDataToken } from "../../../shared/api/userApi"
import { createTicket } from "../../../shared/api/ticketAPI" 
import type { DataToken } from "../../../types/types"
import Input from "../../../entity/input/input"
import { useState } from "react"
export const Admin = () =>{

    const {isLoading,error}:DataToken = useGetDataToken()

    const [FIO_Patience, setFIO] = useState('')
    const [FIO_Employee, setEmployee] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [goal, setgoal] = useState('')
    const [price, setPrice] = useState('')
    const handleDateChange = (value:string) =>{
        const dateObj = value ? new Date(value) : new Date()
        return dateObj
    }
    const handlePriceChange = (value: string) =>{
        const price = parseFloat(value) | 0
        return price
    }
    const createTicketFun = (FIO_Patience:string,FIO_Employee:string, date: Date, time:string, goal: string, cost:number,  event: React.FormEvent<HTMLFormElement>, diagnose:string = "none") => {
        event.preventDefault()
        try{
           createTicket(FIO_Patience, FIO_Employee, date, time, goal, cost, diagnose)
        } catch(error){
            console.log(error)
        }
        
    }
    if(isLoading){
        <p>Loading</p>
    }
    if(error){
        <p>{error.message}</p>
    }

    return(
        <>
        
        <Title/>
            <div className="flex flex-col rounded-md items-center w-2/4 w- bg-slate-500 mb-5">
                
                <p className="text-white text-2xl pt-3">Заполнение талона</p>
                <form onSubmit={(e) =>createTicketFun(FIO_Patience, FIO_Employee, handleDateChange(date), time, goal, handlePriceChange(price), e)}
                 className="flex flex-col items-center gap-5 py-5 w-full ">
                    <Input type='text' placeholder='ФИО пациента' width='w-72' method={setFIO}/>
                    <Input type='text' placeholder='ФИО доктора' width='w-72' method={setEmployee}/>
                    <div className="flex items-center gap-8">
                        <Input type='date' placeholder='Дата...' width='w-32' method={setDate}/>
                        <Input type='time' placeholder='Время...' width='w-32' method={setTime}/>
                    </div>
                    <Input type='text' placeholder='Цель визита...' width='w-72' method={setgoal}/>
                    <Input type='text' placeholder='Цена визита...' width='w-72' method={setPrice}/>
                    <button
                        className="w-36 bg-white p-1 text-xl rounded-lg mt-5
                            active:bg-white
                        transition-all delay-40 hover:bg-stone-300">
                            Печать талона
                    </button>
                </form>
            </div>
        </>
      
    )
}