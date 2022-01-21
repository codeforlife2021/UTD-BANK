import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div className="authentication-form">
        <form>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group mb-15">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="flaticon-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SSN *"
                    required=""
                  />
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
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <button className="btn1 orange-gradient full-width">Login</button>
            </div>
          </div>
          <div className="authentication-account-access mt-20">
            <div className="authentication-account-access-item">
              <div className="authentication-link">
                <a href="forget-password.html">Forget password?</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
