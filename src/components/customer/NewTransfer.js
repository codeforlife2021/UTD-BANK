import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
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
      <section className="contact-comment-section bg-off-white pt-100 pb-70">
        <div className="container">
          <div className="home-facility-content">
            <div className="row align-items-end">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="home-facility-image">
                  <div className="home-facility-item faq-block-image pb-30">
                    <img
                      style={{
                        height: "590px",
                        backgroundRepeat: "no-repeat",
                        backgroundPposition: "center center",
                        backgroundSize: "cover",
                      }}
                      src="assets/images/transfer.jpg"
                      alt="comment"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="home-facility-item pb-30">
                  <div className="blog-comment-leave-area contact-comment-leave-area">
                    <h3 className="sub-section-title">Create a new transfer</h3>
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
                                    <i className="flaticon-user"></i>
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
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-user"></i>
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
                                  {formik.errors.transactionAmount}
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
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-email"></i>
                                  </span>
                                </div>
                                <Form.Control
                                  type="text"
                                  as="textarea"
                                  rows={3}
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
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <button
                              className="btn1 orange-gradient btn-with-image"
                              type="submit"
                              disabled={loading}
                            >
                              {loading && (
                                <Spinner animation="border" size="sm" />
                              )}
                              Create New Transfer
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

export default NewTransfer;
