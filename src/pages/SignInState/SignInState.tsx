import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/auth.action";
import { authUserSelector } from "../../store/selectors/auth.selector";

const SignInStatePage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(authUserSelector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const onSubmit = () => {
    dispatch(loginAction.request({ password, email }));
  };

  console.log("render");

  return (
    <div onClick={onSubmit}>
      {user}
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        autoComplete="email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        autoComplete="password"
      />
      <input type="submit" />
    </div>
  );
};

export default SignInStatePage;
