'use strict';
import { customerService } from '../service/client-service.js';

const id = new URL(window.location).searchParams.get('id');
const nameInput = document.querySelector('[data-nome]');
const emailInput = document.querySelector('[data-email]');
const form = document.querySelector('[data-form]');

customerService.searchCostumer(id).then((data) => {
  nameInput.value = data.name;
  emailInput.value = data.email;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  customerService
    .updateCostumer(id, nameInput.value, emailInput.value)
    .then(() => (window.location.href = '../telas/edicao_concluida.html'));
});
