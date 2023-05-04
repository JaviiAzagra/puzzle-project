import React from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { newUser } from "../../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

const RegisterParents = ({ showLogin, setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendRegister = async (formData) => {
    dispatch(newUser(formData, navigate));
    setShowLogin(true);
  };

  const goToLogin = () => {
    setShowLogin(true);
  };
  return (
    <>
      {!showLogin ? (
        <div className="register-container">
          <form onSubmit={handleSubmit(sendRegister)} className="register">
            <h2>Register</h2>
            <div>
              <input
                type="text"
                placeholder="User name"
                {...register("userName")}
                name="userName"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="User email"
                {...register("email")}
                name="email"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Introduce tu contraseña",
                  minLength: {
                    value: 8,
                    message: "Introduce mínimo 8 caracteres",
                  },
                })}
                name="password"
              />
            </div>
            <button>Register</button>
          </form>
          <div className="go-to-login-button">
            <p>or</p>
            <button onClick={goToLogin}>Login</button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default RegisterParents;
