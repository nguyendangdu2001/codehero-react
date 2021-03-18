import React from "react";

export const Footer = (props) => {
  return (
    <div>
      <footer>
        <div className="container mobile-container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ul className="adress">
                <span>ĐỊA CHỈ</span>
                <li>
                  <p>Hòa Quý, Ngũ Hành Sơn, Đà Nẵng</p>
                </li>
                <li>
                  <p>+84 941 257 069</p>
                </li>
                <li>
                  <p>pvtnguyet.19it1@sict.udn.vn</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ul className="contact">
                <span>THÔNG TIN</span>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Thư viện</a>
                </li>
                <li>
                  <a href="#">Liên lạc</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="search-text">
                <div className="container mobile-container">
                  <div className="row text-center">
                    <div className="form">
                      <span className="header-form">ĐĂNG KÍ NHẬN EMAIL</span>
                      <form
                        id="search-form"
                        className="form-search form-horizontal"
                      >
                        <input
                          type="text"
                          className="input-search"
                          placeholder="Email Address"
                        />
                        <button
                          type="submit"
                          className="btn-search"
                          style={{
                            marginTop: "0.5em",
                            borderRadius: "5px",
                          }}
                        >
                          <span style={{ fontSize: "15px" }}>SUBMIT</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ul className="social">
                <span>MẠNG XÃ HỘI</span>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-github fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-tumblr fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus fa-2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mobile-container">
          <hr />
          <div className="row">
            <div className="col-lg-4 copyright">
              <span style={{ color: "#ffffff", fontWeight: "normal" }}>
                Copyright © 2020 CodeHeroes
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
