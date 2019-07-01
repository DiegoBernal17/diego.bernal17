import React from "react";
import "./styles/Home.css";
import Skills from "../components/Skills";
import SocialLink from "../components/SocialLink";

const Home = props => (
  <div className="container Home">
    <h3 className="font-weight-light my-3">Diego P. Bernal</h3>
    <figure className="Home__avatar rounded-circle" />
    <h6 className="card-subtitle mb-4 text-muted font-weight-light">
      Fullstack Developer
    </h6>
    <div className="mb-2">
      <SocialLink
        url="https://twitter.com/guitek123"
        icon="twitter"
        title="Twitter"
      />
      <SocialLink
        url="https://github.com/DiegoBernal17"
        icon="github-box"
        title="Github"
      />
      <SocialLink
        url="https://www.linkedin.com/in/diegopbernal/"
        icon="linkedin"
        title="Linkedin"
      />
      <SocialLink
        url="https://platzi.com/@diego-p-bernal/"
        icon="book"
        title="Platzi"
      />
    </div>
    <div className="font-weight-light mb-2">
      <p>Hello, welcome to my website. I'm Diego, I'm 23 and this is me:</p>
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

    <Skills />

    <div className="row">
      <SocialLink
        url="mailto:diego.bernal17@gmail.com"
        icon="email"
        title="Send me an email"
      />
      <SocialLink url="CV.pdf" icon="file-document-outline" title="View CV" />
    </div>
  </div>
);

export default Home;
