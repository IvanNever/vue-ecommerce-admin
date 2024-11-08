import axios from 'axios';
import type { AxiosInstance } from 'axios';

export interface ApiCore {
  getInst(): AxiosInstance;
}

export class ApiCoreImpl implements ApiCore {
  protected inst = axios.create();

  constructor() {
    this.inst = axios.create();

    this.inst.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });

    this.inst.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err.response && err.response.status === 403) {
          localStorage.removeItem('token');
          window.location.href = `${window.location.origin}/login`;
        }
        return Promise.reject(err);
      }
    );
  }

  public getInst(): AxiosInstance {
    return this.inst;
  }
}
