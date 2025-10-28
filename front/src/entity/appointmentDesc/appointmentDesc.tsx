import { getidDiagnose, useGetDiagnosis } from "@/shared/api/diagnoseApi"
import {ButtonFunc} from "@/shared/assets/buttonFunc"
import type { AppointmentDescProps } from "@/types/appointment"
import OptionDiagnosis from "@/shared/assets/optionDiagnosis"
import { useState, type ChangeEvent } from "react"
import { updAppointment } from "@/shared/api/appointmentApi"
import { useAppDispatch } from "@/app/hooks"
import { deleteFilledAppointment } from "@/features/appointmentSlice"
export const AppointmentDesc = ({selectAppointment, setSelectedApp} : AppointmentDescProps) =>{
    const {diagnosis, isLoading, error} = useGetDiagnosis()
    const [diagnose, setDiagnose] = useState<string>('')
    const [idDiagnosis, setIdDiagnose] = useState<string>('')

    const dispatch = useAppDispatch();
    if(isLoading || error){
        return <p>Loading</p>
    }
    const handleSetDiagnose = (event: ChangeEvent<HTMLInputElement>) =>{
        setDiagnose(event.target.value)
    }
    const handleSetIdDiagnose = (event: ChangeEvent<HTMLSelectElement>) =>{
        setIdDiagnose(event.target.value)
    }
    const handleDeleteActualAppointment = ()=>{
        setSelectedApp(null)
        dispatch(deleteFilledAppointment(selectAppointment?.idAppoitment))
    }
    const handleUpdAppointment = async () =>{
        handleDeleteActualAppointment()
        const idDiagnose = await getidDiagnose(idDiagnosis)
        updAppointment(selectAppointment?.idAppoitment, idDiagnose, diagnose)
    }
 return(
    <div className="h-full p-5">
        <div className="flex flex-col justify-between items-center h-full bg-slate-200 rounded-r-lg">
            <div className="flex flex-col justify-around items-center p-3 w-full">
                <div className=" flex flex-row justify-between items-center gap-8 w-full p-3 border-solid border-b-2 border-t-2 border-black">
                    <p>ФИО пациента: {selectAppointment?.Ticket.Patience.FIO_Patience}</p>
                    <p>Время приема: {selectAppointment?.Ticket.time}</p>
                </div>
                <div className="flex flex-col items-start w-full gap-8 my-8 py-5 border-solid border-b-2 border-t-2 border-black">
                    <p className="text-xl w-full text-center">Описание</p>
                    <p className="text-start">{selectAppointment?.Ticket.goal}</p>
                </div>
                <div className="flex flex-row w-full justify-around">
                    <div className="flex flex-col gap-2 items-center">
                        <label htmlFor="select" className="text-xl">Код диагноза</label>
                        <OptionDiagnosis diagnosis = {diagnosis.data} handleSetIdDiagnose={handleSetIdDiagnose}/>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <label htmlFor="input" className="text-xl">Диагноз</label>
                        <input type="text" placeholder="Введите диагноз" onChange={handleSetDiagnose}
                        className="rounded-xl p-3"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-around items-center w-full mb-8">
                    <ButtonFunc placeholder='Назад' onClick={() =>setSelectedApp(null)}/>
                    <ButtonFunc placeholder='Подтвердить' onClick={() => handleUpdAppointment()}/>
            </div>
        </div>
        
    </div>
 )
}

export default AppointmentDesc