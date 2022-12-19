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
                <Link  to={"/"} mode="dark" className="nav-link fsnEF">Home</Link>
                </li>
                <li className="nav-item">
                <Link  to={"/about-us"} mode="dark" className="nav-link fsnEF">About us </Link>

                </li>
                <li className="nav-item">
                <Link  to={"/how-it-works"} mode="dark" className="nav-link fsnEF">How It Works </Link>
                </li>
                <li className="nav-item">
                <Link  to={"/merchant"} mode="dark" className="nav-link fsnEF">Merchant </Link>
                </li>
                <li className="nav-item">
                <Link  to={"/blog-listing"} mode="dark" className="nav-link fsnEF">Blog </Link>
                </li>
                <li className="nav-item">
                <Link  to={"/contact-us"} mode="dark" className="nav-link fsnEF">Contact-Us </Link>
                </li>
                <li className="nav-item">
                  <Link  to={"/terms-and-conditions"} mode="dark" className="nav-link fsnEF">Term &amp; Condition </Link>

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