import { combineReducers } from "@reduxjs/toolkit";

import * as fromAuth from "./auth.reducer";

export interface AppState {
  auth: fromAuth.State;
}

const rootReducer = combineReducers<AppState>({
  auth: fromAuth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
