import React from "react"
import Feed from "./Feed/Feed"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <Feed />
      </div>
    </div>
  )
}

export default Home
