import React from "react";

const ForgetPassword = () => {
  return (
    <div className="authentication-section">
      <div className="authentication-grid authentication-grid-lost">
        <div className="authentication-item authentication-img-bg"></div>
        <div className="authentication-item bg-white">
          <div className="authentication-user-panel">
            <div className="authentication-user-header">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="authentication-user-body">
              <p className="mt-40">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>
              <div className="authentication-form">
                <form>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="input-area mb-15">
                        <label className="input-label-icon">
                          <span>
                            <i className="flaticon-user"></i>
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input-full"
                          placeholder="User Name Or Email Address *"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <button className="btn1 orange-gradient full-width">
                        Reset Password
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
