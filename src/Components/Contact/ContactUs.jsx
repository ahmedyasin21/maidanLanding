import React, { Component } from 'react';
import Lottie from "lottie-react";
// import ContactUs from  "../../../public/img/Contact-us/ContactUs.json" 
// import dinosaurs from '../../../public/img/Contact-us/ContactUs.json' assert {type: 'json'};
import * as animationData from '../../lottieFiles/ContactUslottie.json'


class ContactUs extends Component {
    render() {
        return (
            <div>
                {/* contact us */}
<section id="contact-us">
  <div className="container">
    <div className="row pb-5 pt-5">
      <div className="col-12  col-md-6 col-lg-6 contact-us-left"  data-aos="fade-up"
     data-aos-duration="1500">
        <h2>Take a Step Forward And Send Us A Message Today.</h2>
        <p>We are here to help and answer any question you might have. We look forward to hearing from you.</p>
        <form>
          <input type="text" id="fullName" placeholder="Your Name" />
          <input type="email" id="email" placeholder="like: abc@xyzmail.com" />
          <input type="number" id="phone" placeholder="Phone no." />
          <textarea name id="Message" cols={30} rows={10} placeholder="How can we help you?" defaultValue={""} />
          <button className="btn-send" onclick="msgprint()">Sent Message</button>
        </form>
      </div>
      <div className="col-12 col-md-6 col-lg-6 contact-us-right" data-aos="fade-up"
     data-aos-duration="1500">
      <Lottie animationData={animationData } loop={true} />    
        {/* <lottie-player src="./img/Contact-us/lf30_editor_2bgt6tgu.json" background="transparent" speed="0.3" style={{width: '100%', height: 'auto'}} loop autoPlay />  */}
        <h5 className="white">Contact Us</h5>
        <ul className="cont">
          <img className="cont-img" src="../img/Contact-us/icons8-visit-50.png" alt="" /><li className="nav-item mb-2"><a href>328L Johar town, Lahore, Pakistan</a></li><br />
          <img className="cont-img" src="../img/Contact-us/icons8-composing-mail-50.png" alt="" /><li className="nav-item mb-2"><a href>contact@meidan.pk</a></li><br />
          <img className="cont-img" src="../img/Contact-us/icons8-call-female-24.png" alt="" /><li className="nav-item mb-2"><a href>04237870328</a></li>
          <div className="icon">
            <a href="https://www.instagram.com/meidanpk/" target="_blank"><img src="../img/icon/instagram-white.svg" /></a>
            <a href="#" target="_blank"><img src="../img/icon/linkedin-white.svg" /></a>
            <a href="https://www.facebook.com/profile.php?id=100087793651564" target="_blank"><img src="../img/icon/facebook-white.svg" /></a>
            <a href="https://twitter.com/meidanpk?t=PA2XknxiQltBwhbIuoN-TQ&s=08" target="_blank"><img src="../img/icon/twitter-white.svg" /></a>
          </div>
        </ul>
      </div>
    </div>
  </div>
</section>

            </div>
        );
    }
}

export default ContactUs;