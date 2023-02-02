import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/auth.action";
import { authUserSelector } from "../../store/selectors/auth.selector";
import { SignInPayload } from "../../core/types/auth.types";

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(authUserSelector);

  const { handleSubmit, control } = useForm<SignInPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInPayload) => {
    dispatch(loginAction.request(data));
  };

  console.log("render");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {user}
      <Controller
        name="email"
        rules={{
          required: true,
        }}
        control={control}
        render={({ field: { onChange, value } }) => (
          <input
            type="email"
            value={value}
            onChange={onChange}
            autoComplete="email"
          />
        )}
      />
      <Controller
        name="password"
        rules={{
          required: true,
        }}
        control={control}
        render={({ field: { onChange, value } }) => (
          <input
            type="password"
            value={value}
            onChange={onChange}
            autoComplete="password"
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default SignInPage;
