import {
  takeLatest,
  Effect,
  call,
  put,
  SagaReturnType,
} from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { loginRequest } from "../../services/auth.services";
import { loginAction } from "../actions/auth.action";

export class AuthSagaWorker {
  static *login({ payload }: ActionType<typeof loginAction.request>) {
    try {
      const data: SagaReturnType<typeof loginRequest> = yield call(
        loginRequest,
        payload.email,
        payload.password
      );

      yield put(loginAction.success(data));
    } catch (error: any) {
      yield put(loginAction.failure(error.response.data.detail));
    }
  }
}

export function* authSaga(): Generator<Effect, void> {
  yield takeLatest(loginAction.request, AuthSagaWorker.login);
}
