"use client";
import Profile from "@/component/profile/profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface ProfileProps {
  params: {
    name: string;
  }
}

export default function ProfilePage({ params }: ProfileProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (

    <QueryClientProvider client={queryClient}>
    <div className="container mx-auto px-4 py-8">
      <Profile name={params.name}/>
    </div>
    </QueryClientProvider>
  );
}
