import React from "react";
import CardProjects from "./Card-Projects";

const DashboardProjects = props => (
  <div className="d-flex justify-content-center flex-wrap mt-3">
    {props.projects.map(project => (
      <CardProjects key={project.id} {...project} />
    ))}
  </div>
);

export default DashboardProjects;
