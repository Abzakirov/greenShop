import { useState } from "react";
import { Button, Input } from "antd";

import Google from "../../../assets/google.svg";
import Facebook from "../../../assets/facebook.svg";

const Register = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center">
        <h3 className="text-[#3D3D3D] text-[13px] font-sans pl-5">
          Enter your username and password to login.
        </h3>
        <div>
          <form className="flex flex-col gap-3 items-center ">
            <div
              className={`h-[40px] w-[400px] rounded-md border transition-all hover:border-[#46a358] ${
                emailFocus ? "border-[#46a358]" : "border-[#eaeaea]"
              }`}
            >
              <Input
                placeholder="Username"
                className="!h-full !w-full !border-none focus:!shadow-none "
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </div>
            <div
              className={`h-[40px] w-[400px] rounded-md border transition-all hover:border-[#46a358] ${
                emailFocus ? "border-[#46a358]" : "border-[#eaeaea]"
              }`}
            >
              <Input
                placeholder="Enter your email address"
                className="!h-full !w-full !border-none focus:!shadow-none "
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </div>

            <div
              className={`h-[40px] w-[400px] rounded-md border transition-all hover:border-[#46a358] ${
                passwordFocus ? "border-[#46a358]" : "border-[#eaeaea]"
              }`}
            >
              <Input.Password
                placeholder="**********"
                className="!h-full !w-full !border-none focus:!shadow-none "
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
            </div>
            <div
              className={`h-[40px] w-[400px] rounded-md border transition-all hover:border-[#46a358] ${
                emailFocus ? "border-[#46a358]" : "border-[#eaeaea]"
              }`}
            >
              <Input
                placeholder="Confirm Password"
                className="!h-full !w-full !border-none focus:!shadow-none "
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </div>
          </form>
        </div>
        <h3 className="text-[#46a358] text-[16px] text-right ">
          Forgot Password?
        </h3>
        <div>
          <button className="bg-[#46a358] text-white w-full h-[40px] rounded-md text-[18px] mt-3 opacity-100">
            Register
          </button>
        </div>
        <div className="flex items-center justify-center mb-5 mt-5 gap-4">
          <div className="w-[30%] h-[2px] bg-[#eaeaea]"></div>
          <p className="text-[#3D3D3D] text-[14px]">Or register with</p>
          <div className="w-[30%] h-[2px] bg-[#eaeaea]"></div>
        </div>
        <div className="flex items-center justify-center flex-col gap-3">
          <Button className=" !w-[380px] !h-[40px]">
            <img src={Google} alt="" />
            <h3 className="text-[#727272] text-[13px] font-medium">
              Continue with Google
            </h3>
          </Button>
          <Button className=" !w-[380px] !h-[40px]">
            <img src={Facebook} alt="" />
            <h3 className="text-[#727272] text-[13px] font-medium">
              Continue with Facebook
            </h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
