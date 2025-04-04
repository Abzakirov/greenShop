import { notification } from "antd";

type NotificationApiType =
  | "login"
  | "register"
  | "login_google"
  | 406
  | 409
  | "register_google"
  | "sendEmail";

const NotificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successful" });
      case "register":
        return notification.success({ message: "Register successful" });
      case "login_google":
        return notification.success({ message: "Login width  successful" });
      case 406:
        return notification.error({ message: "Email already exsit " });
      case 409:
        return notification.error({ message: "Email already exsit " });
        case "register_google":
          return notification.success({ message: "Register width  successful" });
          case "sendEmail":
            return notification.success({ message: "Email successfully added to our daily newsletters." });
      default:
        return;
    }
  };
  return notify;
};

export default NotificationApi;
