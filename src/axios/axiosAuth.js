import axios from "axios";
import { endpoints } from "../endpoints";

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_X_API_KEY;

export const axiosSendEmail = (email) => {
  const data = {
    email,
  };

  const config = {
    method: "post",
    url: baseURL + endpoints.sendEmail,
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config)
    .then((resp) => {
      return { status: resp.status, data: resp.data };
    })
    .catch((err) => {
      return { status: err.response.status, data: "error" };
    });
};

export const axiosEmailVerify = (email, otp) => {
  const data = {
    email,
    authToken: otp,
  };

  const config = {
    method: "post",
    url: baseURL + endpoints.emailVerify,
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config)
    .then((resp) => {
      return { status: resp.status, data: resp.data };
    })
    .catch((err) => {
      return { status: err.response.status, data: "error" };
    });
};

export const axiosRegister = (email) => {
  const data = {
    email,
  };

  const config = {
    method: "post",
    url: baseURL + endpoints.register,
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config)
    .then((resp) => {
      return { status: resp.status, data: resp.data };
    })
    .catch((err) => {
      return { status: err.response.status, data: "error" };
    });
};
