import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.API_URL as string;
  }

  private async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try{
        const response = await axios.request<T>({
          baseURL: this.baseURL,
          ...config,
        });
        return response;
    }catch(err){
      console.log('axios response err::',err);
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

export default new ApiService;
