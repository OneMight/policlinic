import type { PatientDivProps } from "@/types/appointment"
import { convertDate } from "@/shared/assets/getDate"
export const PatientDiv = ({appointmentInf, setSelectedApp, select}: PatientDivProps) =>{
    return(
        <button
        onClick={() => setSelectedApp(appointmentInf.idAppoitment)}
         className={`flex flex-row justify-between items-center w-4/5 min-h-[60px] gap-2 m-3 p-3 rounded-lg
          ${select === appointmentInf.idAppoitment? 'border-solid border-[2px] border-black  bg-slate-400':
            'border-solid border-[1px] border-black  bg-slate-100'
           } `}>
            <p className="text-sm">{appointmentInf?.Ticket.Patience?.FIO_Patience}</p>
            <p className="text-sm">{convertDate(appointmentInf.Ticket.date, appointmentInf.Ticket.time)}</p>
        </button>
    )
}

export default PatientDiv