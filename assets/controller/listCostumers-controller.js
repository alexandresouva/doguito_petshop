'use strict';
import { customerService } from '../service/client-service.js';

const customerTable = document.querySelector('[data-tabela]');

function createNewCustomer(name, email) {
  const customerLine = document.createElement('tr');
  const content = `
  <td class="td" data-td>${name}</td>
  <td>${email}</td>
  <td>
      <ul class="tabela__botoes-controle">
          <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
  </td>
  `;
  customerLine.innerHTML = content;
  return customerLine;
}

customerService.listCustomers().then((data) =>
  data.forEach((element) => {
    customerTable.appendChild(createNewCustomer(element.nome, element.email));
  })
);
