import { useMutation } from "react-query";
import useAxios from "../../useAxios";

const useLoginMutation = () => {
    const { request } = useAxios();

    return useMutation({
        mutationFn: async (data: object) => {
            return await request({
                url: "user/sign-in",
                method: "POST",
                body: data
            });
        },
        onSuccess: (data) => {
            console.log("✅ Login muvaffaqiyatli:", data);
        },
        onError: (error: any) => {
            console.error("❌ Login xatosi:", error?.response?.data || error.message);
        }
    });
};

export default useLoginMutation;
