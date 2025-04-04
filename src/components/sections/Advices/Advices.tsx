import { Form, Input } from "antd";
import { useSendEmail } from "../../../hook/useQueryHandler/useQueryAction";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";

const Advices = () => {
  const { mutate, isLoading, isSuccess } = useSendEmail();

  const submit = (e: { email: string }) => {
    mutate(e);
  };

  return (
    <div className="flex items-start flex-col gap-5">
      <h1 className="text-[#3d3d3d] text-[18px] font-bold max-[450px]:text-center">
        Would you like to join newsletters?
      </h1>
      <Form onFinish={submit} className="w-[354px] flex max-[450px]:w-full">
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your email",
            },
          ]}
          className="flex-grow m-0"
          style={{ width: "100%" }}
        >
          <Input
            className="h-[40px] w-full placeholder:text-[#ACACAC] outline-none"
            type="email"
            placeholder="enter your email address..."
          />
        </Form.Item>

        <Form.Item className="m-0">
          <button
          disabled={isSuccess}
            type="submit"
            className="text-white bg-[#46A358] w-[85px] h-[40px] flex items-center justify-center rounded-r-lg"
          >
            {isLoading ? (
              <LoadingOutlined className="text-[18px]" />
            ) : isSuccess ? (
              <CheckOutlined />
            ) : (
              " Join"
            )}
          </button>
        </Form.Item>
      </Form>
      <p className="text-[#727272] text-[14px] font-[400] max-[450px]:text-center">
        We usually post offers and challenges in newsletter. We’re <br />
        your online houseplant destination. We offer a wide range <br />
        of houseplants and accessories shipped directly from our <br />
        (green)house to yours!
      </p>
    </div>
  );
};

export default Advices;
