import React from "react"
import SpecialFeed from "./SpecialFeed/SpecialFeed"
import Feed from "./Feed/Feed"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <SpecialFeed />
        <Feed />
      </div>
    </div>
  )
}

export default Home
