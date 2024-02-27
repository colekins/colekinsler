import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="">
      <div className="row">
        <img
          className="profile"
          alt="profile"
          src="https://i.imgur.com/3GuSFbJ.jpg"
        />
        <div className="col-md-7 intro-box">
          <h1 className="name">Cole Kinsler</h1>
          <p className="intro">
            Hi there, I'm a web developer located in Portland, Maine.
          </p>
          <p className="intro">
            I like working with Javascript, React, Vue, CSS, Sass and Node. I'm
            especially interested in emerging front end frameworks, GraphQL, and
            CSS Grid at the moment.
          </p>
          <div className="actions">
            <a
              href="mailto:hi@colekinsler.com?subject=Hi"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
            </a>
            <a
              href="https://github.com/colekins/"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
