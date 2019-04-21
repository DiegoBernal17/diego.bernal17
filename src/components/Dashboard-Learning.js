import React from "react";
import CardCourse from "./Card-Course";

const DashboardLearning = props => (
  <div className="d-flex justify-content-center flex-wrap mt-3">
    {props.courses.map(course => (
      <CardCourse key={course.id} {...course} golden={props.golden} />
    ))}
  </div>
);

export default DashboardLearning;
