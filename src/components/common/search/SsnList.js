import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { searchCustomers } from "../../../api/searchCustomers";

const SsnList = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [downloadingUsers, setDownloadingUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleDownload = () => {
    setDownloadingUsers(true);
    searchCustomers().then((resp) => {
      console.log(resp.data);

      setDownloadingUsers(false);
    });
  };

  const handleEdit = (userId) => {
    navigate(`/manager/users/${userId}`);
  };

  useEffect(() => {
    searchCustomers().then((resp) => {
      setUsers(resp.data);
      setLoadingUsers(false);
    });
  }, []);

  return (
    <>
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

export default SsnList;
