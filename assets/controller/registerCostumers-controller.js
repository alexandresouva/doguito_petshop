'use strict';
import { customerService } from '../service/client-service.js';

const newCustomerForm = document.querySelector('[data-form]');

newCustomerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = e.target.querySelector('[data-nome]').value;
  const email = e.target.querySelector('[data-email]').value;

  try {
    await customerService.createCustomer(name, email);
    window.location.href = '../telas/cadastro_concluido.html';
  } catch (err) {
    alert(
      'Houve um erro no cadastro do cliente. Tente novamente em alguns instantes.'
    );
    console.error(err);
  }
});
