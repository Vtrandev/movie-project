import React from 'react';
import Searchbar from "../components/Searchbar";
import LandingImage from "../assets/undraw_movie.png";


const Home = () => {
  return (
    <div className="landing__title">
          <h1 style={{ paddingBottom: "30px" }}>
            Canada's most awarded movie subscription platform
          </h1>
          <h2 style={{ paddingBottom: "40px" }}>
            FIND YOUR MOVIE WITH MOVIE MAGIC
          </h2>
          <Searchbar />
          <img src={LandingImage} alt="Landing image"
          style={{
            maxWidth: "600px"
          }} />
    </div>
  )
}

export default Home