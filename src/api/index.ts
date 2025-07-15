import axios from "axios";

const baseURL = "https://dummyjson.com/";

const baseInstance = axios.create({
  baseURL,
});

baseInstance.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config };

    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseInstance;
