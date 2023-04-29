import React from "react";
import { useState } from "react";
import Bookissue from "../../components/BookIssued/bookissue";
import "./book.css";
import axios from "axios";

const Book = () => {
  const [data, setData] = React.useState(null);
  const [gotData, setGotData] = React.useState(false);

  React.useEffect(() => {
    if (!gotData) {
      axios
        .get("http://localhost:5000/books")
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
  const [bookIssued, setBookIsued] = useState(true);

  return (
    <div className="app__padding app__pad">
      <input type="search" className="app__search" placeholder="Search Books" />

      {bookIssued && (
        <div className="app__pad app__book-issued">
          <div className="app__heading ">Books issued</div>
          <div className="app__book-issued_books">
            {/* <Bookissue title={data && data[0].BOOK_NAME} author={data && data[0].ATHR_NAME} price={data && data[0].BOOK_PRICE} issue={data && (data[0].ISU_DATE).substring(0,10)} /> */}
            {data &&
              data.map((book, index) => {
                return (
                  <Bookissue
                    title={book.BOOK_NAME}
                    author={book.ATHR_NAME}
                    price={book.BOOK_PRICE}
                    issue={book.ISU_DATE.substr(0, 10)}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
