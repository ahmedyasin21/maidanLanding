import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                {/* footer */}
<section id="footer">
  <div className="container ">
    <footer className="py-5">
      <div className="row contactUsSection">
        <div className="col-12 col-md-4 mb-3 ">
          <h5 className="white">About Us</h5>
          <ul className="nav flex-column white">
            <p className="nav-link p-0 text-muted">Consider us the Pakistan’s largest open-door digital sports club where you may make reservations on demand from any location at no additional charge.</p>
          </ul>
          <a href="#" target="_blank"><img src="./img/icon/googleplus-white.svg" /></a>
          <a href="https://www.instagram.com/meidanpk/" target="_blank"><img src="./img/icon/instagram-white.svg" /></a>
          <a href="#" target="_blank"><img src="./img/icon/linkedin-white.svg" /></a>
          <a href="https://www.facebook.com/profile.php?id=100087793651564" target="_blank"><img src="./img/icon/facebook-white.svg" /></a>
          <a href="https://twitter.com/meidanpk?t=PA2XknxiQltBwhbIuoN-TQ&s=08 " target="_blank"><img src="./img/icon/twitter-white.svg" /></a>
        </div> 
        <div className="col-12 col-md-2 mb-3 ">
          <h5 className="white">Section</h5>
          <ul className="nav flex-column">
            {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li> */}
            <li className="nav-item mb-2"><a href="#how" className="nav-link p-0 text-muted">How it works</a></li>
            <li className="nav-item mb-2"><a href="#blog-1" className="nav-link p-0 text-muted">Register Your Ground</a></li>
            <li className="nav-item mb-2"><a href="#about-1" className="nav-link p-0 text-muted">About Us</a></li>
            {/* <li class="nav-item mb-2"><a href="#FAQ" class="nav-link p-0 text-muted">FAQs</a></li> */}
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5 className="white">Section</h5>
          <ul className="nav flex-column">
            {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li> */}
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Term &amp; Condition</a></li>
            {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li> */}
          </ul>
        </div> 
        <div className="col-12 col-md-4  mb-3  ">
          <form>
            <h5 className="white">Contact Us</h5>
            <ul className="nav flex-column mt-4 white">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">328L Johar town, Lahore</a>
              </li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">meidanpk@gmail.com</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">+92-309-1422805</a></li>
            </ul>
          </form>
        </div>
      </div>
      <hr className="white" />
      <div className="row  text-center">
        <div className="col">
          <p className="white" style={{fontSize: '10px'}}>© 2022 MEIDAN PRIVATE LIMITED. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  </div>
</section>

            </div>
        );
    }
}

export default Footer;