import { FC } from "react";
import { Provider } from "react-redux";

// components
import { ComponentType } from "../@types";
import Modals from "../components/modals";
import { myStore } from "../store/store";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const ProvidersConfig: FC<ComponentType> = ({ children }) => {
  return (
    <Provider store={myStore}>
      <QueryClientProvider client={queryClient}>
        <Modals />
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default ProvidersConfig;
