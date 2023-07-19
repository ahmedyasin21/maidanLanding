import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

class Landing extends Component {
  componentDidMount() {
    this.loadMore();
  }

  loadMore = () => {
    $(document).ready(function () {
      $(".content").slice(0, 10).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 2).slideDown();
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
          {/* Blog-listing */}
          <div className="heading pt-5 pb-5">
            <h1>Blogs</h1>
          </div>
          <div className="content">
            {/* <div class="container content">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div> */}
            {/* 2 */}
            {/* <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 186.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div> */}
            {/* 3 */}
            {/* <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div> */}
            {/* 4 */}
            {/* <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div> */}
            {/* 5 */}
            {/* <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div> */}
            {/* 6 */}
            {/* <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div>/ */}
            {/* 7 */}
            {/* <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" id="loadMore" href="">View more</a>
      </div>
  </div>
    </div> */}
            {/* 8 */}
            {/* <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam, veritatis voluptatum mollitia aliquam totam tempora officia, quia eaque consequatur beatae voluptatem cum aperiam eum voluptas, minima accusantium ullam numquam!
      </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div> */}
            {/* <a href="" id="loadMore"> View </a> */}
          </div>
          <div className="container">
            <div className="flex">
              {/* 1 */}
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog1L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>Indoor Games for Adults:</h5>
                      <p>
                        You found our list of indoor games for adults.
                        <br />
                        Indoor team games and activities are enjoyable workouts
                        that adults can perform with other adults. The board
                        games Monopoly, Never Have I, and tic-tac-toe
                        competitions are some examples of indoor games. Even in
                        situations where being outside is not possible, these
                        activities are fantastic for fostering closeness. These
                        indoor games can also be utilized to increase
                        cooperation and spirit.
                      </p>
                      <Link to={"/blog/8"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog1L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>Different Types of Outdoor Games: </h5>
                      <p>
                        Summer is on its way, and a picnic would be incomplete
                        without sports.
                        <br />
                        Outdoor games, whether with family or friends, provide a
                        way for "kids to play with other kids, neighbors to
                        gather, and adult hangouts." Our suggested outdoor games
                        bring people together, whether they are 10 years old, 30
                        years old, or 70 years old. To find the greatest lawn
                        and ground games for all types of players, even shy kids
                        who would prefer to stay inside.
                      </p>
                      <Link to={"/blog/9"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog1L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>Best Playground Equipment for School: </h5>
                      <p>
                        Let's get down to business—the real playground equipment
                        you require! We have some of our favorite options across
                        a range of price points but first of all let's talk
                        about the design of playground equipment.Let's get down
                        to business—the real playground equipment you require!
                        We have some of our favorite options across a range of
                        price points but first of all let's talk about the
                        design of playground equipment.
                      </p>
                      <Link to={"/blog/10"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog1L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5> Difference between sports and games: </h5>
                      <p>
                        Sports are activities that require physical exertion and
                        ability, are usually organized by a system of rules or
                        norms, and are competitive in nature. Sports can be
                        played alone or as part of a team and are frequently
                        classified or divided into groups or disciplines. They
                        are not only enjoyable, but they also have cultural,
                        social, and economic value in many countries.
                      </p>
                      <Link to={"/blog/11"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog1L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>5 indoor sports to keep you active over winter:</h5>
                      <p>
                        How well are all those pledges and resolutions to get
                        more active holding up after a month into the New Year?
                        <br />
                        We are aware that it might be challenging to get outside
                        during the gloomy, freezing months. Maidan has your
                        back, so don't worry. There are several wonderful indoor
                        activities that can keep you moving even when the
                        weather isn't cooperating. <br />
                        The very best? At the click of a button, they're all
                        accessible through Maidan.
                      </p>
                      <Link to={"/blog/1"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* 2 */}
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12  img-b">
                      <img src="../img/blog/blog2L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12  text-b mt-2">
                      <h5>P­laces where we've excelled</h5>
                      <p>
                        Maidan's influence has been noticed across the sector,
                        working with leisure providers to replace empty space
                        and allowing authorities to engage more of their local
                        communities. This has increased social impact via
                        accessibility. Serving and energizing many schools,
                        sports teams, and community institutions around
                        Pakistan. It has been an honor to witness the positive
                        social impact we have had by simply making sport more
                        accessible to those from more underprivileged
                        situations. This has led to a 24% decrease in IMD
                        (Indices of Multiple Deprivation) scores and a more than
                        50% rise in facility usage.
                      </p>
                      <Link to={"/blog/2"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* 3 */}
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog3L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>What are the different tennis shots?</h5>
                      <p>
                        Everyone was happy to see a sport return after a
                        prolonged absence, and it appears tennis has emerged
                        from its covid-19&nbsp;sabbatical stronger than ever.
                        Tennis has benefited greatly by being one of the first
                        few sports to be given permission to reopen, despite the
                        absence of Tennis action on our courts and screens.
                        Tennis is being ranked as one of the modern sports with
                        the highest COVID security. Therefore, for those who are
                        just starting out in tennis and may be seeking some
                        advice before unlocking their inner player&nbsp;on the
                        court. Maidan's came up with the concept to list some
                        shots you can at least try to play in your first tennis
                        match.&nbsp;&nbsp;
                      </p>
                      <Link to={"/blog/3"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* 4 */}
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog4L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>What is Padel Tennis?</h5>
                      <p>
                        One of the grassroots sports with the quickest growth in
                        Pakistan is padel tennis. In the Pakistan, the sport has
                        kept gaining popularity.
                      </p>
                      <p>
                        Padel is essentially a hybrid of conventional tennis and
                        squash that was created in Mexico in 1969 by Enrique
                        Corcuera. The court is surrounded by a wall of glass and
                        mesh and is typically used for doubles play. This wall
                        is essential to game play since it can be used by
                        players to bounce the ball off of, giving every rally a
                        fresh perspective and distinct feel.
                      </p>
                      <p>
                        The greatest players from across the world are even
                        invited to participate in the first-ever WPT "World
                        Padel Tour" at the Spanish headquarters.
                      </p>
                      <Link to={"/blog/4"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* 5 */}
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog5L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>Reasons Why Teamwork Is Important in Sports</h5>
                      <p>
                        Football is one of the most popular sports in the world,
                        among the many others that people enjoy. Football
                        devotees will tell you how much they enjoy following
                        their team's growth and watching football matches. The
                        majority of football enthusiasts now wager on sports
                        betting sites like casinos, which makes the activity
                        more engaging.
                      </p>
                      <p>
                        Have you ever thought about what it is specifically that
                        makes a football team successful? It is collaboration,
                        after all! Even if it is common to lose games
                        occasionally, with collaboration, you may assure that
                        you prevail the following time. Following that, the
                        following are some factors that contribute to the
                        importance of teamwork in football:
                      </p>
                      <Link to={"/blog/5"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* 6 */}
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog6L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>The Role of Digital in Opening School Facilities</h5>
                      <p>
                        In order to encourage schools to make their sports
                        facilities available to the community, children, and
                        teenagers during the evenings and weekends, Sport
                        Pakistan released RS 25 million in Opening School
                        Facilities funding. Overall, the program was successful
                        in increasing the number of kids and teenagers
                        participating in physical activity. The program did,
                        however, face significant difficulties, some of which
                        were as follows:
                      </p>
                      <ul>
                        <li>
                          Facilities staffing outside of regular school hours
                        </li>
                        <li>
                          Additional costs for employees to handle and honor
                          reservations and maintain the facilities
                        </li>
                        <li>
                          More documentation for employees who handle
                          reservations and open facilities
                        </li>
                      </ul>
                      <Link to={"/blog/6"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* 7 */}
              <div className="content">
                {" "}
                <div
                  className="container content mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="row r-list">
                    <div className="col-md-4 col-12 img-b">
                      <img src="../img/blog/blog7L.png" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-b mt-2">
                      <h5>
                        5 strategies for getting ready for football season
                      </h5>
                      <p>
                        Playing football with your friends and coworkers is a
                        fantastic way to keep active and socialize.
                        Additionally, it helps with focus and endurance. We
                        offer five preparation recommendations for the next
                        football season.
                      </p>
                      <li style={{ fontWeight: "bolder" }}>
                        Trying to stretch
                      </li>
                      <p>
                        Stretching exercises should be a part of your pre-game
                        and training regimen, even if they are not the most
                        enjoyable aspect of playing sports. Your range of
                        motion, as well as your flexibility and stiffness, can
                        all be improved with their assistance.
                      </p>
                      <Link to={"/blog/7"} mode="dark" className="view-more">
                        {" "}
                        View more{" "}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* 8 */}
              {/* <div class="content"> <div class="container content mt-5">
  <div class="row r-list">
      <div class="col-4 img-b"><img src="../img/blog/Group 181.png" alt=""></div>
      <div class="col-8 text-b mt-2">
        <h5>
          P­laces where we've excelled
        </h5>
        <p>
          Maidan's influence has been noticed across the sector, working with leisure providers to replace empty 
              space and allowing authorities to engage more of their local communities. This has increased social impact 
              via accessibility. Serving and energizing many schools, sports teams, and community institutions around
               Pakistan. It has been an honor to witness the positive social impact we have had by simply making sport 
               more accessible to those from more underprivileged situations. This has led to a 24% decrease in IMD 
               (Indices of Multiple Deprivation) scores and a more than 50% rise in facility usage.
        </p>
          <a class="view-more" href="">View more</a>
      </div>
  </div>
    </div> </div> */}
            </div>
            <div className="row">
              <div
                className="col-12 btn"
                onClick={this.loadMore}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <a href="#" id="loadMore">
                  <button> Load more </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
