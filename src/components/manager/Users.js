import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  ButtonGroup,
  Spinner,
  Form,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getCustomers,
  searchCustomers,
} from "../../api/management-customer-service";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { FiSearch } from "react-icons/fi";
import * as Yup from "yup";
import MaskInput from "react-maskinput/lib";
const Users = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [downloadingUsers, setDownloadingUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    ssn: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    ssn: Yup.string().required("Please enter your SSN"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string().email().required("Please Enter your email"),
  });

  const onSubmit = (values, paramater) => {
    console.log(values);

    setLoading(true);

    searchCustomers(values)
      .then((resp) => {
        setLoading(false);
        toast("You are registered successfully. ");
        navigate("/");
      })
      .catch((err) => {
        console.log("Registration failed");
        setLoading(false);
        toast(err.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleDownload = () => {
    setDownloadingUsers(true);
    getCustomers().then((resp) => {
      console.log(resp.data);

      setDownloadingUsers(false);
    });
  };

  const handleEdit = (userId) => {
    navigate(`/manager/users/${userId}`);
  };

  useEffect(() => {
    getCustomers().then((resp) => {
      setUsers(resp.data);
      setLoadingUsers(false);
    });
  }, []);

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Group as={Col} md={4} lg={8} className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter first name"
              {...formik.getFieldProps("firstName")}
              isInvalid={!!formik.errors.firstName}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={4} lg={2} className="mb-5">
            <Form.Select
              {...formik.getFieldProps("currencyCode")}
              isInvalid={!!formik.errors.currencyCode}
            >
              <option value="">Currency Code</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="TRY">TRY</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formik.errors.currencyCode}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={4} lg={2} className="mb-3">
            <Button
              variant="secondary"
              type="button"
              variant="secondary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Form.Group>
        </Row>
      </Form>

      <Table striped bordered hover responsive className="admin-list mt-3">
        <thead>
          <tr>
            <th>SSN</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {loadingUsers ? (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Users are loading...
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr
                key={index}
                onClick={() => handleEdit(user.id)}
                className="cursor-hand"
              >
                <td>{user.ssn}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.roles.join(" ")}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
