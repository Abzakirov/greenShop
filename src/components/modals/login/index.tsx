import { useState } from "react";
import { Button, Form, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Google from "../../../assets/google.svg";
import Facebook from "../../../assets/facebook.svg";
import { FieldType } from "../../../@types";
import useLoginMutation from "../../../hook/useQueryHandler/useQueryAction";


const Login = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const { mutate, isLoading } = useLoginMutation();

  const loginSubmit = (e: FieldType) => {
    mutate({ data: e });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center">
        <h3 className="text-[#3D3D3D] text-[13px] font-sans pl-5">
          Enter your username and password to login.
        </h3>

        <Form
          onFinish={loginSubmit}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="flex flex-col gap-3 items-center w-full"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
            className="w-[400px] max-[470px]:w-full"
          >
            <div
              className={`h-[40px] w-full rounded-md border transition-all hover:border-[#46a358] ${
                emailFocus ? "border-[#46a358]" : "border-[#eaeaea]"
              }`}
            >
              <Input
                placeholder="almamun_uxui@outlook.com"
                className="!h-full !w-full !border-none focus:!shadow-none"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </div>
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
            className="w-[400px] max-[470px]:w-full"
          >
            <div
              className={`h-[40px] w-full rounded-md border transition-all hover:border-[#46a358] ${
                passwordFocus ? "border-[#46a358]" : "border-[#eaeaea]"
              }`}
            >
              <Input.Password
                placeholder="**********"
                className="!h-full !w-full !border-none focus:!shadow-none"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
            </div>
          </Form.Item>

          <h3 className="text-[#46a358] text-[16px] text-right w-full">
            Forgot Password?
          </h3>

          <Form.Item className="w-full">
            <button
              type="submit"
              className="bg-[#46a358] text-white w-full h-[40px] rounded-md text-[18px] mt-3 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? <LoadingOutlined className="text-xl" /> : "Login"}
            </button>
          </Form.Item>
        </Form>

        <div className="flex items-center justify-center mb-5 mt-5 gap-4">
          <div className="w-[30%]  max-[350px]:w-[25%] h-[2px] bg-[#eaeaea]"></div>
          <p className="text-[#3D3D3D] text-[14px]">Or login with</p>
          <div className="w-[30%] max-[350px]:w-[25%]  h-[2px] bg-[#eaeaea]"></div>
        </div>

        <div className="flex items-center justify-center flex-col gap-3">
  <Button className="w-[380px] max-w-full sm:w-full h-[40px] flex items-center justify-center gap-2">
    <img src={Google} alt="Google" />
    <h3 className="text-[#727272] text-[13px] font-medium">
      Login with Google
    </h3>
  </Button>
  <Button className="w-[380px] max-w-full sm:w-full h-[40px] flex items-center justify-center gap-2">
    <img src={Facebook} alt="Facebook" />
    <h3 className="text-[#727272] text-[13px] font-medium">
      Login with Facebook
    </h3>
  </Button>
</div>

      </div>
    </div>
  );
};

export default Login;
