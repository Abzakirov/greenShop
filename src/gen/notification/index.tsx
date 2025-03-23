import { notification } from "antd";

type NotificationApiType = "login" | "register";

const NotificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successful" });
      case "register":
        return notification.success({ message: "Register successful" });
      default:
        return;
    }
  };
  return notify;
};

export default NotificationApi;
