// client/src/api/users.ts

import axios from 'axios';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export function getUser(id: number): Promise<User> {
  return axios.get(`http://localhost:3000/users/${id}`).then((res) => res.data);
}
