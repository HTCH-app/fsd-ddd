'use client'
import { FC, ReactNode } from "react";
import {
    QueryClientProvider as ClientProvider,
    QueryClient,
} from '@tanstack/react-query'
import { queryClient } from "../lib/query-client";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface QueryClientProviderProps {
    children: ReactNode;
    client?: QueryClient
}

export const QueryClientProvider: FC<QueryClientProviderProps> = ({ children, client = queryClient }) =>
    <ClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </ClientProvider>
