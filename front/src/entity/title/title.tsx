import { useGetDataToken } from "../../shared/api/userApi"
import type { DataToken } from "../../types/types"
import { getCurrentDate } from "@/shared/assets/getDate"

export const Title = () =>{
    const {user}:DataToken = useGetDataToken()
    
    return(
        <div className="w-full p-10 flex flex-row justify-between items-center">
            <span className="text-xl">{user?.FIO_employee}</span>
            <span className="text-xl">{getCurrentDate()}</span>
        </div>
    )
}