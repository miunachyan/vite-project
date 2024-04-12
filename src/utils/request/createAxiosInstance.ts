import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {},
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

function createAxiosInstance(instanceName?: string) {
  if (instanceName) {
    if (instance[instanceName]) {
      return instance;
    }
    instance[instanceName] = axios.create();
  }
  return instance;
}

export default createAxiosInstance;
