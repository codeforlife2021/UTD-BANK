import React, { useEffect, useState } from "react";
import { Table, Spinner, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getTransfer, getTransfers } from "../../api/transfer-service";

const MyTransfers = () => {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState([]);
  const [transferDetail, setTransferDetail] = useState({});

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showDetails = (id) => {
    setShow(true);

    getTransfer(id).then((resp) => {
      setTransferDetail(resp.data);
    });
  };

  useEffect(() => {
    getTransfers().then((resp) => {
      setTransfers(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Link to="/create-transfer">Create a new transfer</Link>

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

              <td>
                <Button variant="primary" onClick={() => showDetails(item.id)}>
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>transfers Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h3>transfer No : {transferDetail.id}</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>From Account Id</td>
                  <td>{transferDetail.fromAccountId}</td>
                </tr>
                <tr>
                  <td>To Account Id</td>
                  <td>{transferDetail.toAccountId}</td>
                </tr>

                <tr>
                  <td>Transaction Amount</td>
                  <td>{transferDetail.transactionAmount}</td>
                </tr>
                <tr>
                  <td>Currency Code</td>
                  <td>{transferDetail.currencyCode}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{transferDetail.description}</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>{transferDetail.transactionDate}</td>
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
      </Table>
    </>
  );
};

export default MyTransfers;
