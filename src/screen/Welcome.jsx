import React from "react";
import img from "../assets/1.png";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="container">
        <img className="img img1" src={img} alt="" />
        <div className="content">
          <div className="content-header">
            <div className="title">Welcome</div>
            <div className="info">We’re glad you’re here! Sign up to start</div>
          </div>
          <Link to={"signup"} className="sub-btn">
            <div className="btn">Get started</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
