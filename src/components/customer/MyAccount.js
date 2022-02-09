import React, { useEffect, useState } from "react";
import { Spinner, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAccount, getAccounts } from "../../api/account-service";
import { getTransfersbyAccount } from "../../api/transfer-service";
import { Icon, Table } from "semantic-ui-react";
import moment from "moment";
import { toast } from "react-toastify";
import Pagination from "../common/Pagination";
const MyAccount = () => {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [accountDetail, setAccountDetail] = useState({});
  const [transfers, setTransfers] = useState([]);
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const handleClose = () => setShowDetail(false);
  const showDetails = (id) => {
    setShowDetail(true);
    getAccount(id)
      .then((resp) => {
        setAccountDetail(resp.data);
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setLoading(false);
        console.log(err.response.data.message);
      });
  };
  const transferDetail = (id) => {
    setShowTransfer(true);
    getTransfersbyAccount(id)
      .then((resp) => {
        setTransfers(resp.data);
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setLoading(false);
        console.log(err.response.data.message);
      });
  };
  useEffect(() => {
    getAccounts()
      .then((resp) => {
        setAccounts(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setLoading(false);
        console.log(err.response.data.message);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentUser = accounts.slice(indexOfFirst, indexOfLast);
  const totalPagesNum = Math.ceil(accounts.length / perPage);
  return (
    <>
      <Table color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Account No</Table.HeaderCell>
            <Table.HeaderCell>Account Type</Table.HeaderCell>
            <Table.HeaderCell>Currency Code</Table.HeaderCell>
            <Table.HeaderCell>Account Status</Table.HeaderCell>
            <Table.HeaderCell>Account Status</Table.HeaderCell>
            <Table.HeaderCell>Balance</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {loading && (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Loading...
              </td>
            </tr>
          )}
          {currentUser.map((item, index) => (
            <Table.Row key={index} className="cursor-hand">
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{item.accountNo}</Table.Cell>
              <Table.Cell>{item.accountType}</Table.Cell>
              <Table.Cell>{item.currencyCode}</Table.Cell>
          
              {item.accountStatusType === "ACTIVE" ? (
                <Table.Cell textAlign="center">
                  <Icon color="green" name="checkmark" />
                </Table.Cell>
              ) : (
                <Table.Cell textAlign="center">
                  <Icon color="red" name="close" />
                </Table.Cell>
              )}
              <Table.Cell>{item.balance}</Table.Cell>
              <Table.Cell>
                <Button
                  variant="primary"
                  onClick={() => showDetails(item.accountNo)}
                >
                  Account <br /> Details
                </Button>
                &nbsp;
                <Button
                  variant="primary"
                  onClick={() => transferDetail(item.accountNo)}
                >
                  Transfer <br />
                  Details
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div>
        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
      </div>
      <Modal
        show={showDetail}
        onHide={() => setShowDetail(false)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Account Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table color="orange">
            <Table.Header>
              <Table.Row>
                <Table.Cell colSpan={2}>
                  <h3>Account No : {accountDetail.accountNo}</h3>
                </Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Description</Table.Cell>
                <Table.Cell>{accountDetail.description}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Balance</Table.Cell>
                <Table.Cell>{accountDetail.balance}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Currency Code</Table.Cell>
                <Table.Cell>{accountDetail.currencyCode}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Account Type</Table.Cell>
                <Table.Cell>{accountDetail.accountType}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Status</Table.Cell>
                {accountDetail.accountStatusType === "ACTIVE" ? (
                  <Table.Cell>
                    <Icon color="green" name="checkmark" />
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Icon color="red" name="close" />
                  </Table.Cell>
                )}
              </Table.Row>
              <Table.Row>
                <Table.Cell>Created</Table.Cell>
                <Table.Cell>
                  {moment(accountDetail.createdDate).format("LLL")}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showTransfer}
        onHide={() => setShowTransfer(false)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Transfers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>From transfer</th>
                <th>To transfer</th>
                <th>Currency Code</th>
                <th>Transaction transfer</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={5}>
                    <Spinner animation="border" size="sm" /> Loading...
                  </td>
                </tr>
              )}
              {transfers.map((item, index) => (
                <tr key={index} className="cursor-hand">
                  <td>{index + 1}</td>
                  <td>{item.fromAccountId}</td>
                  <td>{item.toAccountId}</td>
                  <td>{item.transactionAmount}</td>
                  <td>{item.currencyCode}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowTransfer(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MyAccount;