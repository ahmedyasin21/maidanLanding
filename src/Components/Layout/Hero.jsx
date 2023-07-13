import React, { Component, useState } from "react";
import ModalShow from "./ModalShow";


function Hero () {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <div>
        <ModalShow
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        {/* hero */}
        <section id="download">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <img
                  className="download-mockup"
                  src="./img/Download/meidan mockup .png"
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div
                className="col-12 col-lg-6 download-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="row">
                  <h1>Download the Meidan App</h1>
                </div>
                <div className="row">
                  <p>
                    Meidan is the Pakistan's top serch and booking site for
                    recreational sport. Our goal is to increase facility usage
                    by making it modelest for everyone to participate in sports.{" "}
                  </p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.meidanuserapp"
                      target="_blank"
                    >
                      <img
                        className="download-btn"
                        src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 2.png"
                        alt=""
                      />
                    </a>
                    <img
                      className="download-btn"
                      src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png"
                      alt=""
                      onClick={() => setModalShow(true)}
                    />
                  </div>

                  {/* <div class="col-6"><img class="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt=""></div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  
}

export default Hero;
