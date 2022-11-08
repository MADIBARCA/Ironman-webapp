import axios from "axios";
//REFRESH TOKEN REQUEST IMPORT
const refreshToken = () => {
  console.log("refresh token");
};
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
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await refreshToken();
        localStorage.setItem("accessToken", response?.accessToken);
        localStorage.setItem("refreshToken", response?.refreshToken);
        return customAxios.request(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    if (error.response.status == 401 && error.config && error.config._isRetry) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.assign("/verification");
    }
    throw error;
  }
);

export default customAxios;
