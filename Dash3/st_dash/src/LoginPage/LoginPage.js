import { useState } from "react";
import user from "../app/assets/images/user.svg";
import login from "../app/assets/images/login.svg";
import cool from "../app/assets/images/cool.svg";
import un from "../app/assets/images/un.png";
import { useParams, useNavigate } from "react-router-dom";

import "./login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Dashboard from "../Dashboard";

const LoginPage = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  let navigate = useNavigate();
  let { username } = useParams();
  const handleSubmit = (values) => {
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
    };
    console.log(comment);
    setModalOpen(false);
  };

  return (<div className="row vw-100 vh-100">
  <div className="col d-none d-lg-block">
    <div className="roller"></div>
    <div class="signupImage text-center position-absolute">
      <h2>New Here?</h2>
      <p id="parag">
        Hey, is this your first time to to visit our website ? If so you
        can sign up here. else you can sign in on the right side.
      </p>
      <button onclick="myFunction()" id="sign-up">
        SIGN Up
      </button>
      <img class="cool" src={cool} alt="" />
    </div>
  </div>

  <div
    className="col border text-center text-primary  d-flex flex-column justify-content-center align-items-center "
    id="signupSide"
  >
    <div class=" p-5 text-center scroll-none m-3 w-50" id="right-cont">
      <h1 className="text-dark">Sign in</h1>
      <form>
        <div class="form-group  text-start">
          <label for="exampleInputEmail1" className="text-dark">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text ">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group text-start">
          <label for="exampleInputPassword1" className="text-dark">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class=" form-group form-check text-start mt-3 mb-3">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label
            class="form-check-label"
            id="checkboxLabel"
            for="exampleCheck1"
            className="text-dark text-sm-white ps-2 "
          >
            Check me out
          </label>
        </div>
        <div>
          <button onClick={()=> {navigate("/dashboard");}} type="submit" class="btn btn-primary text-dark w-50" >
            Submit
          </button>
        </div>
        <div>
          <button class="btn btn-primary mt-3  text-dark w-50">
            Continue with Google
          </button>
        </div>
      </form>
      <p>or Sign in with Social Platforms</p>
      <div class="scoial-link">
        <i class="fa fa-facebook"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-google"></i>
        <i class="fa fa-linkedin-in"></i>
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginPage;
