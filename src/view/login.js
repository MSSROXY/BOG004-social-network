export default () => {
  const viewLogin = `
    <div class="contenedor-register">
      
      <div class="navbar-pantalla2">
        <button class="atras">
        <a href="#/"> <img clas="img-atras" src="../img/icono_atras.png" alt="Atrás"> </a>
        </button>
      </div>

      <div class="logo-login">
        <img src="../img/Logo-codering.png" alt="Logo Codering">
      </div>

      <form id="formularioLogin">
        <label>Correo electrónico</label>
        <input type="email" id="correoLogin" class="formulario"></input>
        <label>Contraseña</label>
        <input type="password" id="contraseñaLogin" class="formulario"></input>
        <button type="submit" class="botones">INICIAR SESIÓN</button>
      </form>

      <div class="separador-login">
        <img src="../img/separador2.png" alt="Separador">
      </div>

      <div class="gyf-login">
        <button type="submit" class="boton-gyf">
        <img src="../img/google.png" alt="Google"> Iniciar sesión con Google</button>
        <button type="submit" class="boton-gyf">
        <img src="../img/facebook.png" alt="Facebook"> Iniciar sesión con Facebook</button>
      </div>
    </div>

  `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewLogin;
  return divElemt;
};