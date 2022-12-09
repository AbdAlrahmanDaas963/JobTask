import React from "react";
import { useLocation } from "react-router-dom";
import img from "../assets/3.png";

function Success() {
  const location = useLocation();
  console.log(location.state);
  const email = location.state.email;

  return (
    <div className="success">
      <div className="container">
        <img className="img img1" src={img} alt="" />
        <div className="content">
          <div className="content-header">
            <div className="title">Successfully logged in</div>
          </div>

          {email && <div>{email}</div>}
        </div>
      </div>
    </div>
  );
}

export default Success;
