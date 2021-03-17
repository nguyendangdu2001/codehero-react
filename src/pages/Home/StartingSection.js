import React from "react";
import PropTypes from "prop-types";

const StartingSection = (props) => {
  return (
    <div className="body">
      <div className="inner">
        <div className="explore-chapter-base" id="explore">
          <div className="container mobile-container">
            <div className="inner row">
              <div className="col-sm-6" style={{ position: "relative", top: "40px" }}>
                <div className="content-section-header">
                  <div className="section-header">
                    <h2>Bắt đầu khám phá</h2>
                    <div
                      className="feature-icon-base no-badge"
                      style={{
                        transform: "scale(0.7)",
                        position: "relative",
                        left: "-10px",
                        top: "-2px",
                      }}
                    >
                      <div className="icon teal develop-icon">
                        <div className="circle">
                          <i
                            className="fa fa-graduation-cap"
                            style={{ position: "relative", top: "-10px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    <span style={{ opacity: "0.5" }}>
                      {" "}
                      Bạn muốn bắt đầu học lập trình? Hãy khám phá thế giới kiến thức công nghệ với
                      CodeHeroes.
                    </span>
                  </p>
                  <a href="#">
                    <p className="link btn_modal">
                      Bắt Đầu&nbsp;
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-sm-6 "
                data-aos="fade-left"
                style={{ position: "relative", top: "37px" }}
              >
                <div className="explore-card-base">
                  <div className="explore-card">
                    <div className="card">
                      <div className="inner">
                        <div className="top">
                          <div className="sub-title t-top">
                            <p />
                            <p />
                          </div>
                          <div className="title">
                            <p />
                            <p />
                            <p />
                          </div>
                        </div>
                        <div className="play">
                          <i className="fa fa-play" />
                        </div>
                        <div className="bot">
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="explore-card">
                    <div className="card">
                      <div className="inner">
                        <div className="top">
                          <div className="sub-title t-top">
                            <p />
                            <p />
                          </div>
                          <div className="title">
                            <p />
                            <p />
                            <p />
                          </div>
                        </div>
                        <div className="play">
                          <i className="fa fa-play" aria-hidden="true" />
                        </div>
                        <div className="bot">
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="explore-card">
                    <div className="card">
                      <div className="inner">
                        <div className="top">
                          <div className="sub-title t-top">
                            <p />
                            <p />
                          </div>
                          <div className="title">
                            <p />
                            <p />
                            <p />
                          </div>
                        </div>
                        <div className="play">
                          <i className="fa fa-play" />
                        </div>
                        <div className="bot">
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingSection;
