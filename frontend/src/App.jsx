import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./containers/Home/home";
import Info from "./containers/info/info";
import Course from "./containers/Course/course";
import Book from "./containers/Books/book";


function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="book" element={<Book />} />
            <Route path="courses" element={<Course />} />
            <Route path="info" element={<Info />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
