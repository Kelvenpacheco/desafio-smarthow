import { useQuery } from "@tanstack/react-query";
import { UserDataResponse } from "./type";
import axios from "axios";


export const useQueryData = () => {
    
    return useQuery<UserDataResponse>({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get('https://randomuser.me/api/?page=3&results=10')
            const data = response.data

            return data
        }
    });
}