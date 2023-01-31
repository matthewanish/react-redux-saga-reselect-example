import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPaths, DashboardPaths } from "./constants/paths.constants";
import { SignInPage } from "./pages/SignIn";
import { store } from "./store";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AuthPaths.Auth}>
          <Route path={AuthPaths.SignIn} element={<SignInPage />} />
        </Route>
        <Route path="*" element={<Navigate to={DashboardPaths.Dashboard} />} />
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
