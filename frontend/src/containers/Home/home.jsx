import React from "react";
import { useState } from "react";
import "./home.css";
import Coursebox from "../../components/CourseBox/coursebox";
import { BsFillDatabaseFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { FaRobot, FaSadCry } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { TbMathIntegralX } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { GiMaterialsScience } from "react-icons/gi";
import { TbMathEqualLower } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";

import Bookissue from "../../components/BookIssued/bookissue";
import axios from "axios";

const Home = () => {

  const [basicData, setBasicData] = React.useState(null);
  const [courseData, setCourseData] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [gotData, setGotData] = React.useState(false);
  const colors=React.useState(["#E2D3FF","#FDE0AA","#FF9BB2","#CCF0BF","#BBE4F4","#FEB67B"]);
  const [icons]=React.useState([<FaRobot size={30}/>,<TbBrandCpp size={30} />,<TbMathEqualLower size={30}/>,< TbMathIntegralX size={30}/>,<GiMaterialsScience size={30}/>,<SlChemistry size={30} /> ]);

  React.useEffect(() => {
    if (!gotData) {
      axios.get("http://localhost:5000/books")
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setGotData(true);
        });
    }
  }, [gotData]);
  React.useEffect(() => {
    if (!gotData) {
      axios.get("http://localhost:5000/customer")
        .then((response) => {
          setBasicData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setGotData(true);
        });
    }
  }, [basicData]);


  React.useEffect(() => {
    if (!gotData) {
      axios.get("http://localhost:5000/course")
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


  const [bookIssued, setBookIsued] = useState(true);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = new Date().getFullYear();
  const month = monthNames[new Date().getUTCMonth().toString()];

  return (
    <div className="app__padding">
      <div className="app__home-welcome app__pad">
        <div className="app__home-welcome_heading">
          <h1>Welcome</h1>
        </div>
        <div className="app__home-welcome_name">{basicData && basicData[0].STU_NAME}</div>
      </div>

      <div className="app__date app__pad">
        <p className="app__p">{month}</p>
        <p className="app__p">{year}</p>
      </div>

      <div className="app__heading app__home-course app__pad">Courses</div>
      <div className="app__home-box_list">
        {courseData && courseData.map((course,index)=>{
          return (<Coursebox title={course.CR_NAME} code={course.CR_CODE} color={colors[0][index]} key={index} icon={icons[index]} />)
        })}
      </div>
      {bookIssued && (
        <div className="app__pad app__book-issued">
          <div className="app__heading ">Books issued</div>
          <div className="app__book-issued_books">
          {console.log(data)} 
          {
          data &&
              data.map((book, index) => {
                return (
                  <Bookissue
                    title={book.BOOK_NAME}
                    author={book.ATHR_NAME}
                    price={book.BOOK_PRICE}
                    issue={book.ISU_DATE.substr(0, 10)}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
