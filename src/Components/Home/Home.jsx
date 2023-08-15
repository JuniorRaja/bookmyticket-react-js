import React from "react";

//Asset Imports
import vid from '../../assests/mountainbgvideo.mp4';
import img from '../../assests/flying.png';


const Home = () => {
  return (
    <div className="home flex container">

      <div className="mainText">
        <h2>Create Ever-lasting Travel <br/>
      Memories</h2>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={vid} autoPlay muted loop className="video"></video>
        </div>

        <img src={img} alt="plane" className="plane" />
      </div>

    </div>
  );
};

export default Home;
