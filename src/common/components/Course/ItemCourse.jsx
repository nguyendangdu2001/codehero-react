import React from "react";

function ItemCourse() {
  return (
    <article className="course-item col-xs-6 col-md-4 col-lg-3">
      <div className="border_course">
        <div className="wrap-course-item">
          <div className="course-thumb">
            <a href="s" title="s">
              <img
                style={{ width: "100%", height: "170px" }}
                src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png"
                alt="s"
              />
            </a>
            <div className="timeCouter">
              <span className="time">18:00:00</span>
            </div>
          </div>
          <div className="view-content">
            <h3 className="course-title">
              <a href="s">Hi</a>
            </h3>
            <div className="wrap_desc">Desc</div>
            <br />
            <div className="user-rating">
              <div className="course-info">
                <span className="lession-count">
                  <i className="fa fa-desktop" />
                  55
                </span>
                <span className="student-count">
                  <i className="fas fa-user-alt" />
                  2271
                </span>
              </div>
              <span className="star-rating">
                <span style={{ width: "90.0%" }} />
              </span>
            </div>
          </div>
          <div className="badge">
            <span className="name_badge">Khóa mới</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ItemCourse;
