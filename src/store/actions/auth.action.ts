import { ActionType, createAsyncAction } from "typesafe-actions";
import { SignInPayload } from "../../types/auth.types";

export enum AuthTypes {
  Login = "[AuthTypes] Login",
  LoginSuccess = "[AuthTypes] LoginSuccess",
  LoginFailed = "[AuthTypes] LoginFailed",
}

export const loginAction = createAsyncAction(
  AuthTypes.Login,
  AuthTypes.LoginSuccess,
  AuthTypes.LoginFailed
)<SignInPayload, any, string>();

export type AuthActionUnion = ActionType<typeof loginAction>;
