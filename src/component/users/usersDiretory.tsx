import { useFetchData } from "@/hooks/useFetchData";
import { useState } from "react";

export default function UsersDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
   const {data: users} = useFetchData();

   const handleSearch = async () => {
    await users?.results.filter((user) => {
      return user.name.first.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const filteredUsers = users?.results.filter((user) =>
    user.name.first);


  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Users Directory</h1>
      </div>
      <form className="flex items-center max-w-lg mx-auto">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by name....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />

          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
            onClick={handleSearch}
          >
          </button>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
    </>
  );
}
