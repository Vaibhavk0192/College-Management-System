import React from "react";
import "./courseboxC.css";
import { FaArrowRight } from "react-icons/fa";

const CourseboxC = (props) => {
  return (
    <div class="app__courses-box">
      <div class="app__courses-subjects" style={{background:props.color}}>
        <div class="app_logo">{props.icon}</div>
        <div class="app__courses-subject" >
          <p className="app__courses-subject-heading" >{props.title}</p>
        </div>
        <div class="app__courses-box-line"></div>
        <div class="app__coursebox-subjectcode">
          <div class="app__text2">{props.code}</div>
          <div class="APP_arrow_right">
            <FaArrowRight size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseboxC;
