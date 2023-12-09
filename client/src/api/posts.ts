// client/src/api/posts.ts

import axios from 'axios';

export function getPosts() {
  return axios
    .get('http://localhost:3000/posts', {
      params: { _sort: 'tite' },
    })
    .then((res) => res.data);
}
