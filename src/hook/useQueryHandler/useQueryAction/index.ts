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

            let { token, user } = data
            console.log("Login successful:", data);
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            console.log(user);
            console.log(token);


            notify("login")
            dispatch(setModalAutchorization())

        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });
};

export default useLoginMutation;

export const useRegisterMutation = () => {
    const { request } = useAxios();

    return useMutation({
        mutationFn: async (data: object) => {
            try {
                const response = await request({
                    url: "user/sign-up",
                    method: "POST",
                    body: data,
                });
                return response;
            } catch (error) {
                console.error("Registration error:", error);
                throw error;
            }
        },
        onSuccess: (data) => {

           let { token, user } = data
           const dispatch = useReduxDispatch();
           const notify = NotificationApi()
            console.log("Register successful:", data);
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            notify("register")
            dispatch(setModalAutchorization())

        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });
};
