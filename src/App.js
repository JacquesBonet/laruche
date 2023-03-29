import React, { useState } from 'react'
import "./css/app.css";
import { Routes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/dumbs/header";

export const App = () => {
  const [state, setState] = useState({ search: "" });
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity
          }
        }
      })
  );
  const handleSearch = search => {
    queryClient.clear()
    setState({ search });
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="block w-full h-screen bg-slate-100">
        <Header onSearch={handleSearch} />
        <main className="mt-20 flex w-full flex-col bg-slate-100">
          <Routes state={state} />
        </main>
      </div>
    </QueryClientProvider>
  );
};
