import axios, { AxiosRequestHeaders } from "axios";
import { store } from "../store";

const ApiClient = axios.create({
  baseURL: "url",
});

ApiClient.interceptors.request.use(async (config) => {
  const { token } = store.getState().auth;

  config.headers = {
    Authorization: token,
  } as AxiosRequestHeaders;

  return config;
});

ApiClient.interceptors.response.use((response) => response);

export default ApiClient;
