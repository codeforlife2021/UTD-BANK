import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  Form,
  Button,
  Spinner,
  Row,
  Col,
  ButtonGroup,
  Alert,
} from "react-bootstrap";
import {
  deleteUserById,
  getUserById,
  updateUserById,
} from "../../../api/management-customer-service";
import MaskInput from "react-maskinput/lib";
import alertify from "alertifyjs";
import { useNavigate, useParams } from "react-router-dom";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import {
  deleteAccounts,
  getAccountByAccountNo,
  updateAccountByAcountNo,
  updateAccounts,
} from "../../../api/management-account-service";
const EmpAccountEdit = () => {
  const { accountNo } = useParams();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    description: "",
    balance: "",
    currencyCode: "",
    accountType: "",
    accountStatusType: "",
  });

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    description: Yup.string().required("Enter a description"),
    currencyCode: Yup.string().required("Enter the currency code"),
    accountType: Yup.string().required("Enter the account type"),
    accountStatusType: Yup.string().required("Select the account status type"),
    balance: Yup.number().required("Select the account balance"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    const accountDto = {
      description: values.description,
      currencyCode: values.currencyCode,
      accountType: values.accountType,
      accountStatusType: values.accountStatusType,
      balance: values.balance,
    };
    setSaving(true);
    console.log(values);
    updateAccountByAcountNo(accountNo, values)
      .then((resp) => {
        setSaving(false);
        toast("Account was updated successfully");
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setSaving(false);
        console.log(err.response.data.message);
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleDelete = () => {
    alertify.confirm(
      "Delete",
      "Are you sure want to delete?",
      () => {
        setDeleting(true);
        deleteAccounts(accountNo)
          .then((resp) => {
            setDeleting(false);
            toast("Account was deleted uccessfully");
            navigate(-1);
          })
          .catch((err) => {
            setDeleting(false);
            toast("An error occured. Please try later");
            console.log(err.response.data.message);
          });
      },
      () => {
        console.log("canceled");
      }
    );
  };

  const loadAccount = (values) => {
    getAccountByAccountNo(accountNo, values).then((resp) => {
      console.log(resp.data);
      const {
        description,
        currencyCode,
        accountType,
        accountStatusType,
        balance,
        accountNo,
      } = resp.data;
      const accountDto = {
        description: description,
        currencyCode: currencyCode,
        accountType: accountType,
        accountStatusType: accountStatusType,
        balance: balance,
        accountNo: accountNo,
      };
      setInitialValues(accountDto);
    });
  };
  useEffect(() => {
    loadAccount();
  }, []);
  return (
    <>
      <section className="contact-comment-section bg-off-white pt-100 pb-70">
        <div className="container">
          <div className="home-facility-content">
            <div className="row align-items-end">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="home-facility-item pb-30">
                  <img
                    src="/assets/images/accountedit.jpg"
                    style={{
                      padding: "0",
                      height: "450px",
                      objectFit: "cover",
                    }}
                  ></img>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="home-facility-item pb-30">
                  <div className="blog-comment-leave-area contact-comment-leave-area">
                    <h3 className="sub-section-title">
                      Account Management Processing
                    </h3>

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
                                  className="p-2"
                                  style={{ border: "0.25px solid" }}
                                  type="text"
                                  name="accountNo"
                                  placeholder="Type accountNo"
                                  {...formik.getFieldProps("accountNo")}
                                  isInvalid={!!formik.errors.accountNo}
                                  disabled
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.accountNo}
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
                                  className="p-2"
                                  style={{ border: "0.25px solid" }}
                                  type="text"
                                  name="description"
                                  placeholder="Type a description"
                                  {...formik.getFieldProps("description")}
                                  isInvalid={!!formik.errors.description}
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
                                  className="p-2"
                                  style={{ border: "0.25px solid" }}
                                  type="text"
                                  name="balance"
                                  placeholder="Type a description"
                                  {...formik.getFieldProps("balance")}
                                  isInvalid={!!formik.errors.balance}
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
                                    <i className="flaticon-user"></i>
                                  </span>
                                </div>

                                <Form.Select
                                  className="p-2"
                                  style={{ border: "0.25px solid" }}
                                  type="text"
                                  placeholder="Type a currency code"
                                  {...formik.getFieldProps("currencyCode")}
                                  isInvalid={!!formik.errors.currencyCode}
                                >
                                  <option>Please select a currency code</option>
                                  <option>EUR</option>
                                  <option>USD</option>
                                  <option>TRY</option>
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
                                      <GiMoneyStack />
                                    </i>
                                  </span>
                                </div>
                                <Form.Select
                                  className="p-2"
                                  style={{ border: "0.25px solid" }}
                                  type="text"
                                  {...formik.getFieldProps("accountType")}
                                  isInvalid={!!formik.errors.accountType}
                                >
                                  {" "}
                                  <option>Please enter a account type</option>
                                  <option>SAVING</option>
                                  <option>INVESTING</option>
                                  <option>CREDIT_CARD</option>
                                  <option>CHECKING</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.accountType}
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
                                  className="p-2"
                                  style={{ border: "0.25px solid" }}
                                  type="text"
                                  {...formik.getFieldProps("accountStatusType")}
                                  isInvalid={!!formik.errors.accountStatusType}
                                >
                                  <option>
                                    Please enter account status type
                                  </option>
                                  <option>SUSPENDED</option>
                                  <option>CLOSED</option>
                                  <option>ACTIVE</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.accountStatusType}
                                </Form.Control.Feedback>
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-12 col-lg-4">
                            <ButtonGroup
                              aria-label="Basic example"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Button
                                variant="secondary"
                                type="button"
                                variant="secondary"
                                onClick={() => navigate(-1)}
                              >
                                Cancel
                              </Button>
                              &nbsp;&nbsp;
                              <>
                                <Button type="submit" disabled={saving}>
                                  {saving && (
                                    <Spinner
                                      animation="border"
                                      variant="light"
                                    />
                                  )}{" "}
                                  Save
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                  type="button"
                                  disabled={deleting}
                                  onClick={handleDelete}
                                >
                                  {deleting && (
                                    <Spinner
                                      animation="border"
                                      variant="light"
                                    />
                                  )}{" "}
                                  Delete
                                </Button>
                              </>
                            </ButtonGroup>
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
    </>
  );
};
export default EmpAccountEdit;
