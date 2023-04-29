import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import '../../'
import profile from "../../assets/images/user.png"
const navbar = () => {
  return (
    <div>
      <div className="app__navbar">
            <div className="app__college-name">College</div>
            <div className="app__navbar-items">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="book">Book</Link></li>
                    <li><Link to="courses">Courses</Link></li>
                    <li><Link to="/info">Personal Info</Link></li>
                </ul>
            </div>
            <div className="app__navbar-logo">
                <img src={profile} alt="/"></img>
                </div>
        </div>
    </div>
  )
}

export default navbar
