import React from "react";
import { useState } from "react";
import "./course.css";
import CourseboxC from "../../components/CourseBox/courseboxC";
import { BsFillDatabaseFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { FaRobot, FaSadCry } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { TbMathIntegralX } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { GiMaterialsScience } from "react-icons/gi";
import { TbMathEqualLower } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import axios from "axios";
const Course = () => {

  const [courseData, setCourseData] = React.useState(null);
  const [gotData, setGotData] = React.useState(false);
  const colors = React.useState([
    "#E2D3FF",
    "#FDE0AA",
    "#FF9BB2",
    "#CCF0BF",
    "#BBE4F4",
    "#FEB67B",
  ]);
  const [icons] = React.useState([
    <FaRobot size={50} />,
    <TbBrandCpp size={50} />,
    <TbMathEqualLower size={50} />,
    <TbMathIntegralX size={50} />,
    <GiMaterialsScience size={50} />,
    <SlChemistry size={50} />,
  ]);

  React.useEffect(() => {
    if (!gotData) {
      axios
        .get("http://localhost:5000/course")
        .then((response) => {
          setCourseData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setGotData(true);
        });
    }
  }, [courseData]);

  return (
    <div className="app__padding app__course-box">
      <div className="app__heading app__course-course app__pad">Courses Enrolled</div>
      <div className="app__course-box_list">
        {courseData &&
          courseData.map((course, index) => {
            return (
            
              <CourseboxC
                size={20}
                title={course.CR_NAME}
                code={course.CR_CODE}
                color={colors[0][index]}
                key={index}
                icon={icons[index]}
              />
      
            );
          })}
      </div>
    </div>
  );
};

export default Course;
