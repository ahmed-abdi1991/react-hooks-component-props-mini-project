import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string,
};

export default About;
