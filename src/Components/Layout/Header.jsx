import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(toggle);
  }, [toggle]);

  return (
    <div style={{marginBottom:"7%"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{ alignItems: "baseline" }}>
          <Link exact to={"/"} mode="dark">
            <img src="../img/icon/meidan.png" style={{ maxWidth: "200px" }} />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            onClick={() => setToggle(!toggle)}
            data-bs-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`navbar-collapse collapse ps-5 ${toggle ? "show" : null}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to={"/"} mode="dark" className="nav-link fsnEF">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={"/merchant"}
                  mode="dark"
                  className="nav-link fsnEF"
                >
                  Merchant{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={"/blog-listing"}
                  mode="dark"
                  className="nav-link fsnEF"
                >
                  Blog{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={"/contact-us"}
                  mode="dark"
                  className="nav-link fsnEF"
                >
                  Contact Us{" "}
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.meidanuserapp"
                target="_blank"
              >
                <img
                  src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 2.png"
                  alt=""
                  style={{ maxWidth: "130px" }}
                  className="img-fluid"
                />
              </a>
              <a href="">
                <img
                  src="./img/Download/png-clipart-app-store-google-play-apple-apple-text-logo 1.png"
                  alt=""
                  style={{ maxWidth: "130px" }}
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
