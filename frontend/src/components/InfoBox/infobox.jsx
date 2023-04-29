import React from "react";
import "./infobox.css";
import { FaArrowRight } from "react-icons/fa";

const Coursebox = (props) => {
  return (
    <div class="app__infobox-box">
      <div class="app__infobox-subjects" style={{ background: props.color }}>
        <div class="app__infobox-subject">
          <p className="app__infobox-subject-heading">{props.title}</p>
        </div>
        <div class="app__infoboxbox-subjectcode">
          <div class="app__text">{props.answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Coursebox;
