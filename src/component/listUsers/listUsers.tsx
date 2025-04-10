"use client";
import { useFetch } from "@/hooks/useFetch";
import { UserData } from "./type";

export default function ListUsers() {
const { data: users } = useFetch<{ results: UserData[]}>(`https://randomuser.me/api/?results=10`);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Photo
            </th>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Telephone
            </th>
            <th scope="col" className="px-6 py-3">
              Birth Date
            </th>
            <th scope="col" className="px-6 py-3">
              Days After Last Birthday
            </th>
          </tr>
        </thead>
        <tbody> 
           
        {users?.results.map((user, key) =>(
          <><tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <img
                        className="w-10 h-10 rounded-full"
                        src={user.picture.medium}
                        alt="user profile"/>
                </th>
                <td className="px-6 py-4">
                {user.name.first}
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
