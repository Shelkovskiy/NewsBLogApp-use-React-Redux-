import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
