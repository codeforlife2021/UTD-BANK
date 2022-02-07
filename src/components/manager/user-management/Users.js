import React, { useState, useEffect } from "react";
import { Button, Spinner, Row, Form, Col, Container } from "react-bootstrap";
import { Grid, Header, Popup, Table } from "semantic-ui-react";
import MaskInput from "react-maskinput/lib";
import { Link, useNavigate } from "react-router-dom";
import {
  getCustomers,
  searchCustomers,
} from "../../../api/management-customer-service";
import SectionTitle from "../../home/SectionTitle";
import styled from "styled-components";
import { useStore } from "../../../store";

const Users = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;

  const [loadingUsers, setLoadingUsers] = useState(false);
  const [users, setUsers] = useState([]);

  const [searchSSN, setSearchSSN] = useState("");
  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit ici: ");
    setSubmit(true);
    console.log(
      searchSSN +
        "-" +
        searchFirstName +
        "-" +
        searchLastName +
        "-" +
        searchEmail
    );

    if (
      searchFirstName != "" ||
      searchLastName != "" ||
      searchEmail != "" ||
      searchSSN != ""
    ) {
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
    }
  };
  const handleOnChangeSSN = (e) => {
    setSearchSSN(e.target.value);
  };
  const handleOnChangeFirstName = (e) => {
    setSearchFirstName(e.target.value);
  };
  const handleOnChangeLastName = (e) => {
    setSearchLastName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setSearchEmail(e.target.value);
  };

  const handleEdit = (userId) => {
    navigate(`/usermanagement/${userId}`);
  };

  return (
    <Section>
      <div className="container">
        <SectionTitle
          title="Do you want to search a user ?"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit
              sed do eiusmod agnamqua ptatem consectetur."
        />
        <form className="search-group" onSubmit={handleOnSubmit}>
          <Container className="form-container">
            <Row>
              <Form.Group
                as={Col}
                sm={6}
                md={6}
                lg={2}
                className="mb-3"
                style={{ textAlign: "left" }}
              >
                <Form.Label className="mb-2">SSN</Form.Label>
                <Form.Control
                  className="p-2"
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
                lg={2}
                className="mb-3"
                style={{ textAlign: "left" }}
              >
                <Form.Label className="mb-2">First Name</Form.Label>
                <Form.Control
                  className="p-2"
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
                lg={2}
                className="mb-3"
                style={{ textAlign: "left" }}
              >
                <Form.Label className="mb-2">Last Name</Form.Label>
                <Form.Control
                  className="p-2"
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
                lg={2}
                className="mb-3"
                style={{ textAlign: "left" }}
              >
                <Form.Label className="mb-2">Email</Form.Label>
                <Form.Control
                  className="p-2"
                  style={{}}
                  className="search"
                  type="text"
                  placeholder="Search..."
                  value={searchEmail}
                  onChange={handleOnChangeEmail}
                />
              </Form.Group>
              <Col sm={6} md={6} lg={2}>
                <br />
                <Button variant="danger" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
        <div className="user-list-top ">
          <></>
        </div>
      </div>

      <Table color="orange">
        {submit && (
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>SSN</Table.HeaderCell>
              <Table.HeaderCell>Firstname</Table.HeaderCell>
              <Table.HeaderCell>LastName</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        )}

        <Table.Body>
          {loadingUsers ? (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Users are loading...
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index} className="cursor-hand">
                <td>{index + 1}</td>
                <td>{user.ssn}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobilePhoneNumber}</td>
                <td>{user.roles.join(" ")}</td>
                <td>
                  <Popup trigger={<Button>Process</Button>} flowing hoverable>
                    <Grid centered divided columns={3}>
                      <Grid.Column textAlign="center">
                        <Header as="h4">User</Header>
                        <p>
                          <br /> Delete,
                          <br /> Update
                        </p>

                        <Button onClick={() => handleEdit(user.id)}>
                          Continue
                        </Button>
                      </Grid.Column>
                      <Grid.Column textAlign="center">
                        <Header as="h4">Accounts</Header>
                        <p>New Account,Delete, Update</p>

                        <Button as={Link} to={`/useraccount/${user.id}`}>
                          Accounts
                        </Button>
                      </Grid.Column>
                      <Grid.Column textAlign="center">
                        <Header as="h4">Transfers</Header>
                        <p>
                          <br /> Transfers,
                          <br /> TransfersDetails
                        </p>

                        <Button as={Link} to={`/usertransfer/${user.id}`}>
                          Transfers
                        </Button>
                      </Grid.Column>
                    </Grid>
                  </Popup>
                </td>
              </tr>
            ))
          )}
        </Table.Body>
      </Table>
    </Section>
  );
};

export default Users;

const Section = styled.section`
  .container {
     display:flex;
    justify-content:center;
    flex-direction:column;
    .search-group {
  
      margin-left:10vw;
    

     .search{
    padding: "5px";
    border: 0.25px solid;
    border-radius:10px;
       
     }
  }


`;
