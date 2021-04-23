import axios from "axios";
import localStorageService from "../service/localStorage";

axios.defaults.baseURL = "http://localhost:8001";

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorageService.getToken()}`;
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      localStorageService.clearToken();
      window.location.assign("/");
      return;
    }
    return Promise.reject(err);
  }
);
export default axios;
