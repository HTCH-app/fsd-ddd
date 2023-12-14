import { FC, ReactNode } from "react";
import { QueryClientProvider } from "../../query-client-provider/ui/query-client-provider";

interface ProviderProps {
    children: ReactNode;
}

export const Providers: FC<ProviderProps> = ({ children }) =>
    <QueryClientProvider>
        {children}
    </QueryClientProvider>
