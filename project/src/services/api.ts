import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../components/const/const';
import { getToken } from './token';

enum HttpCode {
  Unauthorized = 401,
}

type UnauthorizedCallback = () => void;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

export const createAPI = (onLogging: UnauthorizedCallback): AxiosInstance => {
  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        return onLogging();
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if(token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
