import React from "react";
import "./Pages.css";

export default function Home() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <img src="./assets/home/welcome.png" alt="welcome image" className="homeImg"/>
          <p>Please Register or Login</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
