import React from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotAuthorizedPage = () => {
  const navigate = useNavigate();
  return <Alert variant="danger">You are not authorized to this page.</Alert>;
};

export default NotAuthorizedPage;
