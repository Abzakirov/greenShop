import axios from "axios";

interface RequestType {
    method?: "GET" | "POST" | "DELETE" | "PUT";
    body?: object,
    url: string,
    params?: object,
    headers?: object
}
const myUrl = import.meta.env.VITE_BASE_URL;
const useAxios = () => {
    const request = async ({ method = "GET", body, url, params, headers }: RequestType) => {
        try {
            const response = await axios({
                url: `${myUrl}/${url}`,
                method,
                data: body,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    ...headers
                },
                params: {
                    access_token: "64bebc1e2c6d3f056a8c85b7",
                    ...params
                }
            });
            return response.data;
        } catch (error) {
            console.error("Axios request error:", error);
            throw error;
        }
    };
    return { request };
};

export default useAxios;

