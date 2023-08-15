import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.API_URL || "http://localhost:5001";
  }

  private async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    console.log("url:::",this.baseURL,config)
    try{
        const response = await axios.request<T>({
          baseURL: this.baseURL,
          ...config,
        });
        return response;
    }catch(err){
      console.log('err::ß',err);
        throw err;
    }
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'get', url, ...config });
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    console.log('sedfkhbdjnf');
    return await this.request<T>({ method: 'post', url, data, ...config });
  }

  // Add more methods for other HTTP methods (e.g., PUT, DELETE) as needed
}

export default new ApiService;
