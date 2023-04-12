'use strict';

const listCustomers = async () => {
  const customers = await fetch('http://localhost:3000/profile');
  if (customers.ok) return await customers.json();

  throw new Error(`${customers.status} - Não foi possível listar os clientes`);
};

const createCustomer = async (name, email) => {
  const create = await fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });

  if (create.ok) return create.body;
  throw Error(`${create.status} - Não foi possível criar o cliente.`);
};

const removeCustomer = async (id) => {
  const remove = await fetch(`http://localhost:3000/profilde/${id}`, {
    method: 'DELETE',
  });

  if (!remove.ok)
    throw Error(`${remove.status} - Não foi possível excluir o cliente.`);
};

const searchCostumer = async (id) => {
  const costumer = await fetch(`http://localhost:3000/profile/${id}`);
  if (costumer.ok) return costumer.json();

  throw Error(`${costumer.status} - Não foi possível identificar o cliente.`);
};

const updateCostumer = async (id, name, email) => {
  const update = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });
  if (update.ok) return update.json();

  throw Error(`${update.status} - Não foi possível atualizar o cliente.`);
};

export const customerService = {
  listCustomers,
  createCustomer,
  removeCustomer,
  searchCostumer,
  updateCostumer,
};
