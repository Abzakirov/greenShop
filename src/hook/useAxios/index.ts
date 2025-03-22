import axios from "axios";

interface RequestType {
    method?: "GET" | "POST" | "DELETE" | "PUT";
    body?: object;
    url: string;
    params?: object;
    headers?: object;
}

export const useAxios = () => {
    const request = async ({ method = "GET", url, params, body, headers }: RequestType) => {
        try {
            const response = await axios({
                url: `${import.meta.env.VITE_BASE_URL}/${url}`,
                method,
                data: body,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    ...headers,
                },
                params: {
                    access_token: "64bebc1e2c6d3f056a8c85b7",
                    ...params,
                },
            });

            return response.data.data;
        } catch (error: any) {
            console.error(
                "API Error:",
                error.response?.status,
                error.response?.data || error.message
            );
            throw error;
        }
    };

    return { request };
};
