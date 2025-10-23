import { useGetDataToken } from "../../shared/api/userApi"
import type { DataToken } from "../../types/types"

export const Title = () =>{
    const {user}:DataToken = useGetDataToken()
    const getDate = () =>{
        const date = new Date()
        return `${date.getDate()<10? `0${date.getDate()}` : `${date.getDate()}`}.${date.getMonth()+1<10? `0${date.getMonth()+1}`:`${date.getMonth()+1}`}.${date.getFullYear()}`
    }
    return(
        <div className="w-full p-10 flex flex-row justify-between items-center">
            <span className="text-xl">{user?.FIO_employee}</span>
            <span className="text-xl">{getDate()}</span>
        </div>
    )
}