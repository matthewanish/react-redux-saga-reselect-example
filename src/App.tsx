import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPaths } from "./core/constants/paths.constants";
import ExampleWithSwitch from "./pages/ExampleWithSwitch/ExampleWithSwith";
import { SignInPage } from "./pages/SignIn";
import { SignInStatePage } from "./pages/SignInState";
import { store } from "./store";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AuthPaths.Auth}>
          <Route path={AuthPaths.SignIn} element={<ExampleWithSwitch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
