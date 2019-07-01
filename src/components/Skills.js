import React from "react";

const Skills = () => (
  <div>
    <h4>Skills</h4>
    <div className="row text-left">
      <div className="col-md-6 mb-2">
        <h5 className="text-center">Soft</h5>
        <ul className="list-group">
          <li className="list-group-item">Teamwork</li>
          <li className="list-group-item">Time management</li>
          <li className="list-group-item">Problem-solving</li>
          <li className="list-group-item">Autodidact</li>
          <li className="list-group-item">Basic knowledge of Scrum</li>
        </ul>
      </div>
      <div className="col-md-6 mb-3">
        <h5 className="text-center">Hard</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-secondary">HTML</span> (And posible to
            learn preprocessors)
          </li>
          <li className="list-group-item">
            <span className="badge badge-success">CSS</span> Responsive Design,
            CSS Frameworks, SASS
          </li>
          <li className="list-group-item">
            <span className="badge badge-warning">Javascript</span> VanillaJS,
            React, NodeJS
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger">PHP</span> (And basic knowledge
            of Laravel)
          </li>
          <li className="list-group-item">
            Java, Mysql, Mongo, Linux, AWS ...
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
