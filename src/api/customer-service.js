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

export { login, register };
