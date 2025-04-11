'use client';
import { useFetchData } from "@/hooks/useFetchData";
import { UserData } from "../listUsers/type";

interface ProfileProps {
    name: string;
}

export default function Profile({ name }:ProfileProps)  {
  const {data: users} = useFetchData();

    return (
      <div className="relative overflow-x-auto">
             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       
        <tbody> 
           
        {users?.results.map((user: UserData, key: UserData) =>(
          <><tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <img
                        className="w-20 h-10 rounded-full"
                        src={user.picture.medium}
                        alt="user profile"/>
                </th>
                <td className="px-6 py-4">
                {name}
                {user.name.last}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.location.city} / {user.location.state} / {user.location.country}</td>
                <td className="px-6 py-4">{user.cell}</td>
                <td className="px-6 py-4">{user.dob.date} / {user.dob.age}</td>
                <td className="px-6 py-4">{user.dob.date} - </td>
            </tr></>
        ))}
        </tbody>
      </table>
      </div>
    );
  }
  