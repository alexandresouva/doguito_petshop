'use strict';
import { customerService } from '../service/client-service.js';

const customerTable = document.querySelector('[data-tabela]');

function createNewCustomer(name, email, id) {
  const customerLine = document.createElement('tr');
  const content = `
  <td class="td" data-td>${name}</td>
  <td>${email}</td>
  <td>
      <ul class="tabela__botoes-controle">
          <li><a href="telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
  </td>
  `;
  customerLine.innerHTML = content;
  customerLine.dataset.id = id;
  return customerLine;
}

customerService.listCustomers().then((data) =>
  data.forEach((element) => {
    customerTable.appendChild(
      createNewCustomer(element.name, element.email, element.id)
    );
  })
);

customerTable.addEventListener('click', (e) => {
  const isADeleteBtn = e.target.className.includes('botao-simples--excluir');
  if (isADeleteBtn) {
    const customerLine = e.target.closest('[data-id]');
    const id = customerLine.getAttribute('data-id');

    customerService.removeCustomer(id).then(customerLine.remove());
  }
});
