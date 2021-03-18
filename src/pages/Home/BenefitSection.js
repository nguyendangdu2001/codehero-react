import React from "react";

const BenefitSection = (props) => {
  return (
    <div className="container key_section landing-section mobile-container">
      <h2 className="title_section">
        Lập trình
        <br /> là xu thế của tương lai
      </h2>
      <br />
      <br />
      <div className="row">
        <div data-aos="fade-right" className="col-lg-6" style={{ right: "40px" }}>
          <img src="/img/" alt="" />
          <div style={{ display: "flex" }}>
            <img src="/img/home1.png" className="image_key_section" alt="" />
            <img src="/img/home2.png" className="image_key_section" alt="" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/img/home3.png" className="image_key_section" alt="" />
          </div>
          <div style={{ display: "flex" }}>
            <img src="/img/home4.png" className="image_key_section" alt="" />
            <img src="/img/home5.png" className="image_key_section" alt="" />
          </div>
        </div>
        <div
          className="col-lg-6 responsive-col"
          style={{ position: "relative", top: "135px", left: "100px" }}
        >
          <ul className="list-key-features">
            <li>
              <div className="title_group">
                <img src="/img/phat-trien-tu-duy-sang-tao.png" className="img_title" alt="" />
                <h3 className="header_title">Phát triển tư duy sáng tạo</h3>
              </div>
              <p className="content">
                Học cách viết code giúp bạn trau dồi tư duy logic và đưa bạn đến một cấp độ giải
                quyết vấn đề hoàn toàn mới.
              </p>
            </li>
            <li>
              <div className="title_group">
                <img src="/img/lam-quen-cong-nghe.png" className="img_title" alt="" />
                <h3 className="header_title">Làm quen thế giới công nghệ</h3>
              </div>
              <p className="content">
                Học lập trình giúp bạn thân thiết hơn với thế giới công nghệ, thích nghi với cuộc
                sống thời đại 4.0.
              </p>
            </li>
            <li>
              <div className="title_group">
                <img src="/img/mo-rong-co-hoi-nghe-nghiep.png" className="img_title" alt="" />
                <h3 className="header_title">Mở rộng cơ hội nghề nghiệp</h3>
              </div>
              <p className="content">
                Công việc lập trình đang tăng nhanh 50% so với thị trường việc làm nói chung với mức
                lương cao hơn trung bình 30%.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
