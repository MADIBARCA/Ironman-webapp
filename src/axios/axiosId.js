import axios from "axios";
import { endpoints } from "../endpoints";
import customAxios from "./customAxios";

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_X_API_KEY;

export const axiosGetId = async (email) => {
  const config = {
    method: "get",
    url: baseURL + endpoints.getId(email),
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
  };
  try {
    const resp = await axios(config);
    console.log(resp);
    return { status: resp.status, data: resp.data };
  } catch (err) {
    return { status: err.response.status, data: "error" };
  }
};

export const axiosGetAsset = async (id) => {
  const config = {
    method: "get",
    url: endpoints.getAsset(id),
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
  };
  try {
    const resp = await customAxios(config);
    console.log(resp);
    return { status: resp.status, data: resp.data };
  } catch (err) {
    return { status: err.response.status, data: "error" };
  }
};
