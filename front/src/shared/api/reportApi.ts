import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "."
import type { Report } from "@/types/types"

export const useGetReport = (date: string) =>{
     return useQuery({
          queryKey: ['report', date],
          queryFn: () => fetchReport( date),
          staleTime:0,
      })

}
const fetchReport = async ( date: string): Promise<Report[]> =>{
        const response = await axiosInstance.post('api/report/getByDate',{
            date
        })
        return response.data
    }