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
const NewAccount = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    description: "",
    balance: "",
    currencyCode: "",
    accountType: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Please enter your description"),
    balance: Yup.string().required("Please enter your balance"),

    balance: Yup.string()
      .required("Please Enter your balance")
      .matches(/^(?=.*[0-9])/, "Must Contain Nummer "),
    currencyCode: Yup.string()
      .required("Please enter your currency Code")
      .test(
        "includes_",
        "Please select a currency Code",
        (value) => value && !value.includes("Currency Code")
      ),

    accountType: Yup.string()
      .required("Please enter your Account Type")
      .test(
        "includes_",
        "Please select a Account Type",
        (value) => value && !value.includes("Account Type")
      ),
  });

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);

    createAccount(values)
      .then((resp) => {
        setLoading(false);
        toast("A new Account has been created. ");
        navigate("/my-account");
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
                  {...formik.getFieldProps("balance")}
                  isInvalid={!!formik.errors.balance}
                  placeholder="Balance *"
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
          <div className="offset-3 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i>
                      <FaRegAddressBook />
                    </i>
                  </span>
                </div>
                <Form.Select
                  {...formik.getFieldProps("accountType")}
                  isInvalid={!!formik.errors.accountType}
                >
                  <option value="">Account Type</option>
                  <option value="SAVING">SAVING</option>
                  <option value="CREDIT_CARD">CREDIT CARD</option>
                  <option value="INVESTING">INVESTING</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.accountType}
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
              Create New Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewAccount;
