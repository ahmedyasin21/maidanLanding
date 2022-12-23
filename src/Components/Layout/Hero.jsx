import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div>
                  {/* hero */}
                    <section id="download">
                        <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6"><img className="download-mockup" src="./img/Download/meidan mockup .png" alt="" /></div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 download-content">
                            <div className="row"><h1>Download the Meidan App</h1></div>
                            <div className="row"><p>Meidan is the Pakistan's top serch and booking site for recreational sport. Our goal is to increase facility usage by making it modelest for everyone to participate in sports. </p></div>
                            <div className="row">
                                <div className="col-12">
                                <a href><img className="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 2.png" alt="" /></a>
                                <a href><img className="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt="" /></a></div>
                                {/* <div class="col-6"><img class="download-btn" src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt=""></div> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default Hero;