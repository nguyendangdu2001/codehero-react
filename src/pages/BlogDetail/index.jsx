import React from "react";
import { useParams } from "react-router";
import { useBlogDetail } from "../../common/hooks/useBlogDetail";
import { config } from "../../config/api";

const BlogDetail = () => {
  const { id } = useParams();

  const { data } = useBlogDetail(id);
  const {
    displayname,
    view_blog,
    title_blog,
    content_blog,
    img_blog,
    tag_blog,
  } = data || {};
  return (
    <div>
      <div id="layout-main" class="group">
        <div id="layout-content" class="group">
          <div id="content" class="group">
            <div class="zone zone-content">
              <div class="container">
                <div class="blog-detail">
                  <div class="row">
                    <div class="col col-md-9 col-sm-12 col-12 main-blog">
                      <div class="wrapper">
                        <div class="row author">
                          <div class="col-sm-7 text-left">
                            <span>Tác giả</span>
                            <img
                              class="img_auth"
                              src="{{asset($data->avatar)}}"
                              alt=""
                            />
                            <span class="author-name">
                              <a href="#">{displayname}</a>
                            </span>
                            <span class="time-icon">
                              <i class="fa fa-circle"></i>
                            </span>
                            {/* <span id="create-time" class="time"><?php echo substr($time_up,0,10)?></span> */}
                          </div>
                          <div
                            class="col-sm-5 text-right"
                            style={{ position: "relative", top: 20 }}
                          >
                            <span class="comment-icon">
                              <i class="fa fa-eye"></i>
                            </span>
                            <span class="comment-text total-view">
                              {view_blog}
                            </span>
                            <span class="comment-icon">
                              <i class="fa fa-share-alt"></i>
                            </span>
                            <span class="comment-text">0</span>
                          </div>
                        </div>
                        <div class="row main-content">
                          <div class="col-md-12">
                            <div class="main-image">
                              <img
                                src={`${config.resourse}/public/${img_blog}`}
                                alt="{{$data->title_blog}}"
                              />
                            </div>
                            <div class="blog-content">
                              <h1>{title_blog}</h1>
                              <div class="content">
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: content_blog,
                                  }}
                                ></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row sharing">
                          <div class="col-sm-6 text-left tag-lists">
                            {tag_blog?.split(";")?.map((v) => (
                              <a href="#" class="tag-list" title={v}>
                                {v}
                              </a>
                            ))}
                          </div>
                          <div class="col-sm-6 text-right socials-share">
                            <a
                              class="bg-facebook"
                              href="https://www.facebook.com/sharer/sharer.php?u=<?php echo($url)?>"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-facebook-f"></i> Share
                            </a>
                            <a
                              class="bg-twitter"
                              href="https://twitter.com/share?text=<?php echo urlencode($data->title_blog); ?>&url=<?php echo($url)?>"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-twitter"></i> Tweet
                            </a>
                            <a
                              class="bg-google-plus"
                              href="https://plus.google.com/share?url=<?php echo($url)?>"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fas fa-plus"></i> Plus
                            </a>
                            <a
                              class="bg-pinterest"
                              href=""
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-pinterest-p"></i> Pin
                            </a>
                            <a
                              class="bg-email"
                              href=""
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fas fa-envelope"></i> Gmail
                            </a>
                            <a
                              class="bg-messenger"
                              href=""
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-facebook-messenger"></i>{" "}
                              Messenger
                            </a>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="comment-area">
                              <div class="user-rating">
                                <div class="user-action-buttons">
                                  <span class="likeButton">
                                    <img
                                      src="../../../../img/Like.svg"
                                      class="up"
                                      id="img_1847944"
                                      alt=""
                                    />
                                    <span
                                      id="countVoteLike_1847945"
                                      class="count-vote"
                                    >
                                      {" "}
                                      1
                                    </span>
                                  </span>
                                  <span class="footer-button reply-button">
                                    <i class="fa fa-share-alt"></i>
                                    <span
                                      id="countVoteShare_1847945"
                                      class="count-vote"
                                    >
                                      0
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div id="container-comment" class="loaded-all">
                                <div class="total-comments-section">
                                  <span id="total-comments">0</span> Bình luận
                                </div>
                                <div class="top-level-comment-input"></div>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="related-items">
                        <b class="related">Bài viết liên quan</b>
                      </div>
                    </div>

                    <div class="col col-md-3 col-sm-12 col-12 sidebar">
                      <div class="block author-info">
                        <h3>Tác giả</h3>
                        <div class="author">
                          <div class="avatar">
                            <img
                              id="owner-user-avatar"
                              class="user-avatar"
                              src="{{asset($data->avatar)}}"
                              alt=""
                            />
                          </div>
                          <div class="user-name">
                            <a
                              id="owner"
                              href="#"
                              title="{{$data->displayname}}"
                            >
                              {displayname}
                            </a>
                          </div>
                          <p id="company-owner"> - </p>
                          <div>
                            <a href="#" id="total-post" class="total-post">
                              17 bài viết
                            </a>{" "}
                            |<span id="total-follow">17</span>
                            <span class="follower-text">người theo dõi</span>
                          </div>
                          <div>
                            <button
                              id="follow"
                              value="0"
                              type="button"
                              class="btn btn-info"
                            >
                              <i class="fa fa-wifi"></i> Theo dõi
                            </button>
                          </div>
                          <ul id="achievement-owner">
                            <li style={{ textAlign: "left" }}>
                              <i
                                class="fa fa-check-circle"
                                style={{ position: "relative" }}
                              ></i>
                              <span>Best Dev In The World</span>
                            </li>
                          </ul>
                          <span id="more-achievement" class="hide">
                            Xem thêm
                          </span>
                          <div class="social-network">
                            <a id="facebook" target="_blank" href="#" class="">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a id="twitter" class="not-allowed">
                              <i class="fab fa-twitter-square"></i>
                            </a>
                            <a id="linkedIn" class="not-allowed">
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="block related-owner">
                        <h3>Bài viết cùng tác giả</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
