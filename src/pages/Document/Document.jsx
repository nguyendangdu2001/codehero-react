import React, { useState } from "react";
import { useDocuments } from "../../common/hooks/useDocuments";
import { useViewDoc } from "../../common/hooks/useViewDoc";
import ItemDocument from "./ItemDocument";

function Document(props) {
  const [data, q] = useDocuments();
  const [id_doc, setid_doc] = useState(1);
  const [docs, q2] = useViewDoc(id_doc);
  console.log(docs);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="cate_document">
              <h3>Danh mục tài liệu</h3>
              <ul className="list_document">
                {data?.map((e, i) => {
                  return (
                    <li
                      onClick={() => setid_doc(e.id_cate)}
                      className={
                        "item_document " +
                        (id_doc == e.id_cate ? "border_active" : "")
                      }
                    >
                      {e.name_cate}
                    </li>
                  );
                })}
              </ul>
            </div>
            <br />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div id="data_document" className="row">
              {docs?.map((e, i) => {
                return <ItemDocument key={e.id_doc} doc={e} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
