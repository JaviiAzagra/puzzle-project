import React from "react";
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

export default Register;
