import React, { useEffect, useState } from "react";
import { Table, Spinner, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAccount, getAccounts } from "../../api/account-service";
import { getTransfersbyAccount } from "../../api/transfer-service";

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
    getAccount(id).then((resp) => {
      setAccountDetail(resp.data);
    });
  };
  const transferDetail = (id) => {
    setShowTransfer(true);
    getTransfersbyAccount(id).then((resp) => {
      setTransfers(resp.data);
    });
  };

  useEffect(() => {
    getAccounts().then((resp) => {
      setAccounts(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Link to="/create-account">Create a new account</Link>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Account No</th>
            <th>Account Type</th>
            <th>Currency Code</th>
            <th>Account Status</th>
            <th>Balance</th>
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
          {accounts.map((item, index) => (
            <tr key={index} className="cursor-hand">
              <td>{index + 1}</td>
              <td>{item.accountNo}</td>
              <td>{item.accountType}</td>
              <td>{item.currencyCode}</td>
              <td>{item.accountStatusType}</td>
              <td>{item.balance}</td>
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>

        <Modal
          show={showDetail}
          onHide={() => setShowDetail(false)}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Accounts Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h3>Account No : {accountDetail.accountNo}</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>{accountDetail.description}</td>
                </tr>
                <tr>
                  <td>Balance</td>
                  <td>{accountDetail.balance}</td>
                </tr>
                <tr>
                  <td>Currency Code</td>
                  <td>{accountDetail.currencyCode}</td>
                </tr>
                <tr>
                  <td>Account Type</td>
                  <td>{accountDetail.accountType}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{accountDetail.accountStatusType}</td>
                </tr>
                <tr>
                  <td>Created</td>
                  <td>{accountDetail.createdDate}</td>
                </tr>
              </tbody>
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
            <Modal.Title>Transfer Details</Modal.Title>
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
      </Table>
    </>
  );
};

export default MyAccount;
