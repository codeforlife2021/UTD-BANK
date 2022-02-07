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
const EmpUserEdit = () => {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    ssn: "",
    firstName: "",
    lastName: "",
    mobilePhoneNumber: "",
    email: "",
    address: "",
    password: null,
    modInfId: {},
    roles: ["Customer"],
    buildIn: false,
  });

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Please enter your SSN"),
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    mobilePhoneNumber: Yup.string()
      .required("Please enter your phone number")
      .test(
        "includes_",
        "Please enter a valid phone number",
        (value) => value && !value.includes("_")
      ),
    email: Yup.string().email().required("Please enter your email"),
    address: Yup.string().required("Please enter your address"),
    roles: Yup.array().required("Please select a role"),
  });

  const onSubmit = (values) => {
    setSaving(true);
    console.log(values);
    updateUserById(userId, values)
      .then((resp) => {
        setSaving(false);
        toast("User was updated successfully");
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
    //userId nin boş olmadığı veya numeric olduğu kontrol edilse iyi olur.

    alertify.confirm(
      "Delete",
      "Are you sure want to delete?",
      () => {
        setDeleting(true);
        deleteUserById(userId)
          .then((resp) => {
            setDeleting(false);
            toast("User was deleted uccessfully");
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

  useEffect(() => {
    //userId nin boş olmadığı veya numeric olduğu kontrol edilse iyi olur.

    getUserById(userId).then((resp) => {
      console.log(resp.data);
      setInitialValues(resp.data);
    });
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
                    src="/assets/images/usereditimgr.jpg"
                    style={{
                      padding: "0",
                      height: "720px",
                      objectFit: "cover",
                    }}
                  ></img>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="home-facility-item pb-30">
                  <div className="blog-comment-leave-area contact-comment-leave-area">
                    <h3 className="sub-section-title">
                      User Management Processing
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
                                  placeholder="SSN"
                                  value={formik.values.ssn}
                                  disabled
                                />
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
                                  placeholder="Enter first name"
                                  {...formik.getFieldProps("firstName")}
                                  isInvalid={!!formik.errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.firstName}
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
                                  placeholder="Enter last name"
                                  {...formik.getFieldProps("lastName")}
                                  isInvalid={!!formik.errors.lastName}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.lastName}
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
                                  placeholder="Enter address"
                                  {...formik.getFieldProps("address")}
                                  isInvalid={!!formik.errors.address}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.address}
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
                                  type="email"
                                  placeholder="Enter email"
                                  {...formik.getFieldProps("email")}
                                  isInvalid={!!formik.errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.email}
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
                                <Form.Control
                                  className="p-2"
                                  style={{ border: "0.25px solid" }}
                                  type="text"
                                  placeholder="Enter phone number"
                                  as={MaskInput}
                                  alwaysShowMask
                                  maskChar="_"
                                  mask="(000) 000-0000"
                                  {...formik.getFieldProps("mobilePhoneNumber")}
                                  isInvalid={!!formik.errors.mobilePhoneNumber}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.mobilePhoneNumber}
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
                                  placeholder="Enter password"
                                  {...formik.getFieldProps("password")}
                                  isInvalid={!!formik.errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {formik.errors.password}
                                </Form.Control.Feedback>
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <Form.Group
                                  as={Col}
                                  md={4}
                                  lg={2}
                                  className="mb-3"
                                >
                                  <Form.Label>Roles</Form.Label>

                                  <div className="mb-3">
                                    <Form.Check
                                      inline
                                      label="Customer"
                                      type="checkbox"
                                      name="roles"
                                      id="customer"
                                      value="Customer"
                                      checked={formik.values.roles.includes(
                                        "Customer"
                                      )}
                                      onChange={formik.handleChange}
                                    />
                                    <Form.Check
                                      inline
                                      label="Employee"
                                      type="checkbox"
                                      name="roles"
                                      id="employee"
                                      value="Employee"
                                      checked={formik.values.roles.includes(
                                        "Employee"
                                      )}
                                      onChange={formik.handleChange}
                                    />
                                    <Form.Check
                                      inline
                                      label="Manager"
                                      type="checkbox"
                                      name="roles"
                                      id="manager"
                                      value="Manager"
                                      checked={formik.values.roles.includes(
                                        "Manager"
                                      )}
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                  <Form.Control.Feedback type="invalid">
                                    {formik.errors.roles}
                                  </Form.Control.Feedback>
                                </Form.Group>
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
                              {!initialValues.buildIn && (
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
                              )}
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
export default EmpUserEdit;
