import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class six extends Component {
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
            <img className="blog-img " src="../img/blog/blog6b.png" alt="" />   
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="text-center py-4">
            The Role of Digital in Opening School Facilities
          </h3>
          <p>
            In order to encourage schools to make their sports facilities available to the community, children, and teenagers during the evenings and weekends, Sport Pakistan released RS 25 million in Opening School Facilities funding. Overall, the program was successful in increasing the number of kids and teenagers participating in physical activity. The program did, however, face significant difficulties, some of which were as follows:
          </p>
          <ul>
            <li>Facilities staffing outside of regular school hours 
            </li>
            <li>Additional costs for employees to handle and honor reservations and maintain the facilities
            </li>
            <li>More documentation for employees who handle reservations and open facilities
            </li>
          </ul>
          <p>It is estimated that an extra RS 57 million will be made available over the course of the following three years as part of the next phase of Opening Schools Facilities.
          </p>
          <h4 className="text-center">Three criteria to facilitate schools: 
          </h4>
          <h5>Make sports facilities after&nbsp;schools&nbsp;hours
          </h5>
          <ul>
            <li>Information about facilities&nbsp;for community members and service providers
            </li>
            <li>Simple online booking procedure lessens administrative work for school personnel
            </li>
            <li>Important safety precautions recorded throughout the booking procedure
            </li>
            <li>Access via a keypad is possible while still maintaining security.
            </li>
            <li>Real-time monitoring of facility use and financial performance
            </li>
          </ul>
          <p>
            When not being used for this purpose, the facilities should be made available to local clubs, coaches, and providers, or for the local community and parents to book and use, placing school facilities at the center of their communities. This will enable the delivery of activities for children and young people outside of school hours.
          </p>
          <p>
            Schools may accomplish this without putting additional strain on school employees by using a user-friendly digital platform and even keypad smart access for fenced fields.
          </p>
          <h5>
            Identify and promote extracurricular and comprehensive care activities:
          </h5>
          <ul>
            <li>Display the variety of possibilities accessible to both parents and children.
            </li>
            <li>Instant access reduces the difficulty of reserving and securing a spot.
            </li>
            <li>Monitoring attendance, protecting data, and reporting on impacts
            </li>
          </ul>
          <p>
            Activities offered at their school must be marked to help parents identify extracurricular and wraparound care options for their children. Using a simple digital booking system makes it easier for parents to reserve a spot. Schools can measure attendance with the use of digital ticketing systems, which is helpful for reporting on the effectiveness of investment.
          </p>
          <h5>
            Direct young people towards local play and sport opportunities 
          </h5>
          <ul>
            <li>Point young people toward options for community recreation and sport:
            </li>
            <li>Marketplaces can boost community letting bookings and income.
            </li>
            <li>Digital resources specifically designed for children and teens with SEND
            </li>
            <li>Tools and discovery portals for signposting at the national and local levels
            </li>
          </ul>
          <p>
            Schools should keep pointing kids toward play and athletic activities that are close by to build on the Opening School Facility funding.
          </p>
          <p>
            A school can enhance its accessibility over time, unlock the potential of community lettings, and serve as a sustainable source of income by posting facility information, availability, and booking online. Digital sport and activity markets may boost community rentals' income by raising awareness and supporting digital marketing. For schools to promote and direct parents to, there are a myriad of nationally and regionally focused websites, apps, and activity finders that serve a range of audiences.
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
          {/* <Link to={"/blog/6"}>
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
            </Link> */}
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

export default six;