import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config/api";

function ItemCourse({ cate, item }) {
  console.log(item);
  return (
    <Fragment>
      <h3 className="col-12">{cate}</h3>
      {item.map((e, v) => {
        return (
          <article
            key={e.id_course}
            className="course-item col-xs-6 col-md-4 col-lg-3"
          >
            <div className="border_course">
              <div className="wrap-course-item">
                <div className="course-thumb">
                  <Link to={`/course-detail/${e.id_course}`} title="s">
                    <img
                      style={{ width: "100%", height: "170px" }}
                      src={`${config.resourse}/public/${e.img_course}`}
                      alt="s"
                    />
                  </Link>
                  <div className="timeCouter">
                    <span className="time">18:00:00</span>
                  </div>
                </div>
                <div className="view-content">
                  <h3 className="course-title">
                    <a href="s">{e.title_course}</a>
                  </h3>
                  <div className="wrap_desc">
                    {e.desc_course.substring(0, 80) + "..."}
                  </div>
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
      })}
    </Fragment>
  );
}

export default ItemCourse;
