import { useQuery } from "@tanstack/react-query";
import { UserDataResponse } from "./type";
import axios from "axios";


export const useQueryData = () => {
    
    return useQuery<UserDataResponse>({
        queryKey: ['users'],
        staleTime: 1000 * 60 * 2,
        queryFn: async () => {
            const response = await axios.get('https://randomuser.me/api/?page=1&results=10')
            const data = response.data

            return data
        }, 
        refetchInterval: 2 * 60 * 1000,
            });
}