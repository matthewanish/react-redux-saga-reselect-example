import { AnyAction, configureStore, PreloadedState } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const resettableRootReducer = (
  state: ReturnType<typeof rootReducer>,
  action: AnyAction
) => {
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
