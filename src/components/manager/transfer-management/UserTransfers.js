import React, { useEffect, useState } from "react";
import { Spinner, Button, Modal } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTransfer, getTransfers } from "../../../api/transfer-service";
import { Icon, Table } from "semantic-ui-react";
import moment from "moment";
import SectionTitle from "../../home/SectionTitle";
import { getUserById } from "../../../api/management-customer-service";
import {
  getTransferByAccountId,
  getTransfersByCustomerId,
} from "../../../api/management-transfer";
import { toast } from "react-toastify";
import Pagination from "../../common/Pagination";

const UserTransfers = () => {
  const [loading, setLoading] = useState(true);
  const [loadingTransfer, setLoadingTransfer] = useState(true);
  const [transfers, setTransfers] = useState([]);
  const [transferDetail, setTransferDetail] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById(userId).then((resp) => {
      console.log(resp.data);
      setUser(resp.data);
    });
  }, []);

  const showDetails = (id) => {
    setShow(true);
    setLoadingTransfer(true);
    getTransferByAccountId(id)
      .then((resp) => {
        setTransferDetail(resp.data);
        setLoadingTransfer(false);
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setLoadingTransfer(false);
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    getTransfersByCustomerId(userId)
      .then((resp) => {
        setTransfers(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setLoading(false);
        console.log(err.response.data.message);
      });
  }, []);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTransfers = transfers.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentTransfers);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(transfers.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="container" style={{ textAlign: "justify" }}>
        <SectionTitle
          title="Do you want to see transfer of Customer?"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit
              sed do eiusmod agnamqua ptatem consectetur."
        />

        <Table color="orange">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>From transfer</Table.HeaderCell>
              <Table.HeaderCell>To transfer</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Transaction transfer</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {loading && (
              <tr>
                <td colSpan={5}>
                  <Spinner animation="border" size="sm" variant="danger" />{" "}
                  Loading...
                </td>
              </tr>
            )}
            {currentTransfers.map((item, index) => (
              <Table.Row key={index} className="cursor-hand">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{item.fromAccountId}</Table.Cell>
                <Table.Cell>{item.toAccountId}</Table.Cell>

                <Table.Cell>
                  {moment(transferDetail.transactionDate).format("LLL")}
                </Table.Cell>
                <Table.Cell>{item.transactionAmount}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>

                <Table.Cell>
                  <Button
                    variant="primary"
                    onClick={() => showDetails(item.id)}
                  >
                    Details
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <nav>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <a className="page-link" onClick={() => paginate(number)}>
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Transfer Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {loadingTransfer && (
                <tr>
                  <td colSpan={5}>
                    <Spinner animation="border" size="sm" variant="danger" />{" "}
                    Loading...
                  </td>
                </tr>
              )}
              <Table color="orange">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan={2}>
                      <h3>Transfer No : {transferDetail.id}</h3>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell>From Account Id</Table.HeaderCell>
                    <Table.Cell>{transferDetail.fromAccountId}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>To Account Id</Table.HeaderCell>
                    <Table.Cell>{transferDetail.toAccountId}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.HeaderCell>Transaction Amount</Table.HeaderCell>
                    <Table.Cell>{transferDetail.transactionAmount}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Currency Code</Table.HeaderCell>
                    <Table.Cell>{transferDetail.currencyCode}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.Cell>{transferDetail.description}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.Cell>
                      {moment(transferDetail.transactionDate).format("LLL")}
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
        </Table>
      </div>
    </>
  );
};

export default UserTransfers;
