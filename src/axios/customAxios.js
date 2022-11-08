import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const customAxios = axios.create({
  baseURL,
});

customAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  if (config?.data) {
    config.data = config.data;
  }
  return config;
});

customAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response.status == 401 && error.config) {
      try {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.assign("/verification");
      } catch (err) {
        console.log(err);
      }
    }
    throw error;
  }
);

export default customAxios;
