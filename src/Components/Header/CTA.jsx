import React from "react";
import CV from "../../assets/cv.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} title="Download MY CV" download className="btn">
        Download CV
      </a>
      <div className="btn btn-primary">
        Let's Talk
      </div>
    </div>
  );
};

export default CTA;
