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

export const customerService = {
  listCustomers,
  createCustomer,
  removeCustomer,
};
