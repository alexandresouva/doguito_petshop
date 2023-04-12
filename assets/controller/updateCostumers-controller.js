'use strict';
import { customerService } from '../service/client-service.js';

(async () => {
  const id = new URL(window.location).searchParams.get('id');
  const nameInput = document.querySelector('[data-nome]');
  const emailInput = document.querySelector('[data-email]');
  const form = document.querySelector('[data-form]');

  const customer = await customerService.searchCostumer(id);
  nameInput.value = customer.name;
  emailInput.value = customer.email;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    await customerService.updateCostumer(id, nameInput.value, emailInput.value);
    window.location.href = '../telas/edicao_concluida.html';
  });
})();
