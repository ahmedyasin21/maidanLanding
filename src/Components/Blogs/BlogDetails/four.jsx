import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class four extends Component {
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
            <img className="blog-img " src="../img/blog/blog4b.png" alt="" />   
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="text-center py-4">What is Padel Tennis?
          </h3>
          <p>One of the grassroots sports with the quickest growth in Pakistan is padel tennis. In the Pakistan, the sport has kept gaining popularity.
          </p>
          <p>Padel is essentially a hybrid of conventional tennis and squash that was created in Mexico in 1969 by Enrique Corcuera. The court is surrounded by a wall of glass and mesh and is typically used for doubles play. This wall is essential to game play since it can be used by players to bounce the ball off of, giving every rally a fresh perspective and distinct feel.
          </p>
          <p>The greatest players from across the world are even invited to participate in the first-ever WPT "World Padel Tour" at the Spanish headquarters.
          </p>
          <h5>How to Play Padel Tennis Basic Rules of Padel
          </h5>
          <p>On a court that is one-third the size of a typical tennis court, padel is often played in doubles. Each player must start their rally serving underarm with a solid, stringless racket and a low compression tennis ball.
          </p>
          <h5>Padel Court Dimensions
          </h5>
          <p>A padel court may be up to 20 meters long and 10 meters wide, with back and side glass walls that are 3 and 4 meters tall, respectively. Metallic netting that rises to a height of 4 meters divides apart the remaining portion of the court.
          </p>
          <p>The court is divided in half by a net in the center. Its greatest height is 88 cm in the middle and 92 cm on either side. From the net to the service line, a line that is perpendicular runs. The court is divided in half by this line, which also provides two separate service boxes on either side of the net. The service line spans the entire width of the court and is 3 meters from the back wall.
          </p>
          <h5>The serve: 
          </h5>
          <p>Like in tennis, each point starts with a serve that must be delivered to your opponent across the court and land in the opposing service box. You receive two chances to serve, much as in tennis, however in padel, the serve HAS to be done underarm. If the serve touches the top of the net but still makes it to the service box, it is called a "let."
          </p>
          <h5>The Rally
          </h5>
          <p>Before touching any other area of the court or being returned by a player from the other side, the ball may only bounce once on the ground.
          </p>
          <p>The barriers are what make padel so strategically distinct and interesting. As long as the ball clears the goal, players are permitted to strike the ball directly off of their own wall. But before touching the wall again, the ball MUST ALWAYS bounce on the other side's surface.
          </p>
          <p>Once the ball makes two bounces on one side, hits the net, slams against an opponent's wall before rebounding, or leaves the court totally, a point is awarded.
          </p>
          <h5>The Scoring
          </h5>
          <p>Before a game is won, the score increases in increments of 15, 30, and 40, similar to the tennis scoring system. When the score is 40-40, the game moves to "Deuce," with the winner being the first to take a two-point advantage.
          </p>
          <p>A side has to win two sets to win the match, and a set requires six games to win. Players compete in a seven-point tiebreaker if a set is deadlocked after six games to determine the winner.
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
          {/* <Link to={"/blog/4"}>
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
          {/* 5 */}
          <Link to={"/blog/5"}>
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
            </Link>
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

export default four;