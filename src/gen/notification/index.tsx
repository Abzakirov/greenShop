import { notification } from "antd";

type NotificationApiType = "login";

const NotificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        notification.success({ message: "Login successful" });
        break; 
      default:
        return;
    }
  };
  return notify;
};

export default NotificationApi;
