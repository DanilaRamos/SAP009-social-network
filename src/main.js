import login from './pages/login/login.js';
import cadastro from './pages/cadastro/cadastro.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(login());
        break;
      case '#cadastro':
        main.appendChild(cadastro());
        break;
      default:
        main.appendChild(login());
    }
  });
};
window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});

// import { myFunction } from './lib/index.js';

// window.addEventListener("load", () =>  )

// myFunction();
