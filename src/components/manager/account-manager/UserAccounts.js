import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Icon, Table } from "semantic-ui-react";
import { getAccount, getAccounts } from "../../../api/account-service";

import moment from "moment";
import {
  getAccountByAccountNo,
  getAccountsByCustomerId,
} from "../../../api/management-account-service";
import {
  getTransferByAccountId,
  getTransfersByAccountNo,
} from "../../../api/management-transfer";
import CustomButton from "../../common/CustomButton";
import SectionTitle from "../../home/SectionTitle";
import Spacer from "../../common/Spacer";
const UserAccounts = () => {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [accountDetail, setAccountDetail] = useState({});
  const [transfers, setTransfers] = useState([]);
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const { userId } = useParams();

  const handleClose = () => setShowDetail(false);

  const showDetails = (id) => {
    setShowDetail(true);
    getAccountByAccountNo(id).then((resp) => {
      setAccountDetail(resp.data);
    });
  };
  const transferDetail = (id) => {
    setShowTransfer(true);
    getTransfersByAccountNo(id).then((resp) => {
      setTransfers(resp.data);
    });
  };

  useEffect(() => {
    console.log("userid", JSON.stringify(userId));
    getAccountsByCustomerId(userId).then((resp) => {
      setAccounts(resp.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="container" style={{ textAlign: "justify" }}>
        <SectionTitle
          title="Do you want to create a new account?"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit
              sed do eiusmod agnamqua ptatem consectetur."
        />
        <div
          className="create-transfers"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "250px",
            position: "relative",
          }}
        >
          <CustomButton
            title="Create a new account"
            link={`/create-account/${userId}`}
          />
        </div>

        <Spacer size={60} />
        <Table color="orange">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Account No</Table.HeaderCell>
              <Table.HeaderCell>Account Type</Table.HeaderCell>
              <Table.HeaderCell>Currency Code</Table.HeaderCell>
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
            {accounts.map((item, index) => (
              <Table.Row key={index} className="cursor-hand">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{item.accountNo}</Table.Cell>
                <Table.Cell>{item.accountType}</Table.Cell>
                <Table.Cell>{item.currencyCode}</Table.Cell>
                {item.accountStatusType === "ACTIVE" ? (
                  <Table.Cell>
                    <Icon color="green" name="checkmark" />
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Icon color="red" name="close" />
                  </Table.Cell>
                )}

                <Table.Cell>{item.balance}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => showDetails(item.accountNo)}>
                    Account <br /> Details
                  </Button>
                  &nbsp;
                  <Button onClick={() => transferDetail(item.accountNo)}>
                    Transfer <br />
                    Details
                  </Button>
                  &nbsp;
                  <Button as={Link} to={`/accountedit/${item.accountNo}`}>
                    Account <br />
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

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
            <Table color="orange">
              <thead>
                <tr>
                  <th>#</th>
                  <th>From transfer</th>
                  <th>To transfer</th>

                  <th>Transaction Amount</th>

                  <th>Date</th>
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
                    <td>
                      {item.transactionAmount} {item.currencyCode}
                    </td>

                    <td>
                      {moment(transferDetail.transactionDate).format("LLL")}
                    </td>
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
      </div>
    </>
  );
};

export default UserAccounts;
