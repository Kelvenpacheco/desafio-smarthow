"use client";
import ListUsers from "@/component/listUsers/listUsers";
import UsersDirectory from "@/component/users/usersDiretory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  return (

    <QueryClientProvider client={queryClient}>
    <div className="container mx-auto px-4 py-8">
      <UsersDirectory />
      <ListUsers />
    </div>
    </QueryClientProvider>
  );
}
