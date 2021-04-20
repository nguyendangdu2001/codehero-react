import React from "react";
import ItemCourse from "../../common/components/Course/ItemCourse";
import { useCourses } from "../../common/hooks/useCourse";

function Course() {
  const [courses, stt] = useCourses();
  let rows = [];
  console.log(courses);
  // courses.map((i) => {
  //   rows.push(<ItemCourse />);
  // });
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
