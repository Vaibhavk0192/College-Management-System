import React from "react";
import "./bookissue.css";

const Bookissue = (props) => {

  return (
    <div className="app__bookissue">
      <div className="app__bookissue-box">
        <div className="app__bookissue-book_name"> {props.title}</div>
        <div className="app__bookissue-book_author">by {props.author}</div>
        <div className="app__bookissue-book_publication">
          Book Price: {props.price}
        </div>
        <div className="app__bookissue-book_issue">
          issued on: <span>{props.issue}</span>
        </div>
        <div className="app__bookissue-book_issue">
          due date: <span>{props.issue}</span>
        </div>
      </div>
    </div>
  );
};

export default Bookissue;
