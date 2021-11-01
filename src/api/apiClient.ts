import axios, { AxiosRequestConfig } from 'axios';
import { config as envConfig } from 'config';

export const instance = axios.create({
  baseURL: envConfig.env.apiBaseUrl,
  timeout: envConfig.env.axiosTimeout,
  responseType: 'json',
});

envConfig.env.interceptors &&
  instance.interceptors.request.use(
    function (config) {
      console.log('REQUEST: ', config);

      return config;
    },
    function (error) {
      console.log('REQUEST ERROR: ', error);

      return Promise.reject(error);
    },
  );

envConfig.env.interceptors &&
  instance.interceptors.response.use(
    function (response) {
      console.log('RESPONSE: ', response);

      return response;
    },
    function (error) {
      console.log('RESPONSE ERROR: ', error);

      return Promise.reject(error);
    },
  );

export const getRequest = (url: string, config?: AxiosRequestConfig<any> | undefined): Promise<any> =>
  instance.get(url, config);

export const deleteRequest = (url: string, config?: AxiosRequestConfig<any> | undefined): Promise<any> =>
  instance.delete(url, config);

export const postRequest = (
  url: string,
  data: Record<string, unknown>,
  config?: AxiosRequestConfig<any> | undefined,
): Promise<any> => instance.post(url, data, config);

export const putRequest = (
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig<any> | undefined,
): Promise<any> => instance.put(url, data, config);

export const patchRequest = (
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig<any> | undefined,
): Promise<any> => instance.patch(url, data, config);
