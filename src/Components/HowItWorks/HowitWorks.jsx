import React, { Component } from "react";
import $ from "jquery";

class HowitWorks extends Component {
  componentDidMount() {
    this.loadMore();
  }

  loadMore = () => {
    $(document).ready(function () {
      $(".content").slice(0, 6).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 6).slideDown();
        if ($(".content:hidden").length == 0) {
          $("#loadMore").text("").addClass("noContent");
        }
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          {/* how it work */}
          <section id="how">
          <div className="container mt-5 " style={{overflowX:"hidden"}}>
            <div className="row justify-content-md-center text-center">
              <div className="col">
                <h1>How it works</h1>
              </div>
            </div>
            {/* 1st find */}
            <div className="row mt-5">
              <div className="col-lg-6" id="howToImageContainer">
                <img
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="how-img "
                  style={{width:"100%"}}
                  src="./img/How/Group 178.png"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 how-text"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2>What you Find</h2>
                <p>
                  1. What you want to play ?<br />
                  2. Where you want to play ?<br />
                  3. When You want to Play ? <br />
                  Discover the Pakistan’s largest network of sporting
                  facilities. You only need to enter your location and sport
                  before pressing the search button. Thats all and You will get
                  number of suitable results according to your desire.
                </p>
              </div>
              {/* 2st book */}
              <div className="row mt-5">
                <div
                  className="col-lg-6 how-text order-2 order-lg-1"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h2>You can Book</h2>
                  <p>
                    Once you've found the ideal field, playground or sports
                    club, you can schedule a booking quickly and pay more
                    conveniently. Use the inquiry form to get in touch with the
                    venue and make an online reservation. To make organizing
                    sport easier, we collaborate with the top sports facilities
                    in the Pakistan.
                  </p>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2"
                  id="howToImageContainer"
                >
                  <img
                    className="how-img "
                    src="./img/How/Group 179.png"
                    alt=""
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    style={{width:"100%"}}
                  />
                </div>
              </div>
            </div>
            {/* 3st find */}
            <div className="row mt-5">
              <div className="col-lg-6" id="howToImageContainer">
                <img
                  className="how-img "
                  src="./img/How/Mask group.png"
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  style={{width:"100%"}}
                />
              </div>
              <div
                className="col-lg-6 how-text"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2>You can Play</h2>
                <p>
                  {" "}
                  You're the hero; you easily discovered and reserved a gorgeous
                  pitch or court, and it's time to start playing. The stage is
                  prepared for your momentous game, in which hopes might be made
                  or broken. Suffering is just momentary, while triumph is
                  eternal.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 justify-content-center  text-center">
                <a
                  className="fill  "
                  href="https://play.google.com/store/apps/details?id=com.meidanuserapp"
                  target="_blank"
                >
                 <button >Download app Now</button> 
                </a>
              </div>
            </div>
            {/* modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Comming Soon
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    Meidan application will be available on App Store &amp;
                    Google Play Store Soon.
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* benefits */}
          <div id="benefits" className="container mt-5">
            <div className="row">
              <h2 className="text-center mb-5">USER BENEFITS</h2>
            </div>
            <div className="row g-5">
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/7.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Median is regardless of time and place
                      </h6>
                      <p className="fw-light text-muted">
                        User is benefited from using App from anywhere to
                        everywhere. There is no time and place restriction. Even
                        App can work out of country. Only internet is required
                        to select desired ground to play.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/2.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Avoids long calls barrier{" "}
                      </h6>
                      <p className="fw-light text-muted">
                        If we look back, players had to search grounds then make
                        calls to find out charges and times. Mostly people
                        didn't get favorable response. Moreover long calls take
                        much time, energy and money. Meidan app has ended all
                        the barriers.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {" "}
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/3.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Avoids misinformation regarding time and money
                      </h6>
                      <p className="fw-light text-muted">
                        This is the most improved benefit of Meidan user App as
                        it replaces misinformation with accurate and authentic
                        data regarding ground specs, time slots and charges.
                        User will be informed accurately in any term.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/4.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Registered App by PTA
                      </h6>
                      <p className="fw-light text-muted">
                        As people want to be guided right and legal path, Meidan
                        has registered itself to PTA (Pakistan Telecommunication
                        Authority) after clearing all the terms and conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/5.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Economical </h6>
                      <p className="fw-light text-muted">
                        All types of grounds are available. Some of the grounds
                        charge less and some more. User may have variety to
                        choose ground according to pocket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/1.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        No Google search required
                      </h6>
                      <p className="fw-light text-muted">
                        User doesn’t need to search Google to find nearby or
                        desired grounds to go. Meidan App gives all the grounds
                        to play. Only user has to find, book and play.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/6.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Multiple ground options
                      </h6>
                      <p className="fw-light text-muted">
                        As human nature wants multiple options to choose from,
                        Meidan gives the right direction to choose from
                        unlimited options. Only user needs to switch on phone
                        location so App search bar could work properly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/8.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Builds regular profiles for professional players
                      </h6>
                      <p className="fw-light text-muted">
                        In Pakistan, young players are very fond of playing at
                        national level. It requires a lot of effort and
                        professional carrier profile. As Meidan app makes you
                        get rid to old keeping journals, user is benefited from
                        professional profiles to select at national level and
                        make country proud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/9.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Easy to use</h6>
                      <p className="fw-light text-muted">
                        Meidan App is easy as any other simple applications.
                        There is no technicality for the user. Even a person who
                        is not from technical background can use it effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/10.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        User may play with friends, family or both.
                      </h6>
                      <p className="fw-light text-muted">
                        Friends and Family time is the most exciting and
                        enjoying time for each of us. At Sundays or Saturdays
                        family and friends may have plans to go and have fun. To
                        meet this enjoying time, Meidan gives you all the
                        available grounds with all the facilities you may need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/11.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Chat with friends to reserve and contribute to play
                      </h6>
                      <p className="fw-light text-muted">
                        The amazing benefit is allowing the chat with friends to
                        decide ground according to pocket. So, friends and
                        family have some fun together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-12 col-md-6 col-lg-4 mb-2">
                {/* col */}
                <div className="row card-1">
                  <div
                    className="cards-1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="">
                      <img
                        src="../img/howItWork/12.svg"
                        alt=""
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">
                        Environmental information such as weather report
                      </h6>
                      <p className="fw-light text-muted">
                        As play time is fun time. It will be boring for players
                        if they find rainy or windy weather. Weather report is
                        given so user would satisfy with playing with no
                        uncertain whether occurrence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 btn" onClick={this.loadMore}>
                <a href="#" id="loadMore">
                  <button> Load more </button>
                </a>
              </div>
            </div>
          </div>
          <section>
            <div className="container">
              <div className="row text-center justify-content-center pt-5">
                <h2>MEIDAN USER APP FEATURES</h2>
                <img
                  src="../img/about/Group 325.png"
                  alt=""
                  style={{ width: "70%" }}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HowitWorks;
