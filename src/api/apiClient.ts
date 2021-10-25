import axios, { AxiosRequestConfig } from 'axios';
import { config } from 'config/index';

const instance = axios.create({
  baseURL: config.env.apiBaseUrl,
  // timeout: config.env.axiosDelay,
  timeout: 400,
});

export const getRequest = (url: string, config?: AxiosRequestConfig<any> | undefined): Promise<any> =>
  instance.get(url, config);

export const deleteRequest = (url: string, config?: AxiosRequestConfig<any> | undefined): Promise<any> =>
  instance.delete(url, config);

export const postRequest = (url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<any> =>
  instance.post(url, data, config);

export const putRequest = (url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<any> =>
  instance.put(url, data, config);

export const patchRequest = (url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<any> =>
  instance.patch(url, data, config);
