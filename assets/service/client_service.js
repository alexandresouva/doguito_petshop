'use strict';
const http = new XMLHttpRequest();

// Abre a conexão com o servidor
http.open('GET', 'http://localhost:3000/profile');

// Envia a requisição
http.send();

// Ao carregar a página
http.onload = () => {
  const data = http.response;
  console.log(data);
};
