import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { toast } from "react-toastify";
import { register } from "../../api/user-service";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    ssn: "",
    firstName: "",
    lastName: "",
    address: "",
    mobilePhoneNumber: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    ssn: Yup.string()
      .required("Please enter your SSN")
      .test("len", "Please enter a valid SSN", (val) => val.length === 11),
    lastName: Yup.string().required("Please enter your last name"),

    email: Yup.string().email().required("Please Enter your email"),
    mobilePhoneNumber: Yup.string()
      .required("Please enter your phone number")
      .test(
        "len",
        "Please enter a valid phone number",
        (val) => val.length === 14
      ),
    address: Yup.string().required("Please enter your address"),
    username: Yup.string().required("Please enter your username"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#._\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special (!@#.%_&) Case Character"
      ),
    confirmPassword: Yup.string()
      .required("Please enter your password again")
      .oneOf([Yup.ref("password")], "Password fields don`t match"),
  });

  const onSubmit = (values) => {
    console.log(values);

    setLoading(true);

    register(values)
      .then((resp) => {
        setLoading(false);
        toast("You are registered successfully. ");
        navigate("/");
      })
      .catch((err) => {
        console.log("Registration failed");
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
      <div className="authentication-form">
        <form noValidate onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <RiLockPasswordLine className="flaticon-user" />
                      </i>
                    </span>
                  </div>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("ssn")}
                    isInvalid={!!formik.errors.ssn}
                    placeholder="SSN *"
                    as={MaskInput}
                    maskChar="_"
                    mask="000-00-0000"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.ssn}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="flaticon-user"></i>
                    </span>
                  </div>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("firstName")}
                    isInvalid={!!formik.errors.firstName}
                    placeholder="First Name *"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="flaticon-user"></i>
                    </span>
                  </div>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("lastName")}
                    isInvalid={!!formik.errors.lastName}
                    placeholder="Last Name *"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lastName}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <FaRegAddressBook />
                      </i>
                    </span>
                  </div>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("address")}
                    isInvalid={!!formik.errors.address}
                    placeholder="Address *"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <RiPhoneLine className="flaticon-user" />
                      </i>
                    </span>
                  </div>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("mobilePhoneNumber")}
                    isInvalid={!!formik.errors.mobilePhoneNumber}
                    as={MaskInput}
                    maskChar="_"
                    mask="(000) 000-0000"
                    placeholder="Phone Number"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.mobilePhoneNumber}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="flaticon-user"></i>
                    </span>
                  </div>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("username")}
                    isInvalid={!!formik.errors.username}
                    placeholder="Username *"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.username}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <RiMailLine className="icon" />
                      </i>
                    </span>
                  </div>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("email")}
                    isInvalid={!!formik.errors.email}
                    placeholder="Email *"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <RiLockPasswordLine />
                      </i>
                    </span>
                  </div>
                  <Form.Control
                    type="password"
                    {...formik.getFieldProps("password")}
                    isInvalid={!!formik.errors.password}
                    placeholder="Password *"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <RiLockPasswordLine />
                      </i>
                    </span>
                  </div>
                  <Form.Control
                    type="password"
                    {...formik.getFieldProps("confirmPassword")}
                    isInvalid={!!formik.errors.confirmPassword}
                    placeholder="ConfirmPassword *"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <button
                className="btn1 orange-gradient full-width"
                type="submit"
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
