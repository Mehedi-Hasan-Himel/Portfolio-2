import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,

      image: IMG1,

      title: "Charts templates & infographics in Figma",
      github: "https://github.com/Mehedi-Hasan-Himel",

      demo: "https://dribbble.com/shots/16580766-Orion-Ul-kit-Charts-templates-infographics-in-Figma",
    },
    {
      id: 2,

      image: IMG2,

      title: "Charts templates & infographics in Figma",
      github: "https://github.com/Mehedi-Hasan-Himel",

      demo: "https://dribbble.com/shots/16580766-Orion-Ul-kit-Charts-templates-infographics-in-Figma",
    },
    {
      id: 3,

      image: IMG3,

      title: "Figma dashboard UI kit for data design web apps",
      github: "https://github.com/Mehedi-Hasan-Himel",

      demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-Ul-kit-for-data-design-web-apps",
    },
    {
      id: 4,

      image: IMG4,

      title: "Maintaining tasks and tracking progress",

      github: "https://github.com/Mehedi-Hasan-Himel",

      demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
    },
    {
      id: 5,

      image: IMG5,

      title: "Charts templates & infographics in Figma",

      github: "https://github.com/Mehedi-Hasan-Himel",

      demo: "https://dribbble.com/shots/16541289-Orion-Ul-kit-Charts-templates-infographics-in-Figma",
    },
    {
      id: 6,

      image: IMG6,

      title: "Charts templates & infographics in Figma",

      github: "https://github.com/Mehedi-Hasan-Himel",

      demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Article 1 start */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Mehedi-Hasan-Himel"
              target="_black"
            >
              Github
            </a>
            <a
              className="btn btn-primary"
              href="https://dribbble.com/Alien_pixels"
              target="_black"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Article 1 End */}

        {/* Article 2 start */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Mehedi-Hasan-Himel"
              target="_black"
            >
              Github
            </a>
            <a
              className="btn btn-primary"
              href="https://dribbble.com/Alien_pixels"
              target="_black"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Article 2 End */}

        {/* Article 3 start */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Mehedi-Hasan-Himel"
              target="_black"
            >
              Github
            </a>
            <a
              className="btn btn-primary"
              href="https://dribbble.com/Alien_pixels"
              target="_black"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Article 3 End */}

        {/* Article 4 start */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Mehedi-Hasan-Himel"
              target="_black"
            >
              Github
            </a>
            <a
              className="btn btn-primary"
              href="https://dribbble.com/Alien_pixels"
              target="_black"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Article 4 End */}

        {/* Article 5 start */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Mehedi-Hasan-Himel"
              target="_black"
            >
              Github
            </a>
            <a
              className="btn btn-primary"
              href="https://dribbble.com/Alien_pixels"
              target="_black"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Article 5 End */}

        {/* Article 6 start */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Mehedi-Hasan-Himel"
              target="_black"
            >
              Github
            </a>
            <a
              className="btn btn-primary"
              href="https://dribbble.com/Alien_pixels"
              target="_black"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Article 6 End */}
      </div>
    </section>
  );
};

export default Portfolio;
