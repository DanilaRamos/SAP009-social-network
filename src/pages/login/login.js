/* eslint-disable no-alert */
import { loginUser, loginGoogle } from '../../lib/api.js';
import logoImagem from '../../imagens/logoImagem.jpeg';
import logo from '../../imagens/Logo.png.png';
import google from '../../imagens/google.ico';

export default () => {
  const container = document.createElement('div');
  const template = `  
    <p class='logo'>
    <img id='logoImagem' src= '${logoImagem}' alt="imagem de um gatinho de óculos e um cachorrinho">
    </p>
    <section class='flex-container'>
    <img id='logo-insta' src='${logo}' alt='imagem de um gatinho de óculos e um cachorrinho'>
    <div class= "vertical"></div> 
    <form class='form'>
    
    <p>E-mail</p>
    <input id='email' class='user-login' type='email' required placeholder='seuemail@dominio.com'>

    <p>Senha</p>
    <input  id='senha' class='user-login' type='password' required placeholder='Senha'>
    

    <section class='buttons'>
      <button id='submitLogin'>Login</button>
      <p>
        <a href='#cadastro' class='cadastre'>Cadastre-se</a>
      </p>
    </section>

    <section class='buttons'>
    <a id='submitGoogle' class='btn'>Login with</a>
    <section class='buttons'>
      <div id="linhaHor1"></div>
    
      <button onClick={actionLoginGoogle} id='googleButton'><img class="google-icon" src="${google}" alt="google-icon">Google</button>
     
      <div id="linhaHor2"></div>
    </section>


    </section>
    </section>
   
    </form>
    `;
  container.innerHTML = template;

  const btnLogin = container.querySelector('#submitLogin');
  const email = container.querySelector('#email');
  const password = container.querySelector('#senha');
  const btnGoogle = container.querySelector('#googleButton');

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        window.location.hash = '#home';
      })
      .catch(() => {
        alert('Login não foi possível tente novamente.');
      });
  });

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginUser(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // eslint-disable-next-line no-console
        console.log(user);
        window.location.hash = '#home';
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Preencha os campos com seu e-mail e senha por favor!');
      });
  });

  return container;
};
