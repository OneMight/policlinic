import { useQuery } from '@tanstack/react-query';
import {axiosInstance} from './index'
export const LoginUser = async (FNS:string, password:string) => {
    try{
        const response = await axiosInstance.post('api/employee/login',{
            FIO_Employee:FNS,
            password,
        })
        return response.data;
    } catch (error){
        console.error(error)
    }
}

export const useGetDataToken = () =>{
   const fetchToken = async() =>{
    const response = await axiosInstance.post('api/employee/token')
    return response.data
   };

   const {
    data: user,
    error,
    isLoading,
   } = useQuery({
    queryKey:['userToken'],
    queryFn:fetchToken,
    staleTime:0
   });

   return{
    user,
    error,
    isLoading
   }
}
