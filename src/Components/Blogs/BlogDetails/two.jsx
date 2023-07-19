import React, { Component } from "react";
import { Link } from "react-router-dom";

class two extends Component {
  render() {
    return (
      <div>
        <div>
          {/* BLOG */}
          <section className="blog-detail-pg ">
            <div className="container ">
              <div className="row">
                <div className="col-12 ">
                  <h1 className="text-center"></h1>
                  <div className="text-center py-3 mb-4">
                    <img
                      className="blog-img "
                      src="../img/blog/blog2b.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className="text-center py-4">
                    P­laces where we've excelled{" "}
                  </h3>
                  <h5>Increasing social power­</h5>
                  <p>
                    Maidan's influence has been noticed across the sector,
                    working with leisure providers to replace empty space and
                    allowing authorities to engage more of their local
                    communities. This has increased social impact via
                    accessibility. Serving and energizing many schools, sports
                    teams, and community institutions around Pakistan. It has
                    been an honor to witness the positive social impact we have
                    had by simply making sport more accessible to those from
                    more underprivileged situations. This has led to a 24%
                    decrease in IMD (Indices of Multiple Deprivation) scores and
                    a more than 50% rise in facility usage.
                  </p>
                  <h5>ncreasing communal usage of places and facilities</h5>
                  <p>
                    The need for sports facility managers to interact with local
                    residents and guarantee that people have the finest
                    opportunity to be active has never been greater. Since the
                    pandemic, when national health has been a top priority and
                    people have valued their well-being, this has never been
                    more crucial. Since 2019, the demand for sports has doubled.
                    At Maidan&nbsp;more individuals have attempted to connect
                    with nearby sporting venues around the nation. Better web
                    technology has benefited venues by keeping the lights on
                    while also placing their locations at the center of the
                    neighborhood
                  </p>
                  <h5>Enabling our team to convey quality work:</h5>
                  <p>
                    We take great pride in our varied and committed team. We've
                    assembled a brilliant group of people from various
                    backgrounds who work hard to provide excellent goods and
                    first-rate service. We firmly think that by fostering a
                    friendly and inclusive workplace, our workers will not only
                    develop and prosper but also desire to provide the same
                    level of care and consideration to every step of the
                    customer experience. Working at Maidan means the freedom to
                    make own decisions from when to arrive at work to how to
                    advance their professional careers. They are all paid at
                    least a livable wage rather than a minimum wage.{" "}
                  </p>
                  <h5>Leading principles, long-term effects</h5>
                  <p>
                    The process has forced us to evaluate how our services and
                    personnel can contribute more to have a major social effect.
                    We're happy of what we've accomplished thus far, how we're
                    altering how people access sports and activities, and how
                    we've assisted in creating, developing, and supporting a
                    dedicated team of individuals that passionately believe in
                    and work toward our objective.
                    <br />
                    We were established with the mission of making it simpler
                    for everyone to participate in sports and be active. The
                    social effect of Maidan will only increase as the sector
                    continues to adopt digital solutions, which is at the core
                    of all we do.
                  </p>
                  <h5 />
                  <p />
                  <p>
                    Book a playground in Lahore for indoor and outdoor games on
                    Meidan Application. Application only wants you to choose a
                    playground for an indoor and outdoor gaming facility
                    suitable for various games such as basketball, volleyball,
                    and badminton, cricket, tennis and football etc.
                  </p>
                  <p>
                    We have sports ground listings for spacious areas with
                    proper equipment and amenities. The booking will be for your
                    specified duration. User only has to wait for the request
                    confirmation of availability and the necessary procedures to
                    secure the reservation. Players can enjoy a thrilling
                    session of indoor and outdoor games.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <h5 className="text-center py-4">More Blogs </h5>
                  </div>

                  {/* 1 */}
                  <Link to={"/blog/1"}>
                    <div className="row py-3 m-blog">
                      <div className="col-4">
                        <img src="../img/blog/Blog1S.png" alt="" />
                      </div>
                      <div className="col-8">
                        <h6>What is Padel Tennis?</h6>
                        <p className="m-0" style={{ fontSize: "x-small" }}>
                          One of the grassroots sports with the quickest growth
                          in Pakistan is padel tennis. In the Pakistan, the
                          sport has kept gaining popularity.
                        </p>
                        <p className="text-muted ">
                          <span>Cricket</span> 20 Dec 2022
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* 2 */}
                  {/* <Link to={"/blog/2"}>
            <div className="row py-3 m-blog">
              <div className="col-4">
                <img src="../img/blog/blog2S.png" alt="" />
              </div>
              <div className="col-8">
                <h6>P­laces where we've excelled</h6>
                <p className="m-0" style={{fontSize: 'x-small'}}> Maidan's influence has been noticed across the sector, working with leisure providers to replace empty
                </p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
              </div>
            </div>
            </Link> */}
                  {/* 3 */}
                  <Link to={"/blog/3"}>
                    <div className="row py-3 m-blog">
                      <div className="col-4">
                        <img src="../img/blog/Blog3S.png" alt="" />
                      </div>
                      <div className="col-8">
                        <h6>What are the different tennis shots?</h6>
                        <p className="m-0" style={{ fontSize: "x-small" }}>
                          Everyone was happy to see a sport return after a
                          prolonged absence, and it appears tennis has emerged
                        </p>
                        <p className="text-muted ">
                          <span>Cricket</span> 20 Dec 2022
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* 4 */}
                  <Link to={"/blog/4"}>
                    <div className="row py-3 m-blog">
                      <div className="col-4">
                        <img src="../img/blog/Blog4S.png" alt="" />
                      </div>
                      <div className="col-8">
                        <h6>What is Padel Tennis?</h6>
                        <p className="m-0" style={{ fontSize: "x-small" }}>
                          One of the grassroots sports with the quickest growth
                          in Pakistan is padel tennis. In the Pakistan, the
                          sport has kept gaining popularity.
                        </p>
                        <p className="text-muted ">
                          <span>Cricket</span> 20 Dec 2022
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* 5 */}
                  <Link to={"/blog/5"}>
                    <div className="row py-3 m-blog">
                      <div className="col-4">
                        <img src="../img/blog/Blog5S.png" alt="" />
                      </div>
                      <div className="col-8">
                        <h6>Reasons Why Teamwork Is Important in Football</h6>
                        <p className="m-0" style={{ fontSize: "x-small" }}>
                          Football is one of the most popular sports in the
                          world, among the many others that people enjoy.
                        </p>
                        <p className="text-muted ">
                          <span>Cricket</span> 20 Dec 2022
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* 6 */}
                  <Link to={"/blog/6"}>
                    <div className="row py-3 m-blog">
                      <div className="col-4">
                        <img src="../img/blog/Blog6S.png" alt="" />
                      </div>
                      <div className="col-8">
                        <h6>
                          The Role of Digital in Opening School Facilities
                        </h6>
                        <p className="m-0" style={{ fontSize: "x-small" }}>
                          In order to encourage schools to make their sports
                          facilities available to the community, children, and
                        </p>
                        <p className="text-muted ">
                          <span>Cricket</span> 20 Dec 2022
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* 7 */}
                  <Link to={"/blog/7"}>
                    <div className="row py-3 m-blog">
                      <div className="col-4">
                        <img src="../img/blog/blog7S.png" alt="" />
                      </div>
                      <div className="col-8">
                        <h6>
                          5 strategies for getting ready for football season
                        </h6>
                        <p className="m-0" style={{ fontSize: "x-small" }}>
                          Playing football with your friends and coworkers is a
                          fantastic way to keep active and socialize.{" "}
                        </p>
                        <p className="text-muted ">
                          <span>Cricket</span> 20 Dec 2022
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default two;
