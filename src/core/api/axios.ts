import axios from 'axios';
import { store } from '../redux/store';

export const BASE_URL = 'http://localhost:2000';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config: any) => {
  if (config.url !== '/account/auth') {
    const state = store.getState();
    const accessToken = state?.auth?.accessToken;
    if (accessToken) {
      config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
  }
  return config;
});

export default api;
