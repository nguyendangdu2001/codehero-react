import React from "react";
import ItemCourse from "../../common/components/Course/ItemCourse";

function Course() {
  let rows = [];
  for (var i = 0; i < 10; i++) {
    rows.push(<ItemCourse />);
  }
  return (
    <div>
      <div className="container mobile-container" style={{ padding: 0 }}>
        <div id="list">
          <section className="list-courses">
            <div className="row">{rows}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Course;
