import ApiClient from "./index";

export const loginRequest = async (email: string, password: string) => {
  const data = await ApiClient.post("user/sign-in", { email, password });

  return data;
};
