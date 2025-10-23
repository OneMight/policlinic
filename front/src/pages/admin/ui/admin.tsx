import { Title } from "../../../entity/title"
import { useGetDataToken } from "../../../shared/api/userApi"
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
    

    if(isLoading){
        <p>Loading</p>
    }
    if(error){
        <p>{error.message}</p>
    }

    return(
        <>
        
        <Title/>
            <div className="flex flex-col rounded-md items-center w-2/4 bg-slate-500 mb-5">
                
                <p className="text-white text-2xl pt-3">Заполнение талона</p>
                <form className="flex flex-col items-center gap-5 py-5 w-full">
                    <Input type='text' placeholder='ФИО пациента' width='w-64' method={setFIO}/>
                    <Input type='text' placeholder='ФИО доктора' width='w-64' method={setEmployee}/>
                    <div className="flex items-center gap-8">
                        <Input type='text' placeholder='Дата...' width='w-28' method={setDate}/>
                        <Input type='text' placeholder='Время...' width='w-28' method={setTime}/>
                    </div>
                    <Input type='text' placeholder='Цель визита...' width='w-64' method={setgoal}/>
                    <Input type='text' placeholder='Цена визита...' width='w-64' method={setPrice}/>
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