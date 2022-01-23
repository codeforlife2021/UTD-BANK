import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getAcounts = () => {
  return axios.get(`${API_URL}account/auth/all`, {
    headers: authHeader(),
  });
};

const getAccount = (accountId) => {
  return axios.get(`${API_URL}account/${accountId}/auth`, {
    headers: authHeader(),
  });
};

const getAccountByCustomerId = (customerId) => {
  return axios.get(`${API_URL}account/${customerId}/auth`, {
    headers: authHeader(),
  });
};

const updateAccount = (accountId) => {
  return axios.put(`${API_URL}account/${accountId}/auth`, {
    headers: authHeader(),
  });
};

const deleteAccount = (accountId) => {
  return axios.delete(`${API_URL}account/${accountId}/auth`, {
    headers: authHeader(),
  });
};

export {
  getAcounts,
  getAccount,
  getAccountByCustomerId,
  deleteAccount,
  updateAccount,
};
