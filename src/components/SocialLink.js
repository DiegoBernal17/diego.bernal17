import React from "react";

const SociaLink = props => (
  <a
    href={props.url}
    className="ml-4"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={`mdi mdi-${props.icon}`}> </i>
    {props.title}
  </a>
);
export default SociaLink;
