import React, { Component } from "react";
import { Link } from "react-router-dom";

class eleven extends Component {
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
                      src="../img/blog/sportsgames.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className="text-center py-4">
                    Difference between sports and games:
                  </h3>
                  <h5>What are sports? </h5>
                  <p>
                    Sports are activities that require physical exertion and
                    ability, are usually organized by a system of rules or
                    norms, and are competitive in nature. Sports can be played
                    alone or as part of a team and are frequently classified or
                    divided into groups or disciplines. They are not only
                    enjoyable, but they also have cultural, social, and economic
                    value in many countries.
                  </p>
                  <p>
                    Athletes can demonstrate their ability, compete against
                    others, and strive for perfection via sports. They enhance
                    physical fitness, health, and well-being in general. Sports
                    may also promote discipline, collaboration, sportsmanship,
                    and character development. There are several sports
                    available, including popular ones like football (soccer),
                    basketball, tennis, cricket, rugby, golf, athletics,
                    swimming, and many more.
                  </p>
                  <p>
                    These sports can be practiced at many levels, ranging from
                    beginner and recreational games to professional and
                    international competitions such as the Olympic Games and
                    World Cup events.
                  </p>

                  <p>
                    In recent years, the definition of sports has broadened to
                    encompass a variety of non-traditional activities that
                    require physical activity and ability but do not always
                    entail direct competition or adhere to traditional
                    regulations. Parkour, esports (competitive video gaming),
                    and extreme sports like skating, snowboarding, and rock
                    climbing are examples of these.
                  </p>

                  <p>
                    Sports, in general, refer to a wide range of physical
                    activities that give entertainment, exercise, and a platform
                    for individuals to display their ability, enthusiasm, and
                    devotion.
                  </p>

                  <h4>What are games?</h4>

                  <p>
                    Games are activities or types of play in which one or more
                    individuals, known as players or gamers, participate in
                    organized or unstructured interactions governed by a set of
                    rules. Games can be played for a variety of reasons, such as
                    enjoyment, education, socialization, competitiveness, or
                    skill development.
                  </p>

                  <p>
                    Games, as opposed to sports, can include a wide range of
                    activities such as cerebral challenges, strategic thinking,
                    problem-solving, and artistic expression. Individual or team
                    games can be played, and they can be played using real
                    items, cards, boards, computers, consoles, or mobile
                    devices.
                  </p>

                  <p>
                    Games can have different genres and formats, such as board
                    games (e.g., chess, Monopoly), card games (e.g., poker,
                    bridge), video games (e.g., Fortnite, Minecraft),
                    role-playing games (e.g., Dungeons & Dragons), puzzle games
                    (e.g., Sudoku, crossword puzzles), and many more. Each game
                    has its own rules, objectives, and mechanics that define how
                    the players interact with each other and the game
                    environment.
                  </p>

                  <p>
                    The advent of digital technology in recent years has
                    resulted in the emergence of online gaming and esports, in
                    which individuals compete against one other or engage in
                    organized events in virtual worlds. These games frequently
                    feature large online communities and give players immersive
                    experiences.
                  </p>

                  <p>
                    Games can provide fun, challenge, cognitive stimulation,
                    social contact, and a sense of accomplishment. People of all
                    ages and cultures love them, and their popularity is growing
                    as technology progresses and new types of games arise.
                  </p>

                  <h5>Difference between sports and game:</h5>
                  <p>
                    Key differences between sports and games are given below:
                  </p>
                  <div style={{border:"2px solid black",marginTop:'20px'}}>
                  <h5 className="text-center p-2" style={{borderBottom:"2px solid black"}}>Competitive Structure</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{padding:"10px",textAlign:"justify"}}>
                          Sports are frequently organized into competitive
                          systems with clearly defined rules and regulations.
                          They frequently entail direct competition between
                          people or teams to choose a winner.
                        </td>
                        <td style={{padding:"10px",textAlign:"justify"}}>
                          Games, on the other hand, can have or not have a
                          competitive component. Some games are entirely
                          cooperative, while others may include some
                          competition, although it is not usually the main
                          focus.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div style={{border:"2px solid black",marginTop:'20px'}}>
                    
                  <h5  className="text-center p-2" style={{borderBottom:"2px solid black"}}>Skill Development</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{padding:"10px",textAlign:"justify"}}>
                          Physical skills, techniques, and athleticism are often
                          emphasized in sports. Athletes frequently receive
                          specialized training in order to improve their
                          performance in certain sports.
                        </td>
                        <td style={{padding:"10px"}}>
                          Games, on the other hand, might need a diverse set of
                          qualities, such as cognitive ability, strategy,
                          problem-solving, creativity, and social skills. The
                          emphasis on skill development in games varies based on
                          the type of game.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div style={{border:"2px solid black",marginTop:'20px'}}>
                  <h5 className="text-center p-2" style={{borderBottom:"2px solid black"}}>Physical Exertion</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{padding:"10px",textAlign:"justify"}}>
                          Sports often include physical exertion and require
                          participants to actively utilize their bodies.
                          Physical fitness and athleticism are important factors
                          in sports performance.
                        </td>
                        <td style={{padding:"10px",textAlign:"justify"}}>
                          Games, on the other hand, can include cerebral
                          difficulties, strategic thinking, and problem-solving
                          without putting as much emphasis on physical exercise.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div style={{border:"2px solid black",marginTop:'20px'}}>
                    
                  <h5 className="text-center p-2" style={{borderBottom:"2px solid black"}}>Context and Culture</h5>
                  <table className="table-responsive">
                    <tbody>
                      <tr>
                        <td style={{padding:"10px",textAlign:"justify"}}>
                          Sports have a profound cultural and historical
                          importance, with established traditions, fan bases,
                          and professional leagues. They may be profoundly
                          embedded in the culture of a specific area or nation.
                        </td>
                        <td style={{padding:"10px",textAlign:"justify"}}>
                          While games have cultural significance, they can also
                          embrace a larger range of activities and styles,
                          encompassing both traditional and modern games.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <p className="pt-3">
                    It is crucial to note that the difference between sports and
                    games can be hazy at times, since many activities might be
                    classified as both. Some sports, for example, have game-like
                    features such as strategic planning or riddles, whilst some
                    games may include physical exercise or organized
                    tournaments. Cultural viewpoints and circumstances can also
                    influence categorisation.
                  </p>
                  <p>
                    Find your favorite playground in Lahore and select time-slot
                    availability to play indoor and outdoor games. Meidan
                    website and application is all about booking sportsgrounds
                    online for professional and recreational sport. It also
                    benefits you to manage professional records. Only users have
                    to search for "book playground in lahore", "nearest snooker
                    clubs" and "sports complex near me", related results will be
                    delivered on screen. Their users may also have results for
                    “video game shops”, “outdoor and indoor games for adults and
                    kids” etc.
                  </p>

                  <Link to={"/blog/6"}>
                    <h3>The Role of Digital in Opening School Facilities</h3>
                    <img
                      src="../img/blog/blog6b.png"
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
                  {/* <Link to={"/blog/5"}>
            <div className="row py-3 m-blog">
              <div className="col-4">
                <img src="../img/blog/Blog5S.png" alt="" />
              </div>
              <div className="col-8">
                <h6>Reasons Why Teamwork Is Important in Football
                </h6>
                <p className="m-0" style={{fontSize: 'x-small'}}>Football is one of the most popular sports in the world, among the many others that people enjoy.</p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
              </div>
            </div>
            </Link> */}
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

export default eleven;
