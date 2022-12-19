import React, { Component,useEffect,useState } from "react";
import  { Link } from "react-router-dom";

const HeaderComponent =()=>{

  const [toggle,setToggle] = useState(false)


  useEffect(() => {
    // Update the document title using the browser API
    console.log(toggle)
  },[toggle]);


      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="index.html">
              <img src="../img/brand/kmico-192.png" style={{maxWidth: '150px'}} />
            </a>
            <button className="navbar-toggler collapsed" type="button" onClick={()=>setToggle(!toggle)} data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`navbar-collapse collapse ${toggle? "show":null}`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="index.html" mode="dark" className="nav-link fsnEF active">Home</a>
                </li>
                <li className="nav-item">
                <Link  to={"/about-us"} mode="dark" className="nav-link fsnEF">About us </Link>

                </li>
                <li className="nav-item">
                  <a href="./HowWeWork/HowWeWork.html" mode="dark" className="nav-link fsnEF">How it works</a>
                </li>
                <li className="nav-item">
                  <a href="./BecomeAMerchand/BecomeAMerchand.html" mode="dark" className="nav-link fsnEF ">Register Your Ground</a>
                </li>
                <li className="nav-item">
                  <a href="./Blog/Blog-listing.html" mode="dark" className="nav-link fsnEF">Blogs</a>
                </li>
                <li className="nav-item">
                  <a href="./Contact-us/Contact-us.html" mode="dark" className=" nav-link fsnEF">Contact Us</a> 
                </li>
                <li className="nav-item">
                  <a href="./TermAndCondition/TermAndCondition.html" mode="dark" className="nav-link fsnEF">Term &amp; Condition</a>
                </li>
                {/* <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
              </ul>
            </div>
          </div>
        </nav>
      );
}
    
  

  export default (HeaderComponent); 