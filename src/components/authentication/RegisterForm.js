import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <div class="authentication-form">
        <form>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="form-group mb-15">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="flaticon-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="SSN *"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="form-group mb-15">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="flaticon-user"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password *"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="form-group mb-15">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="flaticon-user"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password *"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <button class="btn1 orange-gradient full-width">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
