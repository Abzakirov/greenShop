import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalAutchorization } from "../../../store/modalSlice/Modal";
import NotificationApi from "../../../gen/notification";
import { signInWithGoogle } from "../../../config";
import { cookieInfo } from "../../../gen/cookie";

const useLoginMutation = () => {
    const { request } = useAxios();
    const dispatch = useReduxDispatch();
    const notify = NotificationApi();
    const { setCookie } = cookieInfo();

    return useMutation({
        mutationFn: async ({ data }: { data: object }) => {
            try {
                const response = await request({
                    url: "user/sign-in",
                    body: data,
                    method: "POST",
                });
                return response;
            } catch (error: any) {
                console.error("Login error:", error);
                if (error.response?.status === 409) {
                    alert("Пользователь не найден! Пожалуйста, зарегистрируйтесь.");
                }
                throw error;
            }
        },
        onSuccess: (data) => {
            let { token, user } = data;
            console.log("Login successful:", data);
            setCookie("token", token);
            setCookie("user", user);
            localStorage.setItem("token", token);
            console.log(user);
            console.log(token);

            notify("login");
            dispatch(setModalAutchorization());
        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });
};

export default useLoginMutation;

export const useRegisterMutation = () => {
    const { request } = useAxios();
    const dispatch = useReduxDispatch();
    const notify = NotificationApi();
    const { setCookie } = cookieInfo();

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
            let { token, user } = data;
            setCookie("token", token);
            setCookie("user", user);
            localStorage.setItem("token", token);
            console.log("Register successful:", data);
            notify("register");
            dispatch(setModalAutchorization());
        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });
};

export const useLoginWithGoogle = () => {
    const { request } = useAxios();
    const dispatch = useReduxDispatch();
    const notify = NotificationApi();
    const { setCookie } = cookieInfo();

    return useMutation({
        mutationFn: async () => {
            const response = await signInWithGoogle();
            const email = response.user.email;

            try {
                return await request({ url: "user/sign-in/google", method: "POST", body: { email } });
            } catch (error: any) {
                notify(406);
                notify(409);
                if (error.response?.status === 409) {
                    notify(409);
                }
                throw new Error("User already exists.");
            }
        },
        onSuccess: (data) => {
            const { token, user } = data;
            setCookie("token", token);
            setCookie("user", user);
            localStorage.setItem("token", token);
            console.log("Login with Google successful:", data);
            notify("login_google");
            dispatch(setModalAutchorization());
        },
        onError: (error) => {
            console.error("Google login error:", error);
            alert("Ошибка входа через Google.");
        }
    });
};

export const useRegisterWithGoogle = () => {
    const { request } = useAxios();
    const dispatch = useReduxDispatch();
    const notify = NotificationApi();
    const { setCookie } = cookieInfo();

    return useMutation({
        mutationFn: async () => {
            const response = await signInWithGoogle();
            const email = response.user.email;

            try {
                return await request({ url: "user/sign-up/google", method: "POST", body: { email } });
            } catch (error) {
                notify(406);
                notify(409);
                throw new Error("User already exists.");
            }
        },
        onSuccess: (data) => {
            const { token, user } = data;
            setCookie("token", token);
            setCookie("user", user);
            localStorage.setItem("token", token);
            console.log("Register successful:", data);
            notify("register_google");
            dispatch(setModalAutchorization());
        },
        onError: (error) => {
            console.error("Google login error:", error);
            notify(406);

        }
    });
};


export const useSendEmail = () => {
    const { request } = useAxios();
const notify = NotificationApi();
    return useMutation({
        mutationFn: async (data: object) => {
            const responseData = await request({
                url: "features/email-subscribe",
                method: "POST",
                body: data,
            });


            return responseData;
        },
        onSuccess: () => {
            notify("sendEmail");
        },
    });
};

