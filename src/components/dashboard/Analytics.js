import React, { useState, useEffect } from "react";

import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import styled from "styled-components";
import Button from "../common/Button";
import { getAccounts } from "../../api/account-service";
import { getTransfers } from "../../api/transfer-service";
import SectionTitle from "../home/SectionTitle";

const Analytics = () => {
  const [accounts, setAccounts] = useState([]);
  const [transfers, setTransfers] = useState([]);
  useEffect(() => {
    getAccounts().then((resp) => {
      setAccounts(resp.data);
    });
  }, []);

  useEffect(() => {
    getTransfers().then((resp) => {
      setTransfers(resp.data);
    });
  }, []);

  const getTotalBalance = () => {
    let sum = 0;
    accounts.forEach((item) => {
      sum += item.balance;
    });

    return sum;
  };

  const getSpent = () => {
    let betweenDay,
      sum = 0;

    let date = new Date();
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let startOfMonth = (date - firstDayOfMonth) / 864e5;

    transfers.forEach((item) => {
      betweenDay =
        new Date(item.transactionDate).getDate() - new Date().getDate();
      if (startOfMonth >= betweenDay) {
        sum += item.transactionAmount;
      }
    });
    return sum;
  };

  return (
    <Section className="contact-address-section pt-100 pb-70">
      <div className="container">
        <SectionTitle
          title="Your Analytics"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit
              sed do eiusmod agnamqua ptatem consectetur."
        />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="box-card fluid-height">
              <div className="box-card-inner full-height">
                <div className="box-card-icon mb-25">
                  <IoStatsChart />
                </div>
                <div className="box-card-details">
                  <h3 className="box-card-title mb-20">Current Balance</h3>
                  <p className="box-card-para">{`${getTotalBalance()} $`}</p>

                  <Button title="My-Accounts" link="/my-account" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="box-card fluid-height">
              <div className="box-card-inner full-height">
                <div className="box-card-icon mb-25">
                  <GiReceiveMoney />
                </div>
                <div className="box-card-details">
                  <h3 className="box-card-title mb-20">Earnings This Month</h3>
                  <p className="box-card-para">{`${getSpent()} $`}</p>
                  <Button title="My-Transfers" link="/my-transfers" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0">
            <div className="box-card fluid-height">
              <div className="box-card-inner full-height">
                <div className="box-card-icon mb-25">
                  <GiPayMoney />
                </div>
                <div className="box-card-details">
                  <h3 className="box-card-title mb-20">Spent This Month</h3>
                  <p className="box-card-para">{`${getSpent()} $`}</p>
                  <Button title="My-Transfers" link="/my-transfers" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Analytics;

const Section = styled.section`
  .box-card {
    -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    .box-card-icon {
      color: #e63719;
      svg {
        font-size: 4rem;
      }
    }
  }
`;
