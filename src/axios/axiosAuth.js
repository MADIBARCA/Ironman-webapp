import axios from "axios";
import { endpoints } from "../endpoints";

const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosVerifyEmail = async (email) => {
  const response = await axios.post(baseURL + endpoints.verification, email);
  console.log(response);
};
