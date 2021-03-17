import React from "react";

export default function ItemForum({ post }) {
  const URL_ASSET = "http://localhost/codehero";
  return (
    <div>
      <div className="col-lg-8">
        <div
          className="item_forum"
          style={{
            display: "flex",
            padding: "10px 0",
            margin: "10px 0",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            background: post.color_cate,
          }}
        >
          <div
            style={{
              background: "url(" + URL_ASSET + "/" + post.avatar + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginLeft: "8px",
            }}
          ></div>
          <div
            style={{
              height: "80px",
              flex: 1,
              marginLeft: "8px",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", fontSize: ".8rem" }}>
              <span
                style={{
                  display: "block",
                  background: "",
                  padding: "0 4px",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                {post.user}
              </span>
              <span style={{ marginLeft: "8px" }}>{post.created_at}</span>
            </div>
            <a
              className="link_forum"
              style={{ display: "block", fontSize: "1.1rem" }}
              href
            />
            {post.title_post}
            <div
              style={{
                alignItems: "flex-end",
                position: "absolute",
                bottom: 0,
              }}
            >
              <span style={{ fontSize: "0.8rem" }}>
                <i className="fas fa-heart icon_heart" />
              </span>
              <span>
                <i
                  style={{ fontSize: "0.8rem" }}
                  className="far fa-comment-dots"
                ></i>
              </span>
              <span>
                <i style={{ fontSize: "0.8rem" }} className="far fa-eye"></i>
              </span>
              <i style={{ fontSize: "0.8rem" }} className="fas fa-user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
