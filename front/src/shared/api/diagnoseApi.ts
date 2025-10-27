import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "."

export const useGetDiagnosis = () =>{
    const fetchDiagnosis = async () =>{
        const response = await axiosInstance.get('api/diagnosis/')
        return response.data
    }

    const {
        data:diagnosis,
        isLoading,
        error
    } = useQuery({
        queryKey:['fetchDiagnosis'],
        queryFn:fetchDiagnosis,
        staleTime:100
    });
    return{
        diagnosis,
        isLoading,
        error
    }
}
export const getidDiagnose =  async(code: string): Promise<number> =>{
    const response = await axiosInstance.get(`api/diagnosis/getByName/${code}`)
    return response.data
}