import axios, { AxiosRequestConfig, CancelStatic, CancelTokenStatic } from "axios";
import createAxiosInstance from "./createAxiosInstance";
import helper from "./helper";

interface IRequestConfig extends AxiosRequestConfig {
  instanceName?: string;
  withFullResponse?: boolean;
}

export interface IRequestProps {
  get: <T = any>(url: string, config?: IRequestConfig) => Promise<T>;
  delete: <T = any>(url: string, config?: IRequestConfig) => Promise<T>;
  head: <T = any>(url: string, config?: IRequestConfig) => Promise<T>;
  options: <T = any>(url: string, config?: IRequestConfig) => Promise<T>;
  post: <T = any>(url: string, data?: any, config?: IRequestConfig) => Promise<T>;
  put: <T = any>(url: string, data?: any, config?: IRequestConfig) => Promise<T>;
  patch: <T = any>(url: string, data?: any, config?: IRequestConfig) => Promise<T>;
}

interface IRequest extends IRequestProps {
  <T = any>(options: IRequestConfig): Promise<T>;
  <T = any>(url: string, config: IRequestConfig): Promise<T>;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
}

const request = async function <T = any>(options: IRequestConfig): Promise<T> {
  try {
    const instanceName = options.instanceName || "default";
    const instance = createAxiosInstance()[instanceName];
    if (!(typeof instance === "function")) {
      throw new Error(`unknown ${instanceName} in request method`);
    }
    const response = await instance(options);
    if (instance.defaults.withFullResponse || options.withFullResponse) {
      return response;
    }
    return response.data;
  } catch (e) {
    throw e;
  }
};

helper.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  request[method] = function <T = any>(url, config) {
    return request<T>(
      helper.merge(config || {}, {
        method,
        url,
      })
    );
  };
});

helper.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  request[method] = function <T = any>(url, data, config) {
    return request<T>(
      helper.merge(config || {}, {
        method,
        url,
        data,
      })
    );
  };
});

request.CancelToken = axios.CancelToken;
request.isCancel = axios.isCancel;

export default request as unknown as IRequest;
