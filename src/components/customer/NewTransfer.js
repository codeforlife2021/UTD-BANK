import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  RiLockPasswordLine,
  RiMailLine,
  RiPhoneLine,
  RiMoneyPoundCircleLine,
} from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { createAccount } from "../../api/account-service";
import { createTransfer } from "../../api/transfer-service";
const NewTransfer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    fromAccountId: "",
    toAccountId: "",
    transactionAmount: "",
    currencyCode: "",
    description: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Please enter your description"),
    fromAccountId: Yup.string().required("Please enter an AccountId"),
    toAccountId: Yup.string().required("Please enter an AccountId"),
    transactionAmount: Yup.string()
      .required("Please Enter your Transaction Amount")
      .matches(/^(?=.*[0-9])/, "Must Contain Nummer "),
    currencyCode: Yup.string()
      .required("Please enter your currency Code")
      .test(
        "includes_",
        "Please select a currency Code",
        (value) => value && !value.includes("Currency Code")
      ),
  });

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);

    createTransfer(values)
      .then((resp) => {
        setLoading(false);
        toast("A new Transfer has been created. ");
        navigate("/my-transfers");
      })
      .catch((err) => {
        console.log(" failed");
        setLoading(false);
        toast(err.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <form noValidate onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className=" offset-3 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i>
                      <MdDescription className="flaticon-user" />
                    </i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("fromAccountId")}
                  isInvalid={!!formik.errors.fromAccountId}
                  placeholder="From Account Id*"
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.fromAccountId}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>

          <div className=" offset-3 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i>
                      <MdDescription className="flaticon-user" />
                    </i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("toAccountId")}
                  isInvalid={!!formik.errors.toAccountId}
                  placeholder="to Account Id*"
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.toAccountId}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>

          <div className="offset-3 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i>
                      <GiMoneyStack />
                    </i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("transactionAmount")}
                  isInvalid={!!formik.errors.transactionAmount}
                  placeholder="Transaction Amount *"
                  as={MaskInput}
                  maskChar=""
                  mask="00000000000000"
                  {...formik.getFieldProps("transactionAmount")}
                  isInvalid={!!formik.errors.transactionAmount}
                  placeholder="transactionAmount *"
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.balance}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>

          <div className="offset-3 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i>
                      <RiMoneyPoundCircleLine />
                    </i>
                  </span>
                </div>
                <Form.Select
                  {...formik.getFieldProps("currencyCode")}
                  isInvalid={!!formik.errors.currencyCode}
                >
                  <option value="">Currency Code</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="TRY">TRY</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.currencyCode}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>

          <div className=" offset-3 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i>
                      <MdDescription className="flaticon-user" />
                    </i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("description")}
                  isInvalid={!!formik.errors.description}
                  placeholder="Description *"
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="offset-3 col-sm-6 col-md-6 col-lg-6">
            <button
              className="btn1 orange-gradient full-width"
              type="submit"
              disabled={loading}
            >
              {loading && <Spinner animation="border" size="sm" />}
              Create New Transfer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTransfer;
