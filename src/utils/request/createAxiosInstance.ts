import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const instance = {
  default: axios.create(),
};

instance.default.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    nprogress.start();
    return config;
  },
  (error: AxiosError) => {
    nprogress.done();
    return Promise.reject(error);
  }
);

instance.default.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    nprogress.done();
    return response;
  },
  (error: AxiosError) => {
    nprogress.done();
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
