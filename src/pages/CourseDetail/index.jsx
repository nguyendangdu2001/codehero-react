import React from "react";
import { useParams } from "react-router";
import { useCourseDetail } from "../../common/hooks/useCourseDetail";
import { config } from "../../config/api";

const CourseDetail = () => {
  const { id } = useParams();

  const { data } = useCourseDetail(id);
  //   const coin = 0;
  const { coin, total_star, title_course, desc_course, img_course } =
    data || {};

  return (
    <div>
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
											<button class="btn btn-success btn-sm"><i class="fas fa-check"></i> Đã đăng ký</button>
											@else */}
                            <form
                              id="buy_course"
                              method="post"
                              onsubmit="return false"
                            >
                              {/* {{csrf_field()}} */}
                              <input
                                style={{
                                  zIndex: 99999999,
                                  position: "relative",
                                }}
                                id="btn_buy"
                                type="submit"
                                class="user-register btn btn-primary course-register"
                                value="Đăng ký ngay"
                                name=""
                              />
                              <input
                                id="id_course"
                                type="hidden"
                                value="{{$course_detail['id_course']}}"
                                name=""
                              />
                              <span id="rs_buy"></span>
                            </form>
                            {/* @endif */}
                          </div>
                          <div class="main-info">
                            <hr />
                            <h4 class="title-course">Khóa học này bao gồm:</h4>
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
                              {total_star}(3 đánh giá)
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
                            Xem chi tiết
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
                          Bài học
                        </a>
                      </li>
                      <li class="extab">
                        <a href="#course-practice" data-toggle="tab">
                          Bài tập
                        </a>
                      </li>
                      <li class=" extab">
                        <a
                          id="course-objective"
                          href="#2a"
                          data-toggle="tab"
                          aria-expanded="true"
                        >
                          Mục tiêu
                        </a>
                      </li>
                    </ul>
                    {/* @if(isset($bought))
								<div class="container">
									<h3 id="title_course" style="margin-top: 7em"></h3>
									<div class="row">
										<div class="col-lg-9">
											<div style="height: 480px">
												<iframe width="100%" height="480" src="https://www.youtube.com/embed/Vg25AFBl3B8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" id="ytb" allowfullscreen></iframe>
											</div>
										</div>
										<div class="col-lg-3">
											<div style="border: 1px solid black; border-radius: 3px">
												<div class="heading_lesson" style="">Danh sách bài học</div>
												<ul class="list_lesson">
													@foreach($lessons as $key=>$value)
														<li class="item_lesson"><a class="link_lesson" data-title="{{$value->title_lesson}}" href="javascript:void()" class="link_lesson" data-href="{{$value->url_lesson}}">{{$value->title_lesson}}</a></li>
													@endforeach
												</ul>
											</div>
										</div>
									</div>
									<h3>Đánh giá khóa học này?</h3>
									<div style="cursor: pointer;">
										<i class="fa fa-star icon-star" data-index="0" title="Tệ"></i>
										<i class="fa fa-star icon-star" data-index="1" title="Bình thường"></i>
										<i class="fa fa-star icon-star" data-index="2" title="Khá"></i>
										<i class="fa fa-star icon-star" data-index="3" title="Tốt"></i>
										<i class="fa fa-star icon-star" data-index="4" title="Tuyệt vời!"></i>
									</div>
									<div class="cmt_rate hidden">
										<form onsubmit="return false">
											<div class="comment">
												<div class="info_cmt">
													<img class="img_cmt" src="{{asset(Session::get('img'))}}" alt="">
													<h3 class="name_auth">{{Session::get('name')}}</h3>
												</div>
												{{csrf_field()}}
												<input class="input_cmt" placeholder="Nhập để đánh giá" name="cmt" id="rate_input">
											</div>
											<div class="btn_cmt">
												<input class="btn btn-primary" data-id="{{$course_detail['id_course']}}" id="btn_rate" type="submit" value="Đánh giá">
											</div>
										</form>
									</div>
								@endif */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
