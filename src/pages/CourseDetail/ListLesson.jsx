import React from "react";

const ListLesson = ({ lesson }) => {
  return (
    <div>
      <div className="container">
        <h3 id="title_course" style={{ marginTop: "7em" }} />
        <div className="row">
          <div className="col-lg-9">
            <div style={{ height: "480px" }}>
              <iframe
                width="100%"
                height={480}
                src="https://www.youtube.com/embed/Vg25AFBl3B8"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                id="ytb"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div style={{ border: "1px solid black", borderRadius: "3px" }}>
              <div className="heading_lesson" style={{}}>
                Danh sách bài học
              </div>
              <ul className="list_lesson">
                {lesson?.map((v) => (
                  <li className="item_lesson">
                    <a className="link_lesson">{v?.title_lesson}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <h3>Đánh giá khóa học này?</h3>
        <div style={{ cursor: "pointer" }}>
          <i className="fa fa-star icon-star" data-index={0} title="Tệ" />
          <i
            className="fa fa-star icon-star"
            data-index={1}
            title="Bình thường"
          />
          <i className="fa fa-star icon-star" data-index={2} title="Khá" />
          <i className="fa fa-star icon-star" data-index={3} title="Tốt" />
          <i
            className="fa fa-star icon-star"
            data-index={4}
            title="Tuyệt vời!"
          />
        </div>
        <div className="cmt_rate hidden">
          <form onsubmit="return false">
            <div className="comment">
              <div className="info_cmt">
                <img
                  className="img_cmt"
                  src="{{asset(Session::get('img'))}}"
                  alt=""
                />
                <h3 className="name_auth">
                  {/* {"{"}
                  {"{"}Session::get('name'){"}"}
                  {"}"} */}
                </h3>
              </div>

              <input
                className="input_cmt"
                placeholder="Nhập để đánh giá"
                name="cmt"
                id="rate_input"
              />
            </div>
            <div className="btn_cmt">
              <input
                className="btn btn-primary"
                data-id="{{$course_detail['id_course']}}"
                id="btn_rate"
                type="submit"
                defaultValue="Đánh giá"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListLesson;
