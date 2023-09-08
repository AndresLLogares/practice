import axios, { AxiosRequestConfig } from "axios";
import { LocalStorageKeys, utilStorage } from "../utils/utilsStorage";

export const AxiosInterceptor = () => {
  const { checkLocalStorage } = utilStorage();
  const updateHeader = (request: AxiosRequestConfig) => {
    const token = checkLocalStorage(LocalStorageKeys.TOKEN);
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
