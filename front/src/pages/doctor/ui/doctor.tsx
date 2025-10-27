import { Title } from "@/entity/title"
import PatientDiv from "@/entity/patientDiv/patientDiv"
import { useGetAppointments } from "@/shared/api/appointmentApi"
import { useGetDataToken } from "@/shared/api/userApi"
import { useEffect, useState } from "react"
import AppointmentDesc from "@/entity/appointmentDesc/appointmentDesc"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { setActualAppointments } from "@/features/appointmentSlice"

export const DoctorPage = () =>{
    
    const user = useGetDataToken()
     const [selected, setSelected] = useState<number | null>(null)
     const dispatch = useAppDispatch()
    const {data: appointment, isLoading: appointmentLoading } = useGetAppointments(user.user?.id)

    useEffect(() =>{
        dispatch(setActualAppointments(appointment))
    },[dispatch, appointment])
    const {appointents} = useAppSelector((state) => state.appointment)
    if(appointmentLoading || user.isLoading){
        return <p>Loading</p>
    }
    const handleSetSelected = (id:number) =>{
        setSelected(id)
    }
    console.log(appointents)


   
    return(
        <>
            <Title/>
            <div className="flex flex-row gap-3 rounded-lg bg-slate-300 min-h-[700px] max-h-[700px] w-11/12 mb-5">
                <div className="flex flex-col justify-start items-center w-2/5 min-h-[700px] max-h-[700px] border-r-4 border-white">
                    {appointents?.map((app) =>(
                        <PatientDiv key={app?.idAppoitment} appointmentInf={app} setSelectedApp={handleSetSelected} select={selected}/>
                    ))}
                </div>
                <div className="flex flex-col w-3/5">
                    { 
                        selected?
                        (
                            <AppointmentDesc key={selected} selectAppointment={appointents?.find((app) => app.idAppoitment === selected)} setSelectedApp={setSelected}/>
                            
                        ):(<></>)  
                    }
                </div>
            </div>
        </>
    )
}