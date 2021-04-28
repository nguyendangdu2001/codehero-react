import React from "react";
import { Link } from "react-router-dom";
import pic2 from "../../../assets/img/pic2.png";
import logo from "../../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
export const Header = (props) => {
  return (
    <nav className="header ">
      <div id="progress_bar"></div>
      <div className="container-fluid site-header">
        <div className="wrap-site-logo">
          <NavLink
            style={{ display: "flex", alignItems: "center" }}
            className="header_link"
            to="/"
          >
            <img src="/img/pic2.png" alt="" />
            <span>
              <img src="/img/Logo.png" alt="" />
            </span>
          </NavLink>
        </div>
        <div className="wrap-header">
          <ul className="header_list hide-on-table-and-moblie">
            <li className="header_item">
              <NavLink
                activeClassName="border-bt"
                className="header_link"
                to="/course"
              >
                Chương trình đào tạo
              </NavLink>

              <ul className="course_cate" style={{ position: "absolute" }}>
                <li></li>
              </ul>
            </li>
            <li className="header_item">
              <NavLink
                activeClassName="border-bt"
                className="header_link"
                to="/document"
              >
                Tài liệu
              </NavLink>
            </li>
            <li className="header_item ">
              <NavLink
                activeClassName="border-bt"
                className="header_link"
                to="/blog"
              >
                Chia sẻ
              </NavLink>
            </li>
            <li className="header_item ">
              <NavLink
                activeClassName="border-bt"
                className="header_link"
                to="/forum"
              >
                Thảo luận
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className="header_btn">
          <li>
            <NavLink
              to="/login"
              style={{ outline: "none" }}
              className="btn btn-primary header_button btn_modal"
            >
              Đăng nhập
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              style={{ outline: "none" }}
              className="btn btn-danger header_button btn_modal hide-on-table-and-moblie"
            >
              Đăng ký
            </NavLink>
          </li>
        </ul>

        <div
          style={{
            marginRight: "3em",
            marginLeft: "0.5em",
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          <div status={0} className="notify">
            <span style={{ position: "relative", marginRight: "10px" }}>
              <i
                className="fas fa-bell btn btn-primary"
                style={{ fontSize: "1.2rem" }}
              />
              <span className="badge_notify" />
            </span>
            <div className="div_notify">
              <div className="setting_notify">
                <span>Thông báo</span>
                <a href="#">Cài đặt</a>
              </div>
              <ul className="list_notify"></ul>
            </div>
          </div>
          <span style={{ marginRight: "16px" }}>
            {" "}
            <i style={{ color: "#ff8c00" }} className="fas fa-coins" />
          </span>
          <div
            style={{ display: "flex", alignItems: "center", height: "58px" }}
            className="dropdown"
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: 'url("{{asset(Session::get("img"))}}")',
                display: "inline-flex",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <span></span>
            <div className="dropdown_user">
              <i style={{ paddingLeft: "4px" }} className="fas fa-caret-down" />
            </div>
            <div className="div_item">
              <li className="dropdown_item">
                <a href="">Vào trang admin</a>
              </li>

              <li className="dropdown_item"></li>
              <li className="dropdown_item"></li>
              <li
                style={{ borderBottom: "1px solid #ccc" }}
                className="dropdown_item"
              ></li>
              <li className="dropdown_item">
                <a>Đăng xuất</a>
              </li>
            </div>
          </div>
        </div>

        <i
          style={{ color: "black", fontSize: "1.3rem", marginLeft: "15px" }}
          className="fas fa-bars hidden-on-pc btn_nav"
        />
      </div>
    </nav>
  );
};

export default Header;
