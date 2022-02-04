import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getCustomers = () => {
  return axios.get(`${API_URL}user/auth/all`, {
    headers: authHeader(),
  });
};

const getCustomer = (customerId) => {
  return axios.get(`${API_URL}user/${customerId}/auth`, {
    headers: authHeader(),
  });
};

const getUserById = (userId) => {
  return axios.get(`${API_URL}user/${userId}/auth`, {
    headers: authHeader(),
  });
};

const updateCustomer = (customerId, customer) => {
  return axios.put(`${API_URL}user/${customerId}/auth`, customer, {
    headers: authHeader(),
  });
};

const deleteCustomer = (customerId) => {
  return axios.delete(`${API_URL}user/${customerId}/auth`, {
    headers: authHeader(),
  });
};

const deleteUserById = (userId) => {
  return axios.delete(`${API_URL}user/${userId}/auth`, {
    headers: authHeader(),
  });
};

const updateUserById = (userId, values) => {
  return axios.put(`${API_URL}user/${userId}/auth`, values, {
    headers: authHeader(),
  });
};

const searchCustomers = (ssn, firstName, lastName, email) => {
  var endPoint = `${API_URL}user/auth/search?`;

  {
    ssn && (endPoint += `ssn=${ssn}&`);
  }
  {
    firstName && (endPoint += `firstName=${firstName}&`);
  }
  {
    lastName && (endPoint += `lastName=${lastName}&`);
  }
  {
    email && (endPoint += `email=${email}&`);
  }

  return axios.get(endPoint, {
    headers: authHeader(),
  });
};

export {
  getCustomers,
  getCustomer,
  searchCustomers,
  updateCustomer,
  deleteCustomer,
  deleteUserById,
  updateUserById,
  getUserById,
};
