
// hooks
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// components
import { RootState, DispatchType } from "../../store/store";

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxDispatch: () => DispatchType = useDispatch; 

