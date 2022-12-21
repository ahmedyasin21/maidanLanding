import React, { Component,useRef, useState } from 'react';
import  { Link, NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";

class Home extends Component {
    render() {
        return (
<div>
  {/*------------------------------ slider */}
  {/* <div className="swiper mySwiper mt-5">
    <div className="swiper-wrapper">
      <div className="swiper-slide"><img src="./img/carousel/Group 327.png" alt="" /></div>
      <div className="swiper-slide"><img src="./img/carousel/Frame 49.png" alt="" /></div>
    </div>
    <div className="swiper-pagination" />
  </div> */}

  <Swiper className='mt-5'
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}

    >
      <SwiperSlide><img src="./img/carousel/Group 327.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./img/carousel/Frame 49.png" alt="" /></SwiperSlide>
      
    </Swiper>
  {/*--------------------------About us  */}
  <section id="about-1">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-7 about-left">
          <h1>About Us</h1>
          <p>
            We are happy to welcome everyone to the Meidan sporting community, whether they are early risers,
            scramblers, part-timers, full-timers, newcomers, or seasonal sports persons. We understand that
            maintaining a work-life balance in an urban environment may be challenging, and our service makes it
            easier to discover places to play. Sport is crucial in fostering relationships, exchanging memories,
            and improving wellbeing.
          </p>          
          <p className="p2">Consider us the Pakistan’s largest open-door digital sports club where you may make reservations on
            demand from any location at no additional charge.
            Find your favorite playground and select time-slot availability. From concept to activity, move.
            With just a few taps and swipes, users of our application will be transported to sport venues where
            they can score goals or compete with friends for shuttlecocks.
            These factors define Meidan in its purest form.
          </p>
        </div>
        <div className="col-md-6 col-sm-6 col-5 justify-content-md-center text-center about-img-div">
          <img className="about-img" src="./img/about/Group 177.png" alt="" />
        </div>
      </div>
      {/* <div className="row justify-content-md-center text-center">
        <div className="col-12 ">
          <button className="fill  " data-bs-toggle="modal" data-bs-target="#exampleModal">Download the app now</button>
        </div>
      </div> */}
    </div>
  </section>
  {/* How it work */}
  <section id="how">
    <div className="container mt-5">
      <div className="row justify-content-md-center text-center">
        <div className="col">
          <h1>How it works</h1>
        </div>
      </div>
      {/* 1st find */}
      <div className="row mt-5">
        <div className="col-md-6 col-sm-6 col-6" id="howToImageContainer">
          <img className="how-img " src="./img/How/Group 178.png" alt="" />
        </div>
        <div className="col-md-6 col-sm-6 col-6 how-text">
          <h2>Find</h2>
          <p>1. What you want to play ?<br />
            2. Where you want to play ?<br />
            3. When You want to Play ? <br />
            Discover the Pakistan’s largest network of sporting facilities. You only need to enter your location
            and sport before pressing the search button. Thats all and You will get number of suitable results according to your desire.
          </p>
        </div>
        {/* 2st book */}
        <div className="row mt-5">
          <div className="col-md-6 col-sm-6 col-6 how-text">
            <h2>Book</h2>
            <p>Once you've found the ideal field, playground or sports club, you can schedule a booking
              quickly and pay more conveniently. Use the inquiry form to get in touch with the venue and
              make an online reservation. To make organizing sport easier, we collaborate with the top sports
              facilities in the Pakistan.
            </p>
          </div>
          <div className="col-md-6 col-sm-6 col-6" id="howToImageContainer">
            <img className="how-img " src="./img/How/Group 179.png" alt="" />
          </div>
        </div>
      </div>
      {/* 3st find */}
      <div className="row mt-5">
        <div className="col-md-6 col-sm-6 col-6" id="howToImageContainer">
          <img className="how-img " src="./img/How/Mask group.png" alt="" />
        </div>
        <div className="col-md-6 col-sm-6 col-6 how-text">
          <h2>Play</h2>
          <p> You're the hero; you easily discovered and reserved a gorgeous pitch or court, and it's time
            to start playing. The stage is prepared for your momentous game, in which hopes might be made or
            broken. Suffering is just momentary, while triumph is eternal.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 justify-content-center  text-center">
          <button className="fill  " data-bs-toggle="modal" data-bs-target="#exampleModal">Download the app now</button>
        </div>
      </div>
      {/* modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Comming Soon</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              Meidan application will be available on App Store &amp; Google Play Store Soon. 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div></section>
  {/* blog */}
  <section>
    <div className="container">
      <div className="row justify-content-md-center text-center">
        <div className="col blog-text">
          <h1>BLOGs</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <section className="cards">
            <article className="card card--1">
              <div className="card__info-hover">
                <svg className="card__like" viewBox="0 0 24 24">
                  <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                </svg>
                <div className="card__clock-info">
                  <svg className="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                  </svg><span className="card__time">5 min</span>
                </div>
              </div>
              <div className="card__img" />
              <a href="./Blog/blog5.html" className="card_link">
                <div className="card__img--hover" />
              </a>
              <div className="card__info">
              <Link to={"/blog/5"} mode="dark" className=""> 
                  <span className="card__category"> Sport</span>
                  <h3 className="card__title">Reasons Why Teamwork Is Important in Sports</h3>
                  <span className="card__by">by </span>
              </Link>
              <Link to={"/blog/5"} mode="dark" className="">
                  <a href="#" className="card__author" title="author">John Doe</a>
              </Link>

              </div>
            </article>   
          </section>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <section className="cards">
            <article className="card card--2">
              <div className="card__info-hover">
                <svg className="card__like" viewBox="0 0 24 24">
                  <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                </svg>
                <div className="card__clock-info">
                  <svg className="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                  </svg><span className="card__time">5 min</span>
                </div>
              </div>
              <div className="card__img" />
              <a href="./Blog/blog7.html" className="card_link">
                <div className="card__img--hover" />
              </a>
              <div className="card__info">
              <Link to={"/blog/7"} mode="dark" className=""> 
                  <span className="card__category"> Football</span>
                  <h3 className="card__title">5 strategies for getting ready for football season</h3>
                  <span className="card__by">by </span>
              </Link>
              <Link to={"/blog/7"} mode="dark" className="">
                  <a href="#" className="card__author" title="author">John Doe</a>
              </Link>

              </div>
            </article> 
          </section>
        </div>
        <div className="row mt-4">
          <div className="col-12 justify-content-center  text-center">
            <a href="./Blog/Blog-listing.html">
              <button className="fill " data-bs-toggle="modal" data-bs-target="#exampleModal">View more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* hero */}
  <section id="download">
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6"><img className="download-mockup" src="./img/Download/meidan mockup .png" alt="" /></div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 download-content">
          <div className="row"><h1>Download the Meidan App</h1></div>
          <div className="row"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque rem </p></div>
          <div className="row">
            <div className="col-12">
              <a href><img className="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 2.png" alt="" /></a>
              <a href><img className="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt="" /></a></div>
            {/* <div class="col-6"><img class="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt=""></div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ */}
  <section id="FAQ">
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="container">
        <div className="row justify-content-md-center ">
          <div className="col12">
            <h2 className="text-center">FAQ's</h2>
          </div>
          <div className="accordion-item col-12 col-md-10 col-lg-10">
            <h5 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is Meidan application for?
              </button>
            </h5>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">It is a service based platform to provide you access to playgrounds. It makes easy to find desired location near or far to play sport. Basic reason is to increase modest usage of sports for everyone. </div>
            </div>
          </div>
          <div className="accordion-item col-12 col-md-10 col-lg-10">
            <h5 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How can we become merchants on Meidan?
              </button>
            </h5>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Anyone can become a merchant on Meidan. He/She only have to fill KYC form given. Within 24 hours Meidan team will contact you to approve your KYC form.</div>
            </div>
          </div>
          <div className="accordion-item col-12 col-md-10 col-lg-10">
            <h5 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How long it takes for KYC approval?
              </button>
            </h5>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">It takes only 24 hour for approval. Meidan team will contact you to ask questions related to filled form. Questions will be asked related to merchant's ground, time or payment methods.</div>
            </div>
          </div>
          <div className="accordion-item col-12 col-md-10 col-lg-10">
            <h5 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Do we have coupons on Meidan?
              </button>
            </h5>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes, Meidan do have coupons. 
                Meidan itself offers you coupons and Ground Owners may also apply custom coupons for users. Coupons can be discounted offer to apply on spot. 
                <code>For instance 25%</code> will be off from total payment, if user book particular ground now.</div>
            </div>
          </div>
          <div className="accordion-item col-12 col-md-10 col-lg-10">
            <h5 className="accordion-header" id="flush-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                How can I get merchant app?
              </button>
            </h5>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Meidan team will provide Merchant app after approving KYC. Merchant app is not available on Play Store.</div>
            </div>
          </div>
          <div className="accordion-item col-12 col-md-10 col-lg-10">
            <h5 className="accordion-header" id="flush-headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                What is difference between Meidan user app and Meidan merchant app?
              </button>
            </h5>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <div className="container">
                  <div className="row">
                    <div className="col-6"><b>Merchant app</b></div>
                    <div className="col-6"><b>User app</b></div>
                    <div className="col-6"><li> Merchants are service providers.</li></div>
                    <div className="col-6"><li> Users are the choosers to play.</li></div>
                    <div className="col-6"><li> Transactions and bookings will be managed by ground owner himself.</li></div>
                    <div className="col-6"><li> User can see payment and time slots to choose according to availability.</li></div>
                    <div className="col-6"><li> It is managed by ground owners. It allows owner to upload time slots or pictures of ground.</li></div>
                    <div className="col-6"><li> User can search and choose desired grounds near or far.</li></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="accordion-item col-12">
      <h5 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h5>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
    <div class="accordion-item col-12">
      <h5 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h5>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
    <div class="accordion-item col-12">
      <h5 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h5>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div> */}
        </div>
      </div>
    </div>
  </section>
</div>



        );
    }
}

export default Home;