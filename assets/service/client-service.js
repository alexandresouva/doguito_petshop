'use strict';

const listCustomers = () => {
  return fetch('http://localhost:3000/profile').then((response) =>
    response.json()
  );
};

const createCustomer = (name, email) => {
  return fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((response) => response.body);
};

const removeCustomer = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  });
};

const searchCostumer = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((response) =>
    response.json()
  );
};

const updateCostumer = (id, name, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((response) => response.json());
};

export const customerService = {
  listCustomers,
  createCustomer,
  removeCustomer,
  searchCostumer,
  updateCostumer,
};
