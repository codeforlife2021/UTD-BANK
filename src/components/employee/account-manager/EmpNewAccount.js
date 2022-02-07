import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  RiLockPasswordLine,
  RiMailLine,
  RiPhoneLine,
  RiMoneyPoundCircleLine,
} from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { createAccountByUserId } from "../../../api/management-account-service";

const EmpNewAccount = () => {
  const { userId } = useParams();
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

    createAccountByUserId(userId, values)
      .then((resp) => {
        setLoading(false);
        toast("A new Account has been created. ");
        navigate(`/emp-useraccount/${userId}`);
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
      <section className="contact-comment-section bg-off-white pt-100 pb-70">
        <div className="container">
          <div className="home-facility-content">
            <div className="row align-items-end">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="home-facility-image">
                  <div className="home-facility-item faq-block-image pb-30">
                    <img
                      src="/assets/images/contact-comment.png"
                      alt="comment"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="home-facility-item pb-30">
                  <div className="blog-comment-leave-area contact-comment-leave-area">
                    <h3 className="sub-section-title">Create a new account</h3>
                    <div className="blog-comment-input-area mt-40">
                      <form
                        id="contactForm"
                        noValidate
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
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
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
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
                                  isInvalid={!!formik.errors.ssn}
                                  placeholder="Balance *"
                                  as={MaskInput}
                                  maskChar=""
                                  mask="00000000000000"
                                  {...formik.getFieldProps("balance")}
                                  isInvalid={!!formik.errors.balance}
                                  placeholder="Balance *"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.balance}
                                </Form.Control.Feedback>
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
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
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
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
                                  <option value="CREDIT_CARD">
                                    CREDIT CARD
                                  </option>
                                  <option value="INVESTING">INVESTING</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.accountType}
                                </Form.Control.Feedback>
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <button
                              className="btn1 orange-gradient btn-with-image"
                              type="submit"
                              disabled={loading}
                            >
                              <i className="flaticon-login"></i>
                              <i className="flaticon-login"></i>
                              {loading && (
                                <Spinner animation="border" size="sm" />
                              )}
                              Create New Account
                            </button>
                            <div id="msgSubmit"></div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpNewAccount;
