import { useQuery } from "react-query";
import useAxios from "../useAxios";

interface UseQueryHandlerType {
    pathname: string;
    url: string;
    params?: object;
}

const useQueryHandler = ({ pathname, url, params }: UseQueryHandlerType) => {
    const { request } = useAxios();

    return useQuery({
        queryKey: [pathname, params],
        queryFn: async () => {
            try {
                const response = await request({ url, params, method: "GET" });
                return response;
            } catch (error: any) {
                console.error("❌ useQueryHandler error:", error?.response?.data || error.message);
                throw error;
            }
        }
    });
};

export default useQueryHandler;
