import React, { useState } from "react";
import "./../styles/SignIn.css";
import { db, auth } from "./../firebase/firebase";
import { useHistory, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signIn">
      <div className="signIn__container">
        <div className="signIn__content">
          <img
            className="signIn__logo"
            src="https://logo-base.com/logo/amazon-logo.png"
            alt=""
          />
          <div className="signIn__form">
            <h3 className="signIn__title">Login to Amazon</h3>
            <form>
              <div className="signIn__formField">
                <input
                  type="text"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signIn__formField">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signIn__formFieldBtn">
                <button onClick={signIn} type="submit">
                  Sign In
                </button>
              </div>
            </form>
            <p style={{ textAlign: "center" }}>Or</p>
            <div className="signIn__formFieldBtn" style={{ width: "100%" }}>
              <button onClick={register}>Create new account</button>
            </div>
            <Link to="/" className="signIn__back">
              <ArrowBackIcon /> Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
