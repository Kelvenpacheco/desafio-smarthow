import { useQuery } from "@tanstack/react-query";


export const useFetchData = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('https://randomuser.me/api/?results=10')
      const data = await response.json()
      return data
    },
    staleTime: 1000 * 60 * 5,
  })

    
}