import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const createAccount = (accountId) => {
  return axios.post(`${API_URL}account/${accountId}/create`, {
    headers: authHeader(),
  });
};

const createAccountByUserId = (userId, account) => {
  return axios.post(`${API_URL}account/${userId}/create`, account, {
    headers: authHeader(),
  });
};

const getAllAccounts = () => {
  return axios.get(`${API_URL}account/auth/all`, {
    headers: authHeader(),
  });
};

const getAccountByAccountNo = (accountNo) => {
  return axios.get(`${API_URL}account/${accountNo}/auth`, {
    headers: authHeader(),
  });
};

const getAccountsByCustomerId = (customerId) => {
  return axios.get(`${API_URL}account/user/${customerId}/auth`, {
    headers: authHeader(),
  });
};

const updateAccounts = (accountNo, account) => {
  return axios.put(`${API_URL}account/${accountNo}/auth`, account, {
    headers: authHeader(),
  });
};

const updateAccountByAcountNo = (accountNo, account) => {
  return axios.put(`${API_URL}account/${accountNo}/auth`, account, {
    headers: authHeader(),
  });
};

const deleteAccounts = (accountNo) => {
  return axios.delete(`${API_URL}account/${accountNo}/auth`, {
    headers: authHeader(),
  });
};

export {
  createAccount,
  getAllAccounts,
  getAccountByAccountNo,
  getAccountsByCustomerId,
  deleteAccounts,
  updateAccounts,
  updateAccountByAcountNo,
  createAccountByUserId,
};
