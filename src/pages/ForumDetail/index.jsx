import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useForumComments } from "../../common/hooks/useForumComments";
import useForumDetail from "../../common/hooks/useForumDetail";
import { config } from "../../config/api";
import CommentForm from "./CommentForm";

const ForumDetail = () => {
  const { id } = useParams();
  const { data } = useForumDetail(id);
  const auth = useSelector((state) => state?.userStatus?.auth);
  const { data: comments } = useForumComments(id);
  const {
    name_cate,
    title_post,
    content_post,
    avatar,
    cover_img,
    id: forum_id,
  } = data || {};
  return (
    <div>
      <div class="modal_popup_cmt hidden">
        <div class="layer"></div>
        <div class="popup_edit">
          <form class="form_edit">
            <div class="heading_edit">
              <h3>Chỉnh sửa bình luận</h3>
              <i class="fas fa-times"></i>
            </div>
            <div class="text_edit">
              <input type="text" name="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 4,
              }}
            >
              <input
                class="btn btn-success text-right"
                type="submit"
                value="Sửa"
                name=""
              />
            </div>
          </form>
        </div>
      </div>
      <div style={{ padding: 0 }} class="container">
        <input type="hidden" id="title_web" value={title_post} name="" />
        <div class="row">
          <div class="col-12">
            <div
              style={{
                backgroundImage: `url(${config.resourse}${cover_img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 200,
                position: "relative",
              }}
              id="dfdsf"
            >
              <div
                style={{
                  position: "absolute",
                  background: "rgba(255,255,255,.4)",
                  width: "100%",
                  padding: "2px 8px",
                }}
              >
                <b>
                  <a href="#">{name_cate}</a>
                </b>{" "}
                | <a href="#">Hoạt động</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul
              class="list_redicrect"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <li>
                <a href="{{URL::to('blog')}}">Forum</a>
              </li>
              <li>
                <i class="fas fa-angle-right"></i>
                <a href="{{URL::to('blog/thread/'.$data->id_cate)}}">
                  {name_cate}
                </a>{" "}
                <i class="fas fa-angle-right"></i>
              </li>
              <li>
                <a style={{ color: "#333" }} href="#">
                  {" "}
                  {title_post}
                </a>
              </li>
            </ul>
            <br />
          </div>

          <div class="col-lg-3 col-md-12 col-sm-12 info_post_mobile p-0">
            <div
              class="forum_info_auth info_user_post"
              style={{
                backgroundImage: `url(${config.resourse}${avatar})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            ></div>
            <div class="div_level_user">
              <form method="POST" class="form_user">
                {/* {{ csrf_field()}} */}
                {/* <a class="link_user" style="font-weight: 500" status="false" username="{{$data->id}}"
                        href="{{URL::to('profile/'.$data->id)}}">{{$data->user}}

                        <div class="user_name"></div>
                    </a> */}
              </form>
              {/* {!!$lv!!} */}
              {/* <span class="getTime hide-on-table hidden-on-pc "><i class="far fa-clock"></i>
                    {{ \Carbon\Carbon::parse($data->time_created)->diffForHumans() }}</span> */}
            </div>
          </div>
          <div class="col-lg-9 p-0">
            <div
              style={{
                background: "#e2ecf0",
                border: "5px solid #fff",
                boxShadow: "1px 2px 3px gray",
                borderRadius: 16,
                padding: "4px 8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fonSize: "0.8rem",
                }}
              >
                {/* {{-- <span class="getTime">{{$data->created_at->diffForHumans()}}</span> --}} */}
                {/* <span
                        class="getTime hide-on-mobile">{{ \Carbon\Carbon::parse($data->time_created)->diffForHumans() }}</span> */}
              </div>
              <div class="cmt_forum">
                <h3 style={{ textTransform: "uppercase" }}>{title_post}</h3>
                <hr />
                <div
                  class="content_post"
                  dangerouslySetInnerHTML={{ __html: content_post }}
                ></div>
              </div>
              <div>
                <br />
                <form onsubmit="return false" action="post">
                  {/* {{csrf_field()}} */}
                  {/* @if(count($user_react))
                        <button data-id="{{$data->id_post}}" style="line-height: 1;width: 100px"
                            class="btn btn-primary btn-sm btn_react"><i style="color: red" class="fas fa-heart"></i> Đã
                            thích</button>
                        @else
                        <button data-id="{{$data->id_post}}" style="line-height: 1;width: 100px"
                            class="btn btn-info btn-sm btn_react">Thích</button>
                        @endif */}
                  {/* <span>{!!$allreact!!}</span> */}
                </form>
              </div>
              <div
                class="socials-share"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: 0,
                }}
              >
                <a
                  class="bg-facebook"
                  href="https://www.facebook.com/sharer/sharer.php?u="
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i> Share
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/* {!!$allcmt->links()!!} */}
        </div>
        <br />
        {comments?.map((comment) => (
          <div className="row mb-3">
            <div className="col-lg-2 col-md-12 col-sm-12 p-0">
              <div className="div_info_post info_post_mobile">
                <div
                  className="forum_info_auth info_user_cmt"
                  style={{
                    background: `url(${config.resourse}${comment?.avatar})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                  }}
                ></div>
                <div className="div_level_user">
                  <a
                    className="link_user"
                    style={{ fontWeight: 500, marginRight: "4px" }}
                    status="false"
                    username="{{$value->id}}"
                    href="{{URL::to('profile/'.$value->id)}}"
                  >
                    {comment?.displayname}
                    <div className="user_name"></div>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="{{'comment_'.$value->id_cmt}}"
              style={{
                background: "#F6EDD2",
                boxShadow: "1px 2px 3px #ccc",
                borderRadius: "4px",
              }}
              className="col-lg-10 alert-info p-2"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "0.8rem",
                }}
              >
                #{comment?.id_cmt}
                <span className="getTime ml-1">{comment?.created_at}</span>
              </div>
              <div id="cmt_forum_{{$value->id_cmt}}" className="cmt_forum">
                {comment?.content_cmt}
              </div>
              <div>
                --
                <span>
                  <i className="fas fa-signature" />
                  {comment?.sign}
                </span>
                <br />
                <button
                  style={{ lineHeight: 1, width: "80px" }}
                  className="btn btn-info btn-sm"
                >
                  Like!
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {/* @if(Session::get('id')==$value-&gt;id_auth ||
                Session::get('id')==$data-&gt;id)
                <i
                  title="Xóa"
                  style={{ margin: "0 8px" }}
                  data-id="{{$value->id_cmt}}"
                  className="far fa-trash-alt del_cmt"
                />
                <i
                  title="Sửa"
                  style={{ margin: "0 8px" }}
                  data-id="{{$value->id_cmt}}"
                  className="fas fa-edit edit_cmt"
                />
                @endif */}
                <i title="Báo cáo" className="fas fa-exclamation-triangle" />
                <i
                  data-id-0="{{$value->id_cmt}}"
                  title="Trả lời"
                  data-id="{{$value->id_cmt}}"
                  data-name="{{$value->user}}"
                  style={{ margin: "0 8px" }}
                  className="fas fa-reply btn_reply"
                />
              </div>
            </div>
          </div>
        ))}
        {auth && <CommentForm id_forum={forum_id} />}
      </div>
    </div>
  );
};

export default ForumDetail;
