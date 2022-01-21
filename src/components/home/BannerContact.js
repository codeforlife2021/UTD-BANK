import React from "react";
import BannerContactItem from "./BannerContactItem";

const BannerContact = () => {
  return (
    <>
      <div class="header-suuport">
        <div class="container">
          <div class="header-support-group">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg order-md-2 order-lg-4">
                <div class="support-bank">
                  <div class="support-bank-info">
                    <ul class="review-star">
                      <li class="full-star">
                        <i class="bx bxs-star"></i>
                      </li>
                      <li class="full-star">
                        <i class="bx bxs-star"></i>
                      </li>
                      <li class="full-star">
                        <i class="bx bxs-star"></i>
                      </li>
                      <li class="full-star">
                        <i class="bx bxs-star"></i>
                      </li>
                      <li class="full-star">
                        <i class="bx bxs-star"></i>
                      </li>
                    </ul>
                    <p>
                      Migration dolor sit amet etur divelit conseetur diisci
                      velit sed tempora incidunt
                    </p>
                    <div class="support-logo">
                      <img src="assets/images/logo.png" alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg order-md-1 order-lg-1">
                <BannerContactItem
                  img="assets/images/envelop.png"
                  link="mailto:info@udtbank.com"
                  icerik="info@udtbank.com"
                  baslik="Support 24/7"
                />
              </div>
              <div class="col-sm-6 col-md-12 col-lg order-md-3 order-lg-2">
                <BannerContactItem
                  img="assets/images/phone.png"
                  link="tel:(+00)67834598"
                  icerik="(+00) 678 345 98"
                  baslik="Free Consultation"
                />
              </div>

              <div class="col-sm-6 col-md-12 col-lg order-md-4 order-lg-3">
                <BannerContactItem
                  img="assets/images/map.png"
                  link="456 Labisto Parkways"
                  icerik="CA, United States"
                  baslik="Free Consultation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContact;
