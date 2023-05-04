import React from 'react'

const Select = () => {
  return (
    <div className="home">
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
          <a href="/register" className="container--button__register">
            Users
          </a>
          <a href="/login" className="container--button__login">Parents</a>
          <p>
            By tapping Create Account or Sign In, you agree to our Terms. Learn
            how we process your data in our Privacy Policy and Cookies Policy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Select