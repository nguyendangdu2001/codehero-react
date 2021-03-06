import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useBuyCourse from "../../common/hooks/useBuyCourse";
import { useCourseDetail } from "../../common/hooks/useCourseDetail";
import { config } from "../../config/api";
import ListLesson from "./ListLesson";

const CourseDetail = () => {
  const { id } = useParams();
  const auth = useSelector((state) => state?.userStatus?.auth);
  const { mutate: buyCourse } = useBuyCourse();
  const { data } = useCourseDetail(id);
  //   const coin = 0;
  const {
    coin,
    total_star,
    title_course,
    desc_course,
    img_course,
    id_course: courseId,
  } = data?.[0] || {};
  const buyed = data?.[2];
  return (
    <div className="" style={{ marginTop: 60 }}>
      <div class="layout hidden">
        <div class="comment_rate">
          <div class="effect hidden">
            <div class="loading"></div>
            <div class="loading"></div>
            <div class="loading"></div>
            <div class="loading"></div>
          </div>
          <ul class="list_rate hidden"></ul>
        </div>
      </div>
      <main id="layout-main" class="group">
        <div id="layout-content" class="group">
          <div id="content" class="group">
            <div class="zone zone-content">
              <div class="course-head">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="info-course">
                        <img
                          src={`${config.resourse}/public/${img_course}`}
                          alt=""
                        />
                        <div id="course-progress">
                          <div class="container-circle">
                            <div
                              id="activeBorder"
                              class="active-border"
                              style={{
                                backgroundImage:
                                  "linear-gradient(90deg, transparent 50%, #DBDBDB 50%),linear-gradient(90deg, #DBDBDB 50%, transparent 50%)",
                              }}
                            >
                              <div id="circle" class="circles">
                                <span class="prec" id="prec" data-content="">
                                  0%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="info-course-main">
                          <div class="fee">
                            <span>
                              {coin}
                              <i
                                style={{ color: "#ff8c00", marginLeft: 5 }}
                                class="fas fa-coins"
                              ></i>
                            </span>
                          </div>
                          <div class="register" id="button-register">
                            {/* @if(isset($bought))
											<button class="btn btn-success btn-sm"><i class="fas fa-check"></i> ???? ????ng k??</button>
											@else */}
                            <div>
                              {/* {{csrf_field()}} */}

                              <input
                                style={{
                                  zIndex: 99999999,
                                  position: "relative",
                                }}
                                id="btn_buy"
                                type="submit"
                                class="user-register btn btn-primary course-register"
                                value={
                                  auth && data?.[2] ? "???? mua" : "Mua ngay"
                                }
                                name=""
                                onClick={() => {
                                  if (auth || !data?.[2]) buyCourse(courseId);
                                }}
                              />
                              <input
                                id="id_course"
                                type="hidden"
                                value="{{$course_detail['id_course']}}"
                                name=""
                              />
                              <span id="rs_buy"></span>
                            </div>
                            {/* @endif */}
                          </div>
                          <div class="main-info">
                            <hr />
                            <h4 class="title-course">Kh??a h???c n??y bao g???m:</h4>
                            <div class="item">
                              <i class="fas fa-clock"></i>
                              <span id="time-es">26:00:00</span>
                            </div>
                            <div class="item">
                              <i class="fa fa-laptop"></i>
                              <span id="total-task">68</span>
                            </div>
                            <div class="item">
                              <i class="fa fa-user-alt"></i>
                              <div id="total-enrolled" class="user-enrolled">
                                <span>4255</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="detail-course">
                        <h2 class="title">
                          <a
                            title="{{$course_detail['title_course']}}"
                            href="#sd"
                          >
                            {title_course}
                          </a>
                        </h2>
                        {/* <?php
                                        $all_star='';
                                        for ($i=1; $i<=5; $i++) { 
                                            if ($i<=(int)$total_star) {
                                                $all_star.='<i style="color:yellow" class="fa fa-star"></i>';
                                            }else{
                                                $all_star.='<i style="color:white" class="fa fa-star"></i>';
                                            }
                                        }
                                        ?>                                     */}
                        <div id="container-rate" class="rate">
                          <div id="container-rate" class="rate">
                            {/* {!!$all_star!!} */}
                            <span class="text-rate">
                              {total_star}(3 ????nh gi??)
                            </span>
                          </div>
                        </div>
                        <form style={{ marginTop: 4 }}>
                          {/* {{csrf_field()}} */}
                          <a
                            class="detail_rate"
                            data-id="{{$course_detail['id_course']}}"
                            href="#a"
                            style={{ color: "#FFFFFF" }}
                          >
                            Xem chi ti???t
                          </a>
                        </form>
                        <div class="description" id="course-description">
                          <p title="">{desc_course}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="course-detail" class="container">
                <div class="container">
                  <div class="tmp"></div>
                  <div id="exTab1" class="">
                    <ul class="nav nav-pills col-sm-12">
                      <li class="active extab course-lesson">
                        <a href="#course-lesson" data-toggle="tab">
                          B??i h???c
                        </a>
                      </li>
                      <li class="extab">
                        <a href="#course-practice" data-toggle="tab">
                          B??i t???p
                        </a>
                      </li>
                      <li class=" extab">
                        <a
                          id="course-objective"
                          href="#2a"
                          data-toggle="tab"
                          aria-expanded="true"
                        >
                          M???c ti??u
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {data?.[2] && <ListLesson lesson={data?.[1]} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
