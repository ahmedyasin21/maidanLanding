import React, { Component } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper stylesn
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";



class AboutUs extends Component {
    render() {
        return (
            <div>
                <div>
  {/* about us */}
  <section id="AboutUs">
    <div className="container">
      <div className="row text-center">
        <h2 className="heading">ABOUT US</h2>
        <h6><span>Maidan is the Pakistan’s top search and booking site for recreational sports.</span></h6>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-6 col-lg-6" style={{alignSelf: 'center'}}>
          <h3>Our Mission:</h3>
          <p>Our goal is to increase facility usage by making it modest for everyone to participate in sports. We are happy to welcome everyone to the Meidan sporting community, whether they are early risers, scramblers, part-timers, full-timers, newcomers, or seasonal sports persons.
            <br /> We understand that maintaining a work-life balance in an urban environment may be challenging, and our service makes it easier to discover places to play. Sport is crucial in fostering relationships, exchanging memories, and improving wellbeing. These factors define Maidan in its purest form. 
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-6" style={{alignSelf: 'center', textAlign: 'center'}}>
          <img src="../img/about/Group 177.png" alt="" style={{width: '60%'}} />
        </div>
      </div>
    </div>
  </section>
  <section className="team-section">
    <div className="container pt-4 pb-4">
      <div className="row text-center wwr">
        <h2 className="heading">WHO WE ARE</h2>
        <h6><span>Consider us the Pakistan’s largest open-door digital sports club where you may make reservations on demand from any location at no additional charge. </span></h6>
      </div>
      <div className="row pointer">
        {/* ---------------------------1 */}
        <div className="col-12 col-md-4 col-lg-4 g-0 " onclick="location.href='#OurService'" id="ourservice">
          {/* 1 */}
          <div className="img-t">
            <img src="../img/about/Service.png" alt="" />
          </div>
          {/* 2 */}
          <div className="content-t">
            <h3>Our Service.</h3>
            <p>Starting with a vast array of free online tools, Maidan is raising the standard in terms of organizing sports and school communities.
            </p>
          </div>
        </div>
        {/* ----------------------------2 */}
        <div className="col-12 col-md-4 col-lg-4 g-0 " onclick="location.href='#OurCompany'" id="ourcompany">
          {/* 2 */}
          <div className="content-t">
            <h3>Our Comapany.</h3>
            <p>Starting with a vast array of free online tools, Maidan is raising the standard in terms of organizing sports and school communities.
            </p>
          </div>
          {/* 1 */}
          <div className="img-t ">
            <img src="../img/about/Company.png" alt="" />
          </div>
        </div>
        {/* ----------------------------3 */}
        <div className="col-12 col-md-4 col-lg-4 g-0 " onclick="location.href='#Team'" id="team">
          {/* 1 */}
          <div className="img-t">
            <img src="../img/about/Team.png" alt="" />
          </div>
          {/* 2 */}
          <div className="content-t">
            <h3>Our Team.</h3>
            <p>Starting with a vast array of free online tools, Maidan is raising the standard in terms of organizing sports and school communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* servive */}
  <section>
    <div className="container">
      <div className="row py-5" id="OurService">
        <h3 className=" py-4">Our Service.</h3>
        <p>Consider us the Pakistan’s largest open-door digital sports club where you may make reservations on demand from any location at no additional charge. Find your favorite playground and select time-slot availability. From concept to activity, move. With just a few taps and swipes, users of our software will be transported to sport venues where they can score goals or compete with friends for shuttlecocks.
        </p>
      </div>
      {/* Out Company */}
      <div className="row " id="OurCompany">
        <h3 className=" py-4">Our Company.</h3>
        <p>s Consider us the Pakistan’s largest open-door digital sports club where you may make reservations on demand from any location at no additional charge. Find your favorite playground and select time-slot availability. From concept to activity, move. With just a few taps and swipes, users of our software will be transported to sport venues where they can score goals or compete with friends for shuttlecocks.
        </p>
      </div>
      {/* team */}
      {/* <div className="row mt-4" id="Team">
        <div className="py-5 team4">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-7 text-center">
                <h3 className="mb-3">Experienced &amp; Professional Team</h3>
                <h6 className="subtitle"><span> You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time </span></h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 mb-4">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="../img/about/usama.png" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">Usama Ashraf</h5>
                      <spam className="mb-3"> Ui Ux Developer</spam>
                      <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="Icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                 <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="../img/about/1670854408662.jpeg" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                      <h6 className="subtitle mb-3">Property Specialist</h6>
                      <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="Icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div> 
              </div>
            
              <div className="col-lg-4 mb-4">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="../img/about/ahmed 1.png" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2 ">
                      <h5 className="mt-4 font-weight-medium mb-0">Ahmed Yaseen</h5>
                      <spam className="mb-3">Full stack Developer &amp; Director</spam>
                      <p></p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="Icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="../img/about/hamza.jpeg" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">Hamza Yaseen</h5>
                      <spam className="mb-3" > Director</spam>
                      <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="Icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="Icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </section>

  {/*  */}
  {/* <div className="container">
    <div className="row">
      <Swiper className='mt-5'
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}

        >
          <SwiperSlide>
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="info-box mb-5">
                <div className="thumb"><img src="../img/about/hamza.jpeg" alt="" /></div>
                <h4 className="name">Hanza Yaseen</h4>
                <span className="designation">Director</span>
              </div>
              <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
              <div className="info-box">
                <div className="thumb"><img src="../img/about/ahmed 1.png" alt="" /></div>
                <h4 className="name">Ahmed Yaseen</h4>
                <span className="designation">Full stack Developer &amp; Director</span>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
              <div className="info-box">
                <div className="thumb"><img src="../img/about/usama.png" alt="" /></div>
                <h4 className="name">Usama Ashraf</h4>
                <span className="designation">Ui UX Developr</span>
              </div>
            </div>
          </div>
          </SwiperSlide>

        </Swiper> 
    </div>
  </div> */}
<section id='ceo' className='mt-5'>
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-4 ceo-img"><img src="../img/about/hamza.jpeg" alt="" /></div>
      <div className="col-md-8 ceo-text"> 
        <div className='content-ceo'>
          <h2 className='py-1'>Welcome message From <br /> CEO to New employes</h2>
          <h5>Welcome message:</h5>
          <p>1ST PRIZE WINNER – INTERNATIONAL CONFERENCE ON OPEN SOURCE SYSTEMS AND TECHNOLOGIES IN UET. I'm a Blockchain Expert and a Javascript developer having experience in Swing framework, Java core, Nodejs, Javascript, Solidity Smart Contracts, Ethereum, bitcoin, tron, ripple, stellar, cryptonote, Hyperledger, Ethereum or other blockchain forks, Centralized, Decentralized or Hybrid Crypto Exchanges and Private Blockchain Development.</p>
          <h6>Hamza Yaseen</h6>
          <p>Director</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

            </div>
        );
    }
}

export default AboutUs;