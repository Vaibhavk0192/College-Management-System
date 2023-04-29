import React from "react";
import "./coursebox.css";
import { FaArrowRight } from "react-icons/fa";

const Coursebox = (props) => {
  return (
    <div class="app__course-box">
      <div class="app__course-subjects" style={{background:props.color}}>
        <div class="app_logo">{props.icon}</div>
        <div class="app__course-subject" >
          <p className="app__course-subject-heading" >{props.title}</p>
        </div>
        <div class="app__course-box-line"></div>
        <div class="app__coursebox-subjectcode">
          <div class="app__text">{props.code}</div>
          <div class="APP_arrow_right">
            <FaArrowRight size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursebox;
