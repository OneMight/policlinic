import Input from "@/entity/input/input"
import { useState, useEffect} from "react"
import EnhancedTable from "@/shared/assets/reportTable"
import { getCurrentYear } from "@/shared/assets/getDate"
import { useGetReport } from "@/shared/api/reportApi"
import { useAppDispatch } from "@/app/hooks"
import { setAllAppointments, filterByName } from "@/features/reportSlice"
export const ReportPage = () =>{
    const year = getCurrentYear();
    const [name,setName] = useState<string>('')
    const [date, setDate] = useState<string>(`01.01.${year}-31.03.${year}`)
    const dispatch = useAppDispatch()
    const {data: reports, isLoading, error} = useGetReport(date)
    useEffect(() => {
    if (reports) {
        dispatch(setAllAppointments(reports));
    }
    }, [reports, dispatch]);
    const handleSetFilter = (name: string) =>{
        setName(name)
        dispatch(filterByName(name))
    }
    
    if(isLoading || error){
        return <p>Loading</p>
    }
    return(
        <div className="flex flex-col justify-around items-center h-full w-full gap-10">
            <h2 className="text-3xl ">Ведомость учета приема пациентов поликлиники</h2>
            <div className="w-3/4 flex flex-col justify-between items-center gap-10">
                <div className="flex flex-row justify-between items-center w-full">
                    <Input type='text' placeholder="ФИО врача" width="w-72" value={name} autoCapitalize method={(name) =>handleSetFilter(name)}/>
                    <select name="selectDate" id="selectDate" onChange={(e) =>setDate(e.target.value)} className="bg-slate-400 p-3 rounded-xl">
                        <option value={`01.01.${year}-31.03.${year}`}>01.01.{year}-31.03.{year}</option>
                        <option value={`01.04.${year}-31.06.${year}`}>01.04.{year}-31.06.{year}</option>
                        <option value={`01.07.${year}-31.09.${year}`}>01.07.{year}-31.09.{year}</option>
                        <option value={`01.10.${year}-31.12.${year}`}>01.10.{year}-31.12.{year}</option>
                    </select>
                </div>
                {
                    reports?.length ? (
                        <EnhancedTable/>
                    ) :(
                        <p className="text-3xl">Нет данных по данному времени</p>
                    )
                }
               
            </div>
            
        </div>
    )
}