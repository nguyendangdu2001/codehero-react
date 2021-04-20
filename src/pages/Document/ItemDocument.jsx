import React from "react";

export default function ItemDocument(props) {
  const { name_doc, desc_doc } = props.doc;
  return (
    <div className="col-lg-4 col-md-6 col-6 col-sm-6">
      <div className="item_doc p-3">
        <div className="file_name pb-0">
          <i
            style={{
              fontSize: "4em",
              color: "",
            }}
            className="fas fa-file-"
          />
          <h3>{name_doc}</h3>
        </div>
        <p>{desc_doc.substring(1, 80) + "..."}</p>
        <div className="info_doc">
          <a className="view_doc btn_hover" href="#">
            Xem chi tiết <i className="fas fa-chevron-right btn_doc" />
            <input type="hidden" />
          </a>
          <a className="btn_hover" href="#">
            Tải xuống <i className="fas fa-chevron-down btn_doc" />
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}
