import React from 'react';
import "./Login.scss";

const Login = () => {
  return (
    <div className='login'>
        <a href="/" className="atras">Atras</a>
       <form>
        <h2>Iniciar sesión</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
        </div>
        <div class="form-group">
          <label for="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" required></input>
        </div>
        <button type="submit">Ingresar</button>
      </form> 
    </div>
  )
}

export default Login