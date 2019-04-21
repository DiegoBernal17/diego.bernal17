import React from "react";

const CardProjects = props => (
  <div className="card mx-3 my-4 px-0" style={{ width: "20rem" }}>
    <img
      className="img-card-projects"
      src={"/assets/" + props.language + ".svg"}
      alt="img"
    />
    <div className="card-body">
      <h5 className="card-title mt-4">{props.name}</h5>
      <span className="mb-2 badge badge-secondary">
        {props.updated_at.slice(0, 10)}
      </span>
      <p className="card-text">{props.description || "No description."}</p>
    </div>
    <div className="card-footer text-center">
      {props.homepage && (
        <a
          href={props.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Site
        </a>
      )}
      <a
        href={props.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        Source code
      </a>
    </div>
  </div>
);

export default CardProjects;
