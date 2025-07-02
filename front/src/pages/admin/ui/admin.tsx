import { Title } from "../../../entity/title"
import { useGetDataToken } from "../../../shared/api/userApi"
import type { DataToken } from "../../../types/types"

export const Admin = () =>{

    const {user, isLoading,error}:DataToken = useGetDataToken()
    if(isLoading){
        <p>Loading</p>
    }
    if(error){
        <p>{error.message}</p>
    }

    return(
        <Title/>
     
    )
}