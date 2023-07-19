import React, { Component } from "react";
import { Link } from "react-router-dom";

class one extends Component {
  render() {
    return (
      <div>
        {/* BLOG */}
        <section className="blog-detail-pg ">
          <div className="container ">
            <div className="row">
              <div
                className="col-12 "
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1 className="text-center"></h1>
                <div className="text-center py-3 mb-4">
                  <img
                    className="blog-img "
                    src="../img/blog/blog1(b).png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-8">
                <h3 className="text-center py-4">
                  5 indoor sports to keep you active over winter{" "}
                </h3>
                <p>
                  How well are all those pledges and resolutions to get more
                  active holding up after a month into the New Year?
                  <br />
                  <br />
                  We are aware that it might be challenging to get outside
                  during the gloomy, freezing months. Maidan has your back, so
                  don't worry. There are several wonderful indoor activities
                  that can keep you moving even when the weather isn't
                  cooperating. <br />
                  <br />
                  The very best? At the click of a button, they're all
                  accessible through Maidan. <br />
                  <br />
                  Here is our ranking of the top indoor sports for the winter.
                </p>
                <h5>Indoor Football </h5>
                <p>
                  Traditionally a winter sport, not many of us have the
                  fortitude to play those muddy, rain-soaked Sunday morning
                  games down at the neighborhood park. Fortunately, there are
                  many locations in the Pakistan where you can play football
                  inside, whether you like 5-a-side, 7-a-side, or 11-a-side.
                </p>
                <p>
                  Indoor football is a major component of the Pakistan's growing
                  indoor sports infrastructure. There are several ways to
                  participate, including joining a team, playing in local
                  leagues, or simply having a friendly game with your friends.
                  You may reserve indoor football fields with Maidan.
                </p>
                <h5>Badminton </h5>
                <p>
                  Ask the other 278,000 people who play badminton; it's one of
                  the most well-liked indoor sports in the Pakistan and ideal
                  for staying in shape. For individuals who want to start
                  exercising, this simple activity is a fantastic option.
                </p>
                <p>
                  Anyone may have a lot of fun playing badminton with their
                  friends and family, whether they play singles or doubles. Find
                  your neighborhood badminton court and make a reservation
                  online at Maidan&nbsp;if you're seeking to get started.
                </p>
                <h5>Squash</h5>
                <p>
                  Want to become in better shape? In that case, squash is the
                  game for you. Regular participation in this fast-paced
                  activity provides a variety of advantages, including enhancing
                  cardiovascular fitness and agility and challenging hand-eye
                  coordination.
                </p>
                <p>
                  One of the only games that is only played indoors, you may
                  play your friends all year long regardless of how chilly the
                  winter is. There are many clubs and recreation centers that
                  host tournaments where you may put your abilities to the test
                  if you have trouble finding a challenger that is on par with
                  you.
                </p>
                <h5>Tennis </h5>
                <p>
                  Tennis conjures up images of leisurely, sunny evenings. But
                  that doesn't mean your racket should be gathering dust in the
                  cabinet since summer is long gone.
                </p>
                <p>
                  Numerous indoor tennis facilities, covered courts, and sports
                  halls are available around the country, ready and eager to
                  satisfy your winter tennis habit.
                </p>
                <p>
                  Tennis is a terrific way to stay fit and active throughout the
                  long winter months, whether you're seeking for some friendly
                  competition or want to gather your friends for a weekly
                  doubles game. It doesn't have to be really expensive either.
                  You may reserve several indoor pay-as-you-go courts with
                  Maidan right now.
                </p>
                <h5>Padel</h5>
                <p>
                  Padel tennis is a terrific place to start if you're searching
                  for a sport that's enjoyable and simple to learn. Padel is a
                  fantastic option if you've had trouble keeping up with tennis
                  and is one of the Pakistan’s fastest growing sports. It's also
                  a fantastic social sport to play with the people in your life.
                </p>
                <p>
                  It may be played in any weather because indoor courts are
                  available to reserve through Maidan.
                </p>
                <p>
                  In the winter months, it's simple to lose interest in sports.
                  You don't have to drag yourself to the neighborhood gym or use
                  that old treadmill in the garage to be active and adhere to
                  your New Year's plans.
                </p>
                <p>
                  Find your favorite Lahore playground and choose a time period
                  to enjoy indoor and outdoor activities. Meidan's website and
                  application are dedicated to online sportsground booking for
                  both professional and leisure sports. It also helps you keep
                  professional records. Users only need to search for "book
                  playground in lahore," "nearest snooker clubs," and "sports
                  complex near me," and related results will appear on the
                  screen. Their users may also receive results for "video game
                  stores," "outdoor and indoor games for adults and children,"
                  and so on.{" "}
                </p>
                <Link to={"/blog/4"}>
                  <h3 className="mt-3">What is Padel Tennis?</h3>
                  <img
                    src="../img/blog/blog4b.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Link>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <h5 className="text-center py-4">More Blogs </h5>
                </div>

                {/* 1 */}
                {/* <Link to={"/blog/1"}>
            <div className="row py-3 m-blog">
              <div className="col-4">
                <img src="../img/blog/Blog4S.png" alt="" />
              </div>
              <div className="col-8">
                <h6>What is Padel Tennis?
                </h6>
                <p className="m-0" style={{fontSize: 'x-small'}}>One of the grassroots sports with the quickest growth in Pakistan is padel tennis. In the Pakistan, the sport has kept gaining popularity.</p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
              </div>
            </div>
            </Link> */}
                {/* 2 */}
                <Link to={"/blog/2"}>
                  <div className="row py-3 m-blog">
                    <div className="col-4">
                      <img src="../img/blog/blog2S.png" alt="" />
                    </div>
                    <div className="col-8">
                      <h6>P­laces where we've excelled</h6>
                      <p className="m-0" style={{ fontSize: "x-small" }}>
                        {" "}
                        Maidan's influence has been noticed across the sector,
                        working with leisure providers to replace empty
                      </p>
                      <p className="text-muted ">
                        <span>Cricket</span> 20 Dec 2022
                      </p>
                    </div>
                  </div>
                </Link>
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
                        One of the grassroots sports with the quickest growth in
                        Pakistan is padel tennis. In the Pakistan, the sport has
                        kept gaining popularity.
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
                        Football is one of the most popular sports in the world,
                        among the many others that people enjoy.
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
                      <h6>The Role of Digital in Opening School Facilities</h6>
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
    );
  }
}

export default one;
