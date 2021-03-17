import React from "react";

const HeroSection = (props) => {
  return (
    <div className="page-header">
      <div className="background">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="background-rvs" />
      <div className="inner">
        <div className="intro-chapter-base">
          <div className="container mobile-container">
            <div className="inner row" style={{ position: "relative", top: "102px" }}>
              <div
                data-aos="fade-right"
                className="col-md-6 hide-on-mobile"
                style={{ position: "relative", top: "51px" }}
              >
                <div className="ipad-base">
                  <div className="ipad">
                    <div className="screen">
                      <div className="row min-page">
                        <div className="col-xs-9">
                          <div className="app-draw">
                            <div className="block">
                              <div className="app blue" />
                            </div>
                            <div className="block">
                              <div className="app green" />
                            </div>
                            <div className="block">
                              <div className="app yellow" />
                            </div>
                          </div>
                          <div className="some-list">
                            <div className="list-obj">
                              <div className="dot pull-right" />
                              <div className="item" />
                            </div>
                            <div className="list-obj">
                              <div className="dot pull-right" />
                              <div className="item" />
                            </div>
                            <div className="list-obj">
                              <div className="dot pull-right" />
                              <div className="item" />
                            </div>
                            <div className="list-obj">
                              <div className="dot pull-right" />
                              <div className="item" />
                            </div>
                            <div className="list-obj">
                              <div className="dot pull-right" />
                              <div className="item" />
                            </div>
                            <div className="list-obj">
                              <div className="dot pull-right" />
                              <div className="item" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-3 side-bar">
                          <div className="progress-panel">
                            <div className="draw-pie" style={{ position: "relative" }}>
                              <div
                                className="pie"
                                data-start="a"
                                data-value="a"
                                style={{ left: "29px" }}
                              />
                              <div
                                className="pie big static"
                                data-start="b"
                                data-value="b"
                                style={{ left: 0 }}
                              />
                              <div
                                className="pie big animate"
                                data-start="b"
                                data-value="b"
                                style={{ left: 0 }}
                              />
                            </div>
                          </div>
                          <div className="list-panel">
                            <div className="list-item" />
                            <div className="list-item" />
                            <div className="list-item" />
                            <div className="list-item" />
                            <br />
                            <div className="list-item" />
                            <div className="list-item" />
                            <div className="list-item" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="col-md-6 intro-title title-on-mobile ">
                <div className="content-header text-center">
                  <h1>Học Lập Trình Từ Con Số 0</h1>
                  <p>
                    CodeHeroes là nền tảng tốt nhất để giúp bạn nâng cao kỹ năng, mở rộng kiến
                    ​​thức của mình và chuẩn bị cho các cuộc phỏng vấn.
                  </p>
                  <a className="btn sign-up-btn hover-panel round btn_modal">
                    Tạo Tài Khoản&nbsp;
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
