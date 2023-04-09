'use strict';
import { customerService } from '../service/client-service.js';

const newCustomerForm = document.querySelector('[data-form]');

newCustomerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = e.target.querySelector('[data-nome]').value;
  const email = e.target.querySelector('[data-email]').value;

  customerService
    .createCustomer(name, email)
    .then((window.location.href = '../telas/cadastro_concluido.html'));
});
