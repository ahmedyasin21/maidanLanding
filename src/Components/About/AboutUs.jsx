import React, { Component } from 'react';

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
      <div className="row mt-4" id="Team">
        <div className="py-5 team4">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-7 text-center">
                <h3 className="mb-3">Experienced &amp; Professional Team</h3>
                <h6 className="subtitle"><span> You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time </span></h6>
              </div>
            </div>
            <div className="row">
              {/* column  */}
              <div className="col-lg-3 mb-4">
                {/* Row */}
                <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                      <h6 className="subtitle mb-3">Property Specialist</h6>
                      <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Row */}
              </div>
              {/* column  */}
              {/* column  */}
              <div className="col-lg-3 mb-4">
                {/* Row */}
                <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                      <h6 className="subtitle mb-3">Property Specialist</h6>
                      <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Row */}
              </div>
              {/* column  */}
              {/* column  */}
              <div className="col-lg-3 mb-4">
                {/* Row */}
                <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                      <h6 className="subtitle mb-3">Property Specialist</h6>
                      <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Row */}
              </div>
              {/* column  */}
              {/* column  */}
              <div className="col-lg-3 mb-4">
                {/* Row */}
                <div className="row">
                  <div className="col-md-12 text-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                      <h6 className="subtitle mb-3">Property Specialist</h6>
                      <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/facebook-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/linkedin-white.svg" alt="" className="icon" /></a></li>
                        <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><img src="../img/icon/instagram-white.svg" alt="" className="icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Row */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* hero */}
  <section id="download"> 
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6"><img className="download-mockup" src="../img/Download/meidan mockup .png" alt="" /></div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 download-content">
          <div className="row"><h1>Download the Meidan App</h1></div>
          <div className="row"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque rem </p></div>
          <div className="row">
            <div className="col-12">
              <a href><img className="download-btn" src="../img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 2.png" alt="" /></a>
              <a href><img className="download-btn" src="../img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt="" /></a></div>
            {/* <div class="col-6"><img class="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt=""></div> */}
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