import { useReduxSelector } from "../../hook/useRedux";
import AuthorizationModal from "./authorization";

const Modals = () => {
  const { ModalAutchorization } = useReduxSelector((state) => state.modalSlice);
  return <>{ModalAutchorization && <AuthorizationModal />}</>;
};

export default Modals;
