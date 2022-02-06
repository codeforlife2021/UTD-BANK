import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { getTransfers } from "../../api/transfer-service";
import { Link } from "react-router-dom";

export default function Transfer() {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    getTransfers().then((resp) => {
      setTransfers(resp.data);
    });
  }, []);

  const getLastItems = () => {
    const lastItems = transfers.slice(-3);
    return lastItems;
  };
  return (
    <Section>
      <div className="transactions">
        {getLastItems()
          .reverse()
          .map((transaction) => {
            return (
              <div className="transaction">
                <div className="transaction__title">
                  <div className="transaction__title__image">
                    <FaUserCircle size="68" />
                  </div>
                  <div className="box-card-details">
                    <h3 className="box-card-title mb-20">
                      From &nbsp;
                      {transaction.fromAccountId} &nbsp; to &nbsp;{" "}
                      {transaction.toAccountId}
                    </h3>
                    <p className="box-card-para">
                      {moment(transaction.transactionDate).format("LLL")}
                    </p>
                  </div>
                </div>
                <div className="transaction__amount">
                  <span>{transaction.transactionAmount}</span>
                </div>
              </div>
            );
          })}
      </div>
      <Link to={"/my-transfers"} className="view">
        View all <HiArrowNarrowRight />
      </Link>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
    .box-card-title {
      color: #e63719;
    }
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            margin-top: 12px;
            height: 3.5rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #e63719;
        padding: 0.2rem 0.5rem;
        margin-top: 1rem;
        width: 4rem;
        color: #fff;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #233765;
          span {
            color: #fff;
          }
        }
        span {
          color: #fff;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #e63719;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
