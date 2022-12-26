import React, { Component,useEffect,useState } from "react";
import  { Link, NavLink } from "react-router-dom";

const HeaderComponent =()=>{

  const [toggle,setToggle] = useState(false)


  useEffect(() => {
    // Update the document title using the browser API
    console.log(toggle)
  },[toggle]);


      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <Link exact   to={"/"} mode="dark" >
            <img src="../img/brand/kmico-192.png" style={{maxWidth: '150px'}} />
          </Link>          
              <button className="navbar-toggler collapsed" type="button" onClick={()=>setToggle(!toggle)} data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`navbar-collapse collapse ${toggle? "show":null}`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink exact   to={"/"} mode="dark" className="nav-link fsnEF">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact   to={"/about-us"} mode="dark" className="nav-link fsnEF">About us </NavLink>

                </li>
                <li className="nav-item">
                <NavLink exact   to={"/how-it-works"} mode="dark" className="nav-link fsnEF">How It Works </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact   to={"/merchant"} mode="dark" className="nav-link fsnEF">Merchant </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact   to={"/blog-listing"} mode="dark" className="nav-link fsnEF">Blog </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact   to={"/contact-us"} mode="dark" className="nav-link fsnEF">Contact Us </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact   to={"/terms-and-conditions"} mode="dark" className="nav-link fsnEF">Term &amp; Condition </NavLink>

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