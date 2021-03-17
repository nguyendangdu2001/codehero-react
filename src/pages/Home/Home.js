import React from "react";
import BenefitSection from "./BenefitSection";
import CountingSection from "./CountingSection";
import HeroSection from "./HeroSection";
import StartingSection from "./StartingSection";

export const Home = (props) => {
  return (
    <>
      <HeroSection />
      <StartingSection />
      <div style={{ marginTop: "100px" }} className="container-fluid">
        <BenefitSection />
        <br />
        <br />
        <CountingSection />
        <div className="step landing-section">
          <h2 className="title-section">
            <span
              style={{
                marginBottom: "5rem",
                display: "block",
                paddingTop: "3rem",
              }}
            >
              Hệ thống tốt nhất để học lập trình
            </span>
          </h2>
          <ul className="step-list">
            <li className="step-item item-white col-xs-12">
              <div data-aos="fade-right" className="circle-item">
                <span className="counter">1</span>
              </div>
              <div data-aos="fade-right" data-aos-delay={500} className="image-container">
                <img alt="" src="/img/choosewhattolearn.webp" />
              </div>
              <div className="content ">
                <h3 className="subHeading subHeadingLarge">Chọn học kiến thức cần thiết</h3>
                <p className="description">
                  Từ việc xây dựng trang web đến phân tích dữ liệu, sự lựa chọn là của bạn. Không
                  biết chắc nên bắt đầu từ đâu? Chúng tôi sẽ chỉ cho bạn đi đúng hướng
                </p>
              </div>
            </li>
            <li className="step-item item-white col-xs-12">
              <div data-aos="fade-right" className="circle-item">
                <span className="counter">2</span>
              </div>
              <div data-aos="fade-right" data-aos-delay={500} className="image-container">
                <img alt="" src="/img/learnbydoing.webp" />
              </div>
              <div className="content ">
                <h3 className="subHeading subHeadingLarge">Học bằng cách thực hành</h3>
                <p className="description">
                  Bất kể cấp độ kinh nghiệm của bạn, bạn sẽ được thực hành kiến thức đã học với
                  những ví dụ trong vài phút sau khi học lý thuyết
                </p>
              </div>
            </li>
            <li className="step-item item-white col-xs-12">
              <div data-aos="fade-right" className="circle-item">
                <span className="counter">3</span>
              </div>
              <div data-aos="fade-right" data-aos-delay={500} className="image-container">
                <img alt="" src="/img/getfeedback.webp" />
              </div>
              <div className="content ">
                <h3 className="subHeading subHeadingLarge">Nhận phản hồi tức thì</h3>
                <p className="description">
                  Code của bạn sẽ được kiểm tra ngay khi bạn gửi nó để bạn luôn biết bạn đang đi
                  đúng hướng hay không
                </p>
              </div>
            </li>
            <li className="step-item item-white col-xs-12">
              <div data-aos="fade-right" className="circle-item">
                <span className="counter">4</span>
              </div>
              <div data-aos="fade-right" data-aos-delay={500} className="image-container">
                <img alt="" src="/img/practice.webp" />
              </div>
              <div className="content ">
                <h3 className="subHeading subHeadingLarge">Đưa kiến thức vào thực tế</h3>
                <p className="description">
                  Áp dụng việc học của bạn với các dự án thực tế và kiểm tra kiến ​​thức của bạn với
                  các bài toán lập trình thi đấu
                </p>
              </div>
            </li>
            <li className="step-item item-white col-xs-12">
              <div data-aos="fade-right" className="circle-item">
                <span className="counter">5</span>
              </div>
              <div data-aos="fade-right" data-aos-delay={500} className="image-container">
                <img alt="" src="/img/landdreamjob.webp" />
              </div>
              <div className="content">
                <h3 className="subHeading subHeadingLarge">Nắm bắt công việc mơ ước</h3>
                <p className="description">
                  Nhu cầu công việc ngành công nghệ thông tin chưa bao giờ cao đến như vậy. Hãy tìm
                  hiểu mọi thứ bạn cần để đưa sự nghiệp của bạn lên một tầm cao mới
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="div_footer">
          <div className="footer-section1">
            <img src="img/banner.png" style={{ width: "100%" }} alt="" />
          </div>
          <div className="footer-section2" id="footer-section2">
            <div className="container mobile-container">
              <div className="inner row">
                <div className="col-lg-12 ">
                  <div className="content text-center">
                    <div className="feature-icon-base no-badge" style={{ transform: "scale(0.7)" }}>
                      <div className="icon red love-icon">
                        <div className="circle">
                          <div className="custom-icon">
                            <img
                              src="/img/sf.png"
                              alt="San Francisco"
                              width={52}
                              style={{ marginTop: "-13px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2
                      style={{
                        color: "rgb(198, 40, 40)",
                        position: "relative",
                        top: "-30px",
                      }}
                    >
                      <span>
                        Made with <i className="fa fa-heart heart" aria-hidden="true" />
                      </span>
                    </h2>
                    <p>
                      <span>
                        Tại CodeHeroes, nhiệm vụ của chúng tôi là giúp bạn cải thiện bản thân và đạt
                        được công việc mơ ước. Đừng chần chừ! Hãy bắt đầu ngay ngày hôm nay.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 content text-center" id="message-us">
                  <p>
                    <span>
                      Nếu bạn gặp phải bất kỳ vấn đề gì cần giúp đỡ, đừng ngại liên hệ với chúng
                      tôi. Chúng tôi luôn sẵn sàng hỗ trợ bạn bất kỳ lúc nào
                    </span>
                  </p>
                  <a href="#">
                    <p className="link">
                      Message Us &nbsp;
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
