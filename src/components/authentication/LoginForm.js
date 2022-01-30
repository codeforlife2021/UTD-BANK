import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";
import { getUser, login } from "../../api/user-service";
import { toast } from "react-toastify";
import MaskInput from "react-maskinput/lib";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { useStore } from "./../../store/index";
import { loginFailed, loginSuccess } from "../../store/user/userActions";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { dispatchUser } = useStore();
  const navigate = useNavigate();
  const initialValues = {
    ssn: " 880-08-8686",
    password: "admin0",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string()
      .required("Please enter your SSN")
      .test("len", "Please enter a valid SSN", (val) => val.length === 11),
    password: Yup.string().required("Please enter your password"),
  });

  const onSubmit = (values) => {
    setLoading(true);

    login(values)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);

        getUser()
          .then((respUser) => {
            setLoading(false);
            console.log(respUser);
            dispatchUser(loginSuccess(respUser.data));
            navigate("/");
          })
          .catch((err) => {
            toast(err.response.data.message);
            dispatchUser(loginFailed());
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log("Login failed");
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
        <Form noValidate onSubmit={formik.handleSubmit}>
          <div className="row">
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
              <button
                className="btn1 orange-gradient full-width"
                type="submit"
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />}
                Login
              </button>
            </div>
          </div>
          <div className="authentication-account-access mt-20">
            <div className="authentication-account-access-item">
              <div className="authentication-link">
                <Link to={"/forgetPassword"}>Forget password?</Link>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
