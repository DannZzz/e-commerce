import { Button } from "antd"
import React from "react"
import { IoAddCircleOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

import { useAppSelector } from "../../app/hooks"
import { selectAuth } from "../../features/auth/auth"
import "./Header.scss"

const Header = () => {
  const auth = useAppSelector(selectAuth)
  const navigate = useNavigate()

  return (
    <div className="main-header">
      <div className="header-element home-icon">
        <span className="header-element-content">S</span>
      </div>
      <div className="header-element">
        <div className="header-element-content">About</div>
      </div>
      <div className="header-element">
        <span
          className="header-element-content"
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </span>
      </div>
      <div className="header-element">
        <span
          className="header-element-content"
          onClick={() => navigate("/sign-up")}
        >
          Sign Up
        </span>
      </div>
    </div>
  )
}

{
  /* <span className="header-element-content">

<IoAddCircleOutline/>
    
    </span> */
}

export default Header
