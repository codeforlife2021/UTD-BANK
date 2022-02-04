import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Spinner,
  Row,
  Form,
  Col,
  Container,
  Card,
} from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { Link, useNavigate } from "react-router-dom";
import {
  getCustomers,
  searchCustomers,
} from "../../api/management-customer-service";
import Spacer from "../../components/common/Spacer";

const Users = () => {
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [users, setUsers] = useState([]);

  const [searchSSN, setSearchSSN] = useState("");
  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit ici: ");

    console.log(
      searchSSN +
        "-" +
        searchFirstName +
        "-" +
        searchLastName +
        "-" +
        searchEmail
    );

    searchCustomers(searchSSN, searchFirstName, searchLastName, searchEmail)
      .then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
        setSearchSSN("");
        setSearchFirstName("");
        setSearchLastName("");
        setSearchEmail("");
      })
      .catch((err) => {
        console.log("search hatasi " + err.message);
      });
  };

  const handleOnChangeSSN = (e) => {
    console.log(e.target.value);
    setSearchSSN(e.target.value);
  };
  const handleOnChangeFirstName = (e) => {
    console.log(e.target.value);
    setSearchFirstName(e.target.value);
  };
  const handleOnChangeLastName = (e) => {
    console.log(e.target.value);
    setSearchLastName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    console.log(e.target.value);
    setSearchEmail(e.target.value);
  };

  const handleEdit = (userId) => {
    navigate(`/manager/user/${userId}`);
  };

  useEffect(() => {
    /* getCustomers().then((resp) => {
      setUsers(resp.data);
      console.log(resp.data);
      setLoadingUsers(false); 
    }); */
  }, []);

  return (
    <>
      <div className="user-list-top ">
        <Card
          style={{
            padding: "0.5px",
            margin: "0.25px solid",
            borderRadius: "10px",
            background: " #FFFF",
          }}
        >
          <form className="search-group" onSubmit={handleOnSubmit}>
            <Container>
              <Row>
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-2">SSN</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    placeholder="Search..."
                    as={MaskInput}
                    maskChar="_"
                    mask="000-00-0000"
                    showMask
                    alwaysShowMask
                    value={searchSSN}
                    onChange={handleOnChangeSSN}
                  />
                </Form.Group>{" "}
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-2">First Name</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    autoFocus="autofocus"
                    placeholder="Search..."
                    value={searchFirstName}
                    onChange={handleOnChangeFirstName}
                  />
                </Form.Group>{" "}
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-2">Last Name</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    placeholder="Search..."
                    value={searchLastName}
                    onChange={handleOnChangeLastName}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-2">Email</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    placeholder="Search..."
                    value={searchEmail}
                    onChange={handleOnChangeEmail}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Button variant="danger" type="submit">
                  Search
                </Button>
              </Row>
            </Container>
          </form>
        </Card>
      </div>

      <Table striped bordered hover responsive className="admin-list mt-3">
        <thead></thead>
        <tbody>
          {loadingUsers ? (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Users are loading...
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index} className="cursor-hand">
                <td onClick={() => handleEdit(user.id)}>{index + 1}</td>
                <td onClick={() => handleEdit(user.id)}>{user.ssn}</td>
                <td onClick={() => handleEdit(user.id)}>{user.firstName}</td>
                <td onClick={() => handleEdit(user.id)}>{user.lastName}</td>
                <td onClick={() => handleEdit(user.id)}>{user.email}</td>
                <td onClick={() => handleEdit(user.id)}>
                  {user.mobilePhoneNumber}
                </td>
                <td onClick={() => handleEdit(user.id)}>
                  {user.roles.join(" ")}
                </td>
                <td>
                  <Button as={Link} to={`/account/user/${user.id}/manager`}>
                    Accounts
                  </Button>
                  <Button as={Link} to={`/transfer/user/${user.id}/manager`}>
                    Transfers
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
