import { useQuery } from '@tanstack/react-query';
import {axiosInstance} from './index'
export const LoginUser = async (FNS:string, password:string) : Promise<string | unknown> => {
    try {
         const response = await axiosInstance.post('api/employee/login',{
            FIO_Employee:FNS,
            password,
        })
        return response.data;
    } catch (error) {
       return error
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

export const Logout = async () =>{
    try{
        axiosInstance.post('api/employee/logout')
    } catch(error){
        console.log(error)
    }
}
export const isAdmin = async(FNS:string) : Promise<boolean | unknown> =>  {
    try {
         const response = await axiosInstance.post('api/employee/isAdmin',{
     FIO_Employee: FNS,
    })
    return response.data
    } catch (error) {
        return error
    }
   
}