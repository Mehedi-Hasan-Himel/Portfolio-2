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
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>SASS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>BootStrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>TailwindCSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>ReactJS</h4>
              <small className="text-light">Experienced</small>
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
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>ExpressJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
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
              <h4>NextJS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>Redux</h4>
              <small className="text-light">Intermediate</small>
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
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill></BsPatchCheckFill>
              <h4>TypeScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* Programming Language End */}
      </div>
    </section>
  );
};

export default Experience;
