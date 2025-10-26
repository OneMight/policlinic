import { Title } from "@/entity/title"
import PatientDiv from "@/entity/patientDiv/patientDiv"
import { useGetAppointments } from "@/shared/api/appointmentApi"
import { useGetDataToken } from "@/shared/api/userApi"
import { useState } from "react"
import AppointmentDesc from "@/entity/appointmentDesc/appointmentDesc"

export const DoctorPage = () =>{
    
    const user = useGetDataToken()
     const [selected, setSelected] = useState<number | null>(null)
    const {data: appointment, isLoading: appointmentLoading } = useGetAppointments(user.user?.id)
    if(appointmentLoading || user.isLoading){
        return <p>Loading</p>
    }
    const handleSetSelected = (id:number) =>{
        setSelected(id)
    }
    console.log(appointment)
    return(
        <>
            <Title/>
            <div className="flex flex-row gap-3 rounded-lg bg-slate-300 min-h-[700px] max-h-[700px] w-11/12 mb-5">
                <div className="flex flex-col justify-start items-center w-2/5 min-h-[700px] max-h-[700px] border-r-4 border-white">
                    {appointment?.map((app) =>(
                        <PatientDiv key={app.idAppoitment} appointmentInf={app} setSelectedApp={handleSetSelected} select={selected}/>
                    ))}
                </div>
                <div className="flex flex-col w-3/5">
                    { 
                        selected?
                        (
                            <AppointmentDesc key={selected} selectAppointment={appointment?.find((app) => app.idAppoitment === selected)} setSelectedApp={setSelected}/>
                            
                        ):
                        (
                            <>
                            </>
                        )  
                    }
                </div>
            </div>
        </>
    )
}