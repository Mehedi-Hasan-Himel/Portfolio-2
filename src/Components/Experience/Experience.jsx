import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* Frontend Start */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>TailwindCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* Frontend End */}

        {/* Backend Start */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend End */}

        {/* Full Stack Framework / Library Start */}
        <div className="experience__backend">
          <h3>Full Stack Library </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Full Stack Framework / Library End */}

        {/* Programming Language Start */}
        <div className="experience__frontend">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Solidity</h4>
                <small className="text-light">Beginner </small>
              </div>
            </article>
          </div>
        </div>
        {/* Programming Language End */}
      </div>
    </section>
  );
};

export default Experience;
