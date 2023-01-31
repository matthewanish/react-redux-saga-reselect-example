import { createReducer } from "typesafe-actions";
import { AuthActionUnion, loginAction } from "../actions/auth.action";

export interface State {
  isLoading: boolean;
  user: any;
  error: string;
  token: string;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  user: null,
  token: null,
};

export const reducer = createReducer<State, AuthActionUnion>(initialState)
  .handleAction(loginAction.success, (state, action) => ({
    ...state,
    isLoading: false,
    ...action.payload,
    error: null,
  }))
  .handleAction(loginAction.failure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload,
  }))
  .handleAction(loginAction.request, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  }));
