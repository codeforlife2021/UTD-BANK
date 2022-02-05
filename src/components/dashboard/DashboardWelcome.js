import React from "react";
import { useStore } from "../../store";

const DashboardWelcome = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  return (
    <section className="video-section pt-100 pb-70">
      <div className="container">
        <div className="home-facility-content">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 order-lg-2">
              <div className="about-page-item pb-30">
                <div className="about-img ml-20 overflow-hidden border-radius-5 img-shadow">
                  <img src="assets/images/dashboard.jpg" alt="welcome" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 order-lg-1">
              <div className="about-page-item pb-30">
                <div className="home-service-start">
                  <h2>
                    Hi
                    <span style={{ color: "#233765" }}>
                      {user.firstName} {user.lastName}
                    </span>{" "}
                    <br />
                    Welcome to <span style={{ fontWeight: "700" }}>UTD</span>
                    <span style={{ color: "#233765", fontWeight: "200" }}>
                      BANK
                    </span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiumod tempor incididunt ut labore et dolore
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut um doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernised ququam quaerat
                    voluptatem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardWelcome;
