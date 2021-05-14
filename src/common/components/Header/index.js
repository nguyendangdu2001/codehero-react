import React from "react";
import { Link } from "react-router-dom";
import pic2 from "../../../assets/img/pic2.png";
import logo from "../../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = (props) => {
  const auth = useSelector((state) => state?.userStatus?.auth);
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
        {!auth && (
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
        )}
        {auth && (
          <ul className="header_btn">
            <li>
              <span
                style={{ outline: "none" }}
                className="btn btn-primary header_button btn_modal"
              >
                Đăng Xuất
              </span>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
