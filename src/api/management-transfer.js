import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getTransfers = () => {
  return axios.get(`${API_URL}transfer/auth/all`, {
    headers: authHeader(),
  });
};

const getTransfersByCustomerId = (customerId) => {
  return axios.get(`${API_URL}transfer/user/${customerId}/auth`, {
    headers: authHeader(),
  });
};

export { getTransfers, getTransfersByCustomerId };
