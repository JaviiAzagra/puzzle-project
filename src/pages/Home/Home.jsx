import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="container--logo">
          <img
            className="container--logo__text"
            src="../../../assets/logotext.png"
            alt="textlogo"
          ></img>
          <img
            className="container--logo__img"
            src="../../../assets/logopz2.png"
            alt="logo"
          ></img>
        </div>

        <div class="container--buttons">
          <button className="container--button__register">
            Create Account
          </button>
          <button className="container--button__login">Login</button>
          <p>
            By tapping Create Account or Sign In, you agree to our Terms. Learn
            how we process your data in our Privacy Policy and Cookies Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
