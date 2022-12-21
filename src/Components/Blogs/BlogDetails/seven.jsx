import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class seven extends Component {
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
            <img className="blog-img " src="../img/blog/blog7b.png" alt="" />   
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="text-center py-4">
            5 strategies for getting ready for football season
          </h3>
          <p>
            Playing football with your friends and coworkers is a fantastic way to keep active and socialize. Additionally, it helps with focus and endurance. We offer five preparation recommendations for the next football season.
          </p>
          <ul>
            <li style={{fontWeight: 'bolder'}}>Trying to stretch
            </li>
            <p>Stretching exercises should be a part of your pre-game and training regimen, even if they are not the most enjoyable aspect of playing sports. Your range of motion, as well as your flexibility and stiffness, can all be improved with their assistance. 
            </p>
            <li style={{fontWeight: 'bolder'}}>Training Frequently
            </li>
            <p>
              To improve their performance during games, many athletes put in hours of practice. You should practice frequently if you want to be a good football player since it will improve both your performance and general health. You'll be prepared to play at full pace for your Saturday morning match if you warm up completely and then do some speed and agility drills.
            </p>
            <li style={{fontWeight: 'bolder'}}>Put the team first.
            </li>
            <p>
              It pulls people together, and for it to succeed, a team effort is required from everyone. Learn more about the value of collaboration in football.
            </p>
            <p>
              Athletes assist one another and collaborate to achieve a common objective. The desired outcome is far more likely to be achieved when everyone remains focused on their activity. If a group of individuals wants to win, they have a far greater hill to climb.
            </p>
            <li style={{fontWeight: 'bolder'}}>Set objectives
            </li>
            <p>
              Instead of simply going out there and "doing your best," the best approach to create goals for you or your team is to settle on a plan. Work on some strategies with your team at a table to give you the edge in the game. Visualizing plays and formations may also be useful for getting your squad on the same page.
            </p>
            <li style={{fontWeight: 'bolder'}}>Have Fun:
            </li>
            <p>
              Last but not least, working as a team ought to be enjoyable. You may take pleasure in both playing and socializing with your friends.
            </p>
            <p>
              At Maidan, you can reserve hundreds of football fields online for practice or games around Pakistan. To manage reservations on the move, download our app.
            </p>
          </ul>
          <h4 className="text-center">Types of Stretching
          </h4>
          <p>
            Since there are so many various stretching methods available, it can be difficult to distinguish between them and know how to use each one properly. Here is a brief overview of six popular flexibility techniques, along with illustrations, to help clear up some of the uncertainty.
          </p>
          <h5>
            Static stretching:
          </h5>
          <p>
            Static stretching, the most popular kind, involves stretching the targeted muscle area to its furthest extent and keeping that position for at least 30 seconds.
          </p>
          <p>Static stretches come in two varieties:
          </p>
          <p style={{fontWeight: 'bolder'}}>ACTIVE: <samp> The person exerts more force for a stronger intensity.</samp>
          </p>
          <p style={{fontWeight: 'bolder'}}>PASSIVE:  <samp> To boost intensity, more force is given by an outside source (such as a partner or an aid).</samp>
          </p>
          <h5>
            Flexible stretching
          </h5>
          <p>
            Dynamic stretching, in contrast to static stretching, calls for the utilization of ongoing movement patterns that resemble the activity or sport being played. Dynamic stretching often aims to increase flexibility for a specific sport or activity.
          </p>
          <h5>Strikingly stretching
            ` </h5>
          <p>An illustration of dynamic stretching would be a sprinter practicing long, brisk strides.
            This style of stretching uses repetitive bouncing motions to stretch the targeted muscle region and is frequently utilized in sporting activities. These bouncing motions may be done safely if conducted from low to high velocity and preceded by static stretching, even though they often activate the stretch reflex and may increase the risk of injury.
          </p>
          <h5>Active Isolated Stretching (AIS)
          </h5>
          <p>Only two second intervals are used when doing this stretch technique. It is done multiple times, each time going a little bit beyond than the point of resistance before. AIS are carried out for a defined number of repetitions over numerous sets, much like a strength-training program.
          </p>
          <h5>Myofascial stretching
          </h5>
          <p>
            Myofascial release is a technique that releases tension and increases flexibility in the underlying muscle and fascia, which is a densely woven, specialized system of connective tissue that covers and joins all of the body's compartments. Over a 2 to 6 inch region, small, continuous back-and-forth motions are made for 30 to 60 seconds. The amount of pressure used on the target location will depend on how much pain an individual can tolerate.
          </p>
          <h5>Proprioceptive neuromuscular facilitation (PNF)
          </h5>
          <p>Proprioceptive neuromuscular facilitation (PNF), it is a widespread technique to increase range of motion. Study reviewed potential processes, advanced hypotheses, and physiological alterations brought on by proprioceptive neuromuscular facilitation methods. 
          </p>
          <p>Autogenic inhibition, reciprocal inhibition, stress relaxation, and the gate control theory were named as the four potential mechanisms. According to the studies, combining these four processes improves range of motion. 
          </p>
          <p>Proprioceptive neuromuscular facilitation reduces performance in workouts requiring maximum effort when it is finished before exercise. This stretching technique improves range of motion and athletic performance. It is&nbsp;used regularly after exercise. The theoretical underpinnings of proprioceptive neuromuscular facilitation have not received much attention.</p>
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
    </div></section>
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

export default seven;