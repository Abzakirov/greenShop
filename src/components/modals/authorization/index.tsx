import { Modal } from "antd";

// components
import Login from "../login";
import Register from "../register";
import { useState } from "react";
import { useReduxDespatch, useReduxSelector } from "../../../hook/useRedux";
import { setModalAutchorization } from "../../../store/modalSlice/Modal";

const AuthorizationModal = () => {
  const [active, setActive] = useState(true);
  const { ModalAutchorization } = useReduxSelector((state) => state.modalSlice);
  const dispatch = useReduxDespatch();
  return (
    <Modal
      open={ModalAutchorization}
      footer={false}
      onCancel={() => dispatch(setModalAutchorization())}
    >
      <div>
        <div className="flex items-center justify-center gap-7 mt-7">
          <button
            onClick={() => setActive(true)}
            className={`text-[20px] font-mediumn ${active && "text-[#46a358]"}`}
          >
            Login
          </button>
          <div className="w-[1px] h-[20px] bg-[#000]"></div>
          <button
            onClick={() => setActive(false)}
            className={`text-[20px] font-mediumn ${
              !active && "text-[#46a358]"
            }`}
          >
            Register
          </button>
        </div>
        <div className="mt-4">{active ? <Login /> : <Register />}</div>
      </div>
    </Modal>
  );
};

export default AuthorizationModal;
