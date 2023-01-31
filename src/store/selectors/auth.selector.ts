import { createSelector } from "reselect";

import { AppState } from "../reducers";

const authStoreSelector = (state: AppState) => state.auth;

export const authLoadingSelector = createSelector(
  authStoreSelector,
  (state) => state.isLoading
);
export const authErrorSelector = createSelector(
  authStoreSelector,
  (state) => state.error
);
export const authUserSelector = createSelector(
  authStoreSelector,
  (state) => state.user
);
