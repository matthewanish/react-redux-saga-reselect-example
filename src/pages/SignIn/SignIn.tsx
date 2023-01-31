import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/auth.action";
import { authUserSelector } from "../../store/selectors/auth.selector";

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(authUserSelector);

  const onSubmit = () => {
    dispatch(loginAction.request({ password: "test", email: "test" }));
  };

  return <div onClick={onSubmit}>{user}</div>;
};

export default SignInPage;
