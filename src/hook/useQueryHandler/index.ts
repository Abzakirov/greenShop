import { useQuery } from "react-query";
import { useAxios } from "../useAxios";

interface UseQueryHandlerType {
    pathname: string;
    url: string;
    params?: object;
}

const useQueryHandler = ({ pathname, url, params }: UseQueryHandlerType) => {
    const { request } = useAxios();
    return useQuery([pathname], {
        queryFn: async () => {
            try {
                return await request({ url, params });
            } catch (error) {
                console.error("Query error:", error);
                throw error;
            }
        },
        onError: (error) => {
            console.error("Fetching data failed:", error);
        },
    });
};

export { useQueryHandler };
