import React from "react";

const CountingSection = (props) => {
  return (
    <div
      style={{
        background: 'url("/img/ban.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          background: "rgba(31, 47, 105, -0.05)",
          padding: "40px 8px",
        }}
      >
        <div className="row">
          <div className="col-lg-4">
            <div className="main_achieve">
              <div>
                <div className="number_icon">
                  <i className="fa fa-graduation-cap icon_title icon_adv icon_blue" />
                  <span className="number_grand">0000+</span>
                </div>
                <span className="title_achieve">Học viên đã đăng ký</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="main_achieve">
              <div>
                <div className="number_icon">
                  <i className="fa fa-medal icon_title icon_adv icon_blue" />
                  <span className="number_grand">0000+</span>
                </div>
                <span className="title_achieve">Chứng chỉ học tập</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="main_achieve">
              <div>
                <div className="number_icon">
                  <i className="fa fa-chart-line icon_title icon_adv icon_blue" />
                  <span className="number_grand">0000+</span>
                </div>
                <span className="title_achieve">Quốc gia sử dụng</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a className="btn btn-danger" href="#">
            Tham gia học lập trình ngay
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default CountingSection;
