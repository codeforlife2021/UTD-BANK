import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const login = () => {
  return axios.post(`${API_URL}login`, {
    headers: authHeader(),
  });
};

const register = () => {
  return axios.post(`${API_URL}register`, {
    headers: authHeader(),
  });
};

const getCustomer = () => {
  return axios.get(`${API_URL}user`, {
    headers: authHeader(),
  });
};

const getCustomerById = (id) => {
  return axios.get(`${API_URL}user/${id}/auth`, {
    headers: authHeader(),
  });
};

const updateCustomer = (id, customer) => {
  return axios.put(`${API_URL}/user/${id}/auth`, customer, {
    headers: authHeader(),
  });
};

const updatePassword = () => {
  return axios.patch(`${API_URL}user/password`, {
    headers: authHeader(),
  });
};

export {
  login,
  register,
  getCustomer,
  updateCustomer,
  updatePassword,
  getCustomerById,
};
