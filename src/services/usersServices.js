import { BASE_URL } from "../constants";

export const fetchUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/users`)
        .then((res) => res.json())
        .then((res) => res);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
};

export const addUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify({ user }),
      });
      return resolve({ id: Math.random(), ...user });
    } catch (err) {
      return resolve({ id: Math.random(), ...user });
    }
  });
};

export const removeUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify({ id: id }),
      });
      return resolve(id);
    } catch (err) {
      return resolve(id);
    }
  });
};
