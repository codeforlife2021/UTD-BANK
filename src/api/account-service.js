import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const createAccount = (account) => {
  return axios.post(`${API_URL}account/create`, account, {
    headers: authHeader(),
  });
};

const getAccounts = () => {
  return axios.get(`${API_URL}account`, {
    headers: authHeader(),
  });
};

const getAccount = (accountNo) => {
  return axios.get(`${API_URL}account/${accountNo}/user`, {
    headers: authHeader(),
  });
};

const updateAccount = (accountId) => {
  return axios.put(`${API_URL}account/${accountId}/update`, {
    headers: authHeader(),
  });
};

export { createAccount, getAccounts, getAccount, updateAccount };
