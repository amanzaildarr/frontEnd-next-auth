import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { signOut } from 'next-auth/react';

class ApiService {

  private baseURL: string;
  private accessToken?: string;

  constructor(accessToken : string | undefined = undefined) {
    this.baseURL = process.env.API_URL || process.env.NEST_API_URL as string;
    this.accessToken = accessToken
  }

  private async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {

    try {
      const headers = {
        ...(this.accessToken && {
          Authorization: `Bearer ${this.accessToken}`,
        }),
      };
      return await axios.request<T>({ baseURL: this.baseURL,headers, ...config, });
    } catch (err : any) {
      console.log('Axios response err::', err.response);
      // sign out if token expires
      if(err.response.data.message == 'Unauthorized'){
        // signOut();
      }
      throw err;
    }
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'get', url, ...config });
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'post', url, data, ...config });
  }

  // Add more methods for other HTTP methods (e.g., PUT, DELETE) as needed
}

export default ApiService;
