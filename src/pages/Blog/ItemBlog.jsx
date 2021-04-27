import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../config/api";

export default function ItemBlog({ item }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="list_blog">
            {item?.map((e, v) => {
              return (
                <div className="row mb-3">
                  <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "180px",
                        padding: "4px 0",
                        backgroundImage:
                          "url(" +
                          config.resourse +
                          "/public" +
                          e.img_blog +
                          ")",
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div>
                      <span
                        //   style="{backgroundColor:value.color_cate}"
                        className="blog_cate"
                      >
                        {e.name}
                      </span>
                      <Link
                        to={`/blog-detail/${e?.id_blog}`}
                        tag="a"
                        className="item_link"
                      >
                        <h3
                          style={{
                            color: "#333",
                            fontWeight: 490,
                            margin: "6px 0",
                          }}
                        >
                          {e.title_blog}
                        </h3>
                      </Link>
                      <span style={{ color: "#333" }} className="item_date">
                        2 Xem
                      </span>
                      <div className="div_conten-blog"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <input type="hidden" id="row_curr" defaultValue={5} name />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              id="see_more"
              style={{ borderRadius: "unset", outline: "none" }}
              className="btn btn-primary "
            >
              Xem thêm
            </button>
          </div>
        </div>
        <div className="col-md-4 col">
          <div className="hide-on-table-and-moblie">
            <img
              src="public/images/banner7.png"
              style={{ width: "16em", marginLeft: "7em" }}
              className="banner_shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
