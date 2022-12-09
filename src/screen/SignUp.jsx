import React from "react";
import img from "../assets/2.png";
import SignupForm from "../components/SignupForm";

function SignUp() {
  return (
    <div className="signup">
      <div className="container">
        <img className="img img1" src={img} alt="" />
        <div className="content">
          <div className="content-header">
            <div className="title">Create Account</div>
            <div className="info">
              Go ahead and sign up, let everyone know how awesome you are!
            </div>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
