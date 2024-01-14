import React, { useState, useEffect } from "react";
import buddodu from "../assets/images/profile-img.png";
import { Link } from "react-router-dom";
import MeteorShower from "./MeteorShower";

function Main() {
  const [bgLoaded, setBGLoaded] = useState(false);
  const [isBoxLoaded, setIsBoxLoaded] = useState(false);
  const [isPicLoaded, setIsPicLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBGLoaded(true);
    }, 800);
    setTimeout(() => {
      setIsBoxLoaded(true);
    }, 1900);
    setTimeout(() => {
      setIsPicLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className="main">
        <div className="backgroundScreen">
          <div className="left"></div>
          <div className="right">
            <MeteorShower />
          </div>
        </div>
        {bgLoaded ? (
          <div className="content">
            <div className="box">
              <div className="leftBox">
                {isBoxLoaded ? (
                  <img
                    src={buddodu}
                    className="fade-in-element"
                    alt="myimage"
                  />
                ) : null}
              </div>
              <div className="rightBox">
                {isPicLoaded ? (
                  <div>
                    <h1
                      style={{ color: "white", fontSize: "50px" }}
                      className="head"
                    >
                      Hi,
                    </h1>
                    <p
                      style={{
                        color: "white",
                        fontSize: "30px",
                        marginTop: "30px",
                      }}
                      className="name"
                    >
                      I'm Prashanth Kusuma.
                    </p>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "20px",
                        marginTop: "20px",
                        fontWeight: "400",
                      }}
                      className="intro"
                    >
                      I am a fullstack developer💻, selenophile🌙 and a foodie😋
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            {isPicLoaded ? (
              <div className="links">
                <div className="bottomLinks">
                  <span className="bl">
                    <Link to="/about" className="black">
                      About Me.
                    </Link>
                  </span>
                  <span className="bl">
                    <Link to="/skills" className="white">
                      My Skills.
                    </Link>
                  </span>
                </div>
                <div className="leftLinks"></div>
                <div className="rightLinks">
                  <span className="icon">
                    <Link to="https://www.linkedin.com/in/prashanth-kusuma/">
                      <i class="fa-brands fa-linkedin"></i>
                    </Link>
                  </span>
                  <span className="icon">
                    <Link to="https://github.com/prashanthkusuma/">
                      <i class="fa-brands fa-github"></i>
                    </Link>
                  </span>
                </div>
                <div className="topLinks">
                  <span className="tl">
                    <Link
                      to="mailto:prashanthkusuma@outlook.com"
                      className="white"
                    >
                      Say Hi..
                    </Link>
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Main;
