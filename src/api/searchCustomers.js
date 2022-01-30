import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const searchCustomers = (customerSsn) => {
  return axios.get(
    `${API_URL}user/auth/search?ssn=${customerSsn}`,

    {
      headers: authHeader(),
    }
  );
};

export { searchCustomers };
