import React, { useEffect, useState } from "react";
import TransfersByUserId from "../../components/manager/TransfersByUserId";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import { Card, Container, Row } from "react-bootstrap";
import { getUserById } from "../../api/management-customer-service";
import { useParams } from "react-router-dom";

const TransfersByUserIdPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById(userId).then((resp) => {
      console.log(resp.data);
      setUser(resp.data);
    });
  }, []);

  return (
    <>
      <TopBar />
      <PageHeader title="Transfers by User" image="money-transfer.jpg" />
      <Spacer size="50" />
      {user && (
        <Container>
          <Row>
            <Card>
              <Card.Body>
                <h5>SSN: {user.ssn}</h5>
                Full Name: {user.firstName} {user.lastName}
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
      <Spacer size="30" />
      <TransfersByUserId />
      <Spacer />
      <Footer />
    </>
  );
};

export default TransfersByUserIdPage;
