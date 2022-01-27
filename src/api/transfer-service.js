import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const createTransfer = (transfer) => {
  return axios.post(`${API_URL}transfer/create`, transfer, {
    headers: authHeader(),
  });
};

const getTransfers = () => {
  return axios.get(`${API_URL}transfer`, {
    headers: authHeader(),
  });
};

const getTransfersbyAccount = (accountNo) => {
  return axios.get(`${API_URL}transfer/${accountNo}/accountNo`, {
    headers: authHeader(),
  });
};

const getTransfer = (transferId) => {
  return axios.get(`${API_URL}transfer/${transferId}`, {
    headers: authHeader(),
  });
};
export { createTransfer, getTransfers, getTransfer, getTransfersbyAccount };
