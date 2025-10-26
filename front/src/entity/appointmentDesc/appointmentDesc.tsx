import {ButtonEmployee} from "@/shared/assets/buttonEmployee"
import type { AppointmentDescProps } from "@/types/appointment"

export const AppointmentDesc = ({selectAppointment, setSelectedApp} : AppointmentDescProps) =>{
 return(
    <div className="flex flex-col justify-between items-center h-full">
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
                    <select name="SelectDiagnose" id="selectDiagnose"
                    className="rounded-xl p-3">
                        <option value="none" selected>None</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <label htmlFor="input" className="text-xl">Диагноз</label>
                    <input type="text" placeholder="Введите диагноз" 
                    className="rounded-xl p-3"/>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-around items-center w-full mb-8">
                <ButtonEmployee placeholder='Назад' onClick={() =>setSelectedApp(null)}/>
                <ButtonEmployee placeholder='Подтвердить'/>
        </div>
    </div>
 )
}

export default AppointmentDesc