import React from "react";
import "./styles/Home.css";

const Home = props => (
  <div className="container Home">
    <h3 className="font-weight-light my-3">Diego P. Bernal</h3>
    <figure className="Home__avatar rounded-circle" />
    <h6 className="card-subtitle mb-4 text-muted font-weight-light">
      Fullstack Developer
    </h6>
    <div className="mb-2">
      <a href="https://twitter.com/guitek123" className="ml-4" about="_blank">
        <i className="mdi mdi-twitter"> </i>
        Twitter
      </a>
      <a
        href="https://github.com/DiegoBernal17"
        className="ml-4"
        about="_blank"
        rel="noopener noreferrer"
      >
        <i className="mdi mdi-github-box"> </i>
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/diegopbernal/"
        className="ml-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="mdi mdi-linkedin"> </i>
        LinkedIn
      </a>
      <a
        href="https://platzi.com/@diego-p-bernal/"
        className="ml-4"
        about="_blank"
        rel="noopener noreferrer"
      >
        <i className="mdi mdi-book"> </i>
        Platzi
      </a>
    </div>
    <div className="font-weight-light mb-2">
      <p>Hello, I'm Diego, I'm 23 and this is me:</p>
    </div>
    <div className="card mb-3">
      <div className="card-body text-left">
        <b>Scholarship: </b> System Engineer
        <br />
        <b>Location: </b> Coahuila, México
        <br />
        <b>English: </b> Intermediate
      </div>
    </div>
    <a href="mailto:diego.bernal17@gmail.com">
      <i className="mdi mdi-email"> Send me an email</i>
    </a>
  </div>
);

export default Home;
