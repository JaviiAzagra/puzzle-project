/* import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
        <a href="/" className="atras">Atras</a>
      <form>
        <h2>Registro de Usuario</h2>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required></input>
        </div>
        <div class="form-group">
          <label for="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" required></input>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
        </div>
        <div class="form-group">
          <label for="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            required
          ></input>
        </div>
        <div class="form-group">
          <label for="confirmar-contrasena">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmar-contrasena"
            name="confirmar-contrasena"
            required
          ></input>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register; */

import React from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { newUser } from "../../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

const Register = ({ showLogin, setShowLogin }) => {
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
                {...register("password")}
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

export default Register;
