import { useFetch } from "./useFetch";
import { UserData } from "@/component/listUsers/type";


export const useFetchData = () => {
    return useFetch<{ results: UserData[] }>(`https://randomuser.me/api/?results=10`);

    
}