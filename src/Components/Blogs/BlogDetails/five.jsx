import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class five extends Component {
    render() {
        return (
            <div>
                <div>
  {/* BLOG */}
  <section className="blog-detail-pg ">
    <div className="container ">
      <div className="row">
        <div className="col-12 ">
          <h1 className="text-center">BLOGs</h1>
          <div className="text-center py-3 mb-4">
            <img className="blog-img " src="../img/blog/blog5b.png" alt="" />   
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="text-center py-4">
            Reasons Why Teamwork Is Important in Sports
          </h3>
          <p>Football is one of the most popular sports in the world, among the many others that people enjoy. Football devotees will tell you how much they enjoy following their team's growth and watching football matches. The majority of football enthusiasts now wager on sports betting sites like casinos, which makes the activity more engaging.
          </p>
          <p>Have you ever thought about what it is specifically that makes a football team successful? It is collaboration, after all! Even if it is common to lose games occasionally, with collaboration, you may assure that you prevail the following time. Following that, the following are some factors that contribute to the importance of teamwork in football:
          </p>
          <h5>
            Maximizes both the advantages and disadvantages
          </h5>
          <p>
            You may have a favorite squad because you believe it to be a powerful team with a lot of promise, and for good reason. When a football team plays as a unit, it is very difficult to identify any faults. Why so? This is because they encourage one another during the contest and make sure that each participant has an opportunity to compete. For instance, a player who is known for playing quickly can be placed in the offensive position to better use their power. On the other side, the midfield position is ideally suited for someone who excels at making accurate passes. As a result, the team gets to collaborate to make sure that each member is acknowledged for their strengths.
          </p>
          <p>
            It raises performance. The performance will be greater since working as a team enables you to capitalize on each player's skills and flaws. Every action the players do will be coordinated with one another thanks to good cooperation, boosting the likelihood that their team will score and defeat the opposition. If you do your homework, you will discover that teams that work well together have a greater success rate than those where each member strives to be better than the others.
          </p>
          <h5>
            It is fun loving 
          </h5>
          <p>
            The feeling of teamwork is enjoyable. You can take pleasure in both playing and the time spends together as a team.
          </p>
          <h5>
            It facilitates closer ties:
          </h5>
          <p>
            Nothing is better than being able to rejoice as a team after a victory. The players develop a close relationship via teamwork, which makes them lifelong friends outside of the playing environment. Additionally, a strong bond makes players responsible for one another.&nbsp; When a player makes a mistake, it is simple to correct them without creating a scene. On the other side, if a player advances, the teammates may quickly identify them and offer their congratulations. The players gain more self-assurance as a consequence, and they all do their hardest to make the squad successful.
          </p>
          <h5>Stress reduction
          </h5>
          <p>
            Football is good for your cardiovascular health, bone and muscular strength, and stress alleviation, obviously. Regular walking and jogging assist to strengthen the heart and lower blood pressure. Additionally, it enhances your mental health by enhancing coordination and lowering anxiety. Football is very easy to play, so you may try it in your neighborhood gym or at your kids' school.
          </p>
          <p>
            Football Today is a great way to relax since it makes you focus on the here and now. You may mingle and make new acquaintances thanks to it as well. Football is a great sport for improving your teamwork abilities. Players must cooperate in order to succeed and support one another in overcoming obstacles.
          </p>
          <a href="./blog6.html">               
            <h3>
              The Role of Digital in Opening School Facilities
            </h3>
            <img src="../img/blog/blog6b.png" alt="" style={{width: '100%'}} />
          </a>
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
                <h6>What is Padel Tennis?
                </h6>
                <p className="m-0" style={{fontSize: 'x-small'}}>One of the grassroots sports with the quickest growth in Pakistan is padel tennis. In the Pakistan, the sport has kept gaining popularity.</p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
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
                <p className="m-0" style={{fontSize: 'x-small'}}> Maidan's influence has been noticed across the sector, working with leisure providers to replace empty
                </p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
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
                <h6>What are the different tennis shots?
                </h6>
                <p className="m-0" style={{fontSize: 'x-small'}}>Everyone was happy to see a sport return after a prolonged absence, and it appears tennis has emerged</p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
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
                <h6>What is Padel Tennis?
                </h6>
                <p className="m-0" style={{fontSize: 'x-small'}}>One of the grassroots sports with the quickest growth in Pakistan is padel tennis. In the Pakistan, the sport has kept gaining popularity.</p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
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
                <h6>The Role of Digital in Opening School Facilities
                </h6>
                <p className="m-0" style={{fontSize: 'x-small'}}>In order to encourage schools to make their sports facilities available to the community, children, and</p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
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
                <h6>5 strategies for getting ready for football season
                </h6>
                <p className="m-0" style={{fontSize: 'x-small'}}>Playing football with your friends and coworkers is a fantastic way to keep active and socialize. </p>
                <p className="text-muted "><span>Cricket</span> 20 Dec 2022</p>
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

export default five;