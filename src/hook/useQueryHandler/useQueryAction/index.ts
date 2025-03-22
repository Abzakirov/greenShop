import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalAutchorization } from "../../../store/modalSlice/Modal";
import NotificationApi from "../../../gen/notification";

const useLoginMutation = () => {
    const { request } = useAxios();
    const dispatch = useReduxDispatch();
    const notify = NotificationApi()
    return useMutation({
        mutationFn: async ({ data }: { data: object }) => {
            try {
                const response = await request({
                    url: "user/sign-in",
                    body: data,
                    method: "POST",

                });
                return response;
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            } finally {
                "salom"
            }
        },
        onSuccess: (data) => {
            dispatch(setModalAutchorization())
            notify("login")
            let { token } = data.data
            console.log("Login successful:", data);
            localStorage.setItem("token",token)


        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });
};

export default useLoginMutation;